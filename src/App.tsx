import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from './containers/layout/Layout';
import logo from './logo.svg';
import { HomePage } from './pages/home/HomePage';

const baseUrl:  string = (document.getElementsByTagName('base')[0] || {}).href;

export default class App extends React.Component {

    public render() {
        return (
            <BrowserRouter
                basename={baseUrl}>
                <div className='App'>
                  <Layout>
                      <Route exact={true} path='/' component={HomePage} />
                  </Layout>
                </div>
            </BrowserRouter>
        );
    }
}
