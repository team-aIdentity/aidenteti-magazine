import { createBrowserRouter } from "react-router-dom";

import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    // {
    //     path: '/article',
    //     element: <Article />
    // },
    // {
    //     path: '/trend',
    //     element: <Trend />,
    //     children: [
    //         {
    //             path: ':id',
    //             element: <TrendDetail />
    //         }
    //     ]
    // },
    // {
    //     path: '/develop',
    //     element: <Develop />,
    //     children: [
    //         {
    //             path: ':id',
    //             element: <DevelopDetail />
    //         }
    //     ]
    // },
    // {
    //     path: '/market',
    //     element: <Market />
    // },
    // {
    //     path: '/community',
    //     element: <Community />,
    //     children: [
    //         {
    //             path: 'lounge',
    //             element: <Lounge />
    //         },
    //         {
    //             path: 'expert',
    //             element: <Expert />
    //         }
    //     ]
    // },
]);

export default router;