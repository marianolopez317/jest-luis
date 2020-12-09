import VideoContext from '../../providers/VideoContext';
import { render } from '@testing-library/react'
import React from 'react'


const mockValue = {
    // response: {},
    // setResponse: jest.fn,
    // videoMetaInfo: [],
    // setVideoMetaInfo: jest.fn,
    // videoPropperties: {},
    // setSelectedVideoPropperties: jest.fn,
    // userSession: {},
    // setUserSession: jest.fn,
    changingg: false,
    changinggSetChangingg: jest.fn(),
    // favoriteVideosMapUser: new Map(),
    // setFavoriteVideosMapUser: jest.fn,
    // favoritesFlag: false,
    // setFavoritesFlag: jest.fn,
    // favoritesVideosArrayUser: [],
    // setFavoritesVideosArrayUser: jest.fn
}

export const MockVideoContext = () => ( React.createContext(mockValue) );

// beforeAll(() => {
//     jest.mock('../../providers/VideoContext', () => {
//         const React = require('react');
//         return (
//             {
//                 __esModule: true,
//                 default: React.createContext()
//             }
//         ).mockImplementationOnce(() => {
//             return MockVideoContext
//         })
//     }
//     );
// });



const ProviderWrapper = ({ children }) => (
    <VideoContext.Provider>
        {children}
    </VideoContext.Provider>
);

const customRender = (ui, { ...renderOpts } = {}) => {
    return render(ui, { wrapper: ProviderWrapper, ...renderOpts });
};

// re-export everything
export * from "@testing-library/react";

// override render method
//export { customRender as render };
