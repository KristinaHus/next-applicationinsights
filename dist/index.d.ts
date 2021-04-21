import * as React from 'react';
import { default as NextApp } from 'next/app';
import { ApplicationInsights, IConfiguration, IConfig } from '@microsoft/applicationinsights-web';
interface WithApplicationInsightsProps {
    pageName: string;
}
declare global {
    interface Window {
        appInsights?: ApplicationInsights;
    }
}
export interface ICustomConfig {
    isEnabled: boolean;
}
export declare const withApplicationInsights: (config: IConfiguration & IConfig & ICustomConfig) => (App: typeof NextApp) => {
    new (props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
        Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
        router: import("next/dist/client/router").Router;
    }>): {
        componentDidMount(): void;
        componentDidCatch(error: Error): void;
        initializeAppInsights(): void;
        trackPageView(): void;
        render(): React.ComponentElement<import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, unknown>;
            router: import("next/dist/client/router").Router;
        }, NextApp<unknown, unknown>>;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: WithApplicationInsightsProps & import("next/app").AppInitialProps & {
        Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
        router: import("next/dist/client/router").Router;
    }, context?: any): {
        componentDidMount(): void;
        componentDidCatch(error: Error): void;
        initializeAppInsights(): void;
        trackPageView(): void;
        render(): React.ComponentElement<import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, unknown>;
            router: import("next/dist/client/router").Router;
        }, NextApp<unknown, unknown>>;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WithApplicationInsightsProps & import("next/app").AppInitialProps & {
            Component: import("next-server/dist/lib/utils").NextComponentType<import("next-server/dist/lib/utils").NextPageContext, any, {}>;
            router: import("next/dist/client/router").Router;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    getInitialProps: (appCtx: import("next-server/dist/lib/utils").AppContextType<import("next/dist/client/router").Router>) => Promise<{
        pageProps: {};
    }>;
    contextType?: React.Context<any>;
};
export {};
