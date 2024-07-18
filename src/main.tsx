import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ConfigProvider } from 'antd';
import './index.css';
import './styles.less';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider theme={{ hashed: false }}>
            <App />
        </ConfigProvider>
    </React.StrictMode>
);
