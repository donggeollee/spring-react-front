import Head from 'next/head';
import { Provider, useSelector } from 'react-redux';
import { applyMiddleware, compose, createStore} from 'redux';

import createSagaMiddleware from 'redux-saga';

import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import AppLayout from "../components/AppLayout"
import reducer from '../reducers';
import rootSaga from '../sagas';
import axios from 'axios';

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
    const { ctx, Component } = context;

    let pageProps = {}; 
    const state = ctx.store.getState();
    // const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
    // axios.defaults.headers.cookie = '';
    /*
    if ( ctx.isServer && cookie ){
        axios.defaults.headers.cookie = cookie;
    }
    */
   // 로컬스토리지에 JWT_TOKEN이 있다면 
   // 서버사이드 렌더링으로 API 서버에서 유저정보를 가져오고 싶은데
   // 프론트서버에서는 로컬스토리지에 접근할 수 없는 문제 때문에 
   // 일단 위의 useEffect()에서 CSR로 가져오고 있음
   /*
    if( !state.user.user.username && ctx.isServer ){
        ctx.store.dispatch({
            type : LOAD_USER_REQUEST, 
        });
    }
    */
    if( Component.getInitialProps ){
        pageProps = await Component.getInitialProps(ctx) || {};
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
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export default withRedux(configureStore)(withReduxSaga(Home));







