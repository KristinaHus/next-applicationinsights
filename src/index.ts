import * as React from 'react';
import { AppProps, default as NextApp, AppContext } from 'next/app';

import { ApplicationInsights, IConfiguration, IConfig } from '@microsoft/applicationinsights-web'

const IS_BROWSER = typeof window !== "undefined";

interface WithApplicationInsightsProps {
  pageName: string;
}

declare global {
  interface Window {
    appInsights?: ApplicationInsights;
  }
}

let appInsights: ApplicationInsights;

export interface ICustomConfig {
  isEnabled: boolean;
}

export const withApplicationInsights = (config: IConfiguration & IConfig & ICustomConfig) => {
  return (App: typeof NextApp) => {
    return class WithApplicationInsights extends React.Component<WithApplicationInsightsProps & AppProps> {
      public static getInitialProps = async (appCtx: AppContext) => {
        let appProps = { pageProps: {} };
        if (App.getInitialProps) {
          appProps = {...appProps, ...await App.getInitialProps(appCtx) };
        }
        return { 
          ...appProps
        };
      }

      public componentDidMount() {
        this.initializeAppInsights();
        this.trackPageView();
      }

      public componentDidCatch(error: Error) {
        if (appInsights) {
          appInsights.trackException({ exception: error });
        }
      }

      public initializeAppInsights() {
        if (IS_BROWSER && config.isEnabled && !appInsights) {
          appInsights = new ApplicationInsights({ config });
          appInsights.loadAppInsights();
          window.appInsights = appInsights;
        }
      }

      public trackPageView() {
        if (appInsights) {
          const name = location.pathname.replace(/(?=.{34})[a-zA-Z0-9]+(-[a-zA-Z0-9]+){4}\//, '')
              || this.props.Component.displayName
              || this.props.Component.name;
          const properties = {
            route: this.props.router.route,
          }
          if (this.props.router.query) {
            for (const key in this.props.router.query) {
              properties[`query.${key}`] = this.props.router.query[key];
            }
          }
          appInsights.trackPageView({ name, properties });
        }
      }

      public render() {
        this.trackPageView();
        return React.createElement(App, this.props);
      }
    }
  };
};