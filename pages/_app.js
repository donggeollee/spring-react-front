
import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore} from 'redux';

import createSagaMiddleware from 'redux-saga';

import withRedux from 'next-redux-wrapper';

import AppLayout from "../components/AppLayout"
import reducer from '../reducers';
import rootSaga from '../sagas';


const Home = ({Component, store, pageProps }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>spring-react-vol-1</title>
            </Head>
            <AppLayout>
                <Component {...pageProps} style={{margin:'20px'}}/>
            </AppLayout>
        </Provider> 
    )
}

Home.getInitialProps = async (context) => {
    
    console.log("excute getInitial Props!!!!__app.js")
    const {ctx, Component} = context;
    let pageProps ={};
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps}
}

const configureStore = (initialState, options)=>{
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middleware))
        : compose(applyMiddleware(...middleware),
            !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'     
                ? window.__REDUX_DEVTOOLS_EXTENSION__() 
                : f => f
        );

    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
};

export default withRedux(configureStore)(Home);







