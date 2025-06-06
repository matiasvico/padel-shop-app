import React from "react";
import { Provider } from "react-redux";
import { store } from './src/store/store';
import { StatusBar } from "expo-status-bar";
import SQLiteInit from './src/init/SQLiteInit';


export default function App() {

    return (
        <Provider store={store}>
            <SQLiteInit />
            <StatusBar style="light" />
        </Provider>
    )
};