import {render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import SearchBar from './SearchBar';
import React from 'react';

describe("<SeachBar/>",()=> {
    const mockValue = {
        // response: {},
        // setResponse: jest.fn,
        // videoMetaInfo: [],
         setVideoMetaInfo: jest.fn(),
        // videoPropperties: {},
        // setSelectedVideoPropperties: jest.fn,
        // userSession: {},
        // setUserSession: jest.fn,
        changingg: false,
        changinggSetChangingg: jest.fn(),
        // favoriteVideosMapUser: new Map(),
        // setFavoriteVideosMapUser: jest.fn,
        // favoritesFlag: false,
        setFavoritesFlag: jest.fn(),
        // favoritesVideosArrayUser: [],
        // setFavoritesVideosArrayUser: jest.fn
    }
    test('renders SearhBar in DOM',()=>{
        render(
            <VideoContext.Provider value={mockValue}>
                <SearchBar/>
            </VideoContext.Provider>
        );
        expect(screen.getByPlaceholderText("Search Video...")).toBeTruthy();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
})
