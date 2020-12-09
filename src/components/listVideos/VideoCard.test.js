import { render, screen, fireEvent} from './testingUtil'
import '@testing-library/jest-dom/extend-expect'
import VideoCard from './VideoCard';
import { Message } from './Message';
import React from 'react';
import VideoContext from '../../providers/VideoContext';



describe("<VideoCard/>",()=>{
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

    it('Simple test to show how to work', ()=> {
        const num1 = 1;
        const num2 = 2;
        expect(num1 + num2).toBe(3);
    });
    test("renders VideoCard component ", () => {
        const name = "chabelo"
        render(<Message title = {name}/>);
        expect(screen.getByText(name)).toBeInTheDocument()
    });

    test("trigger onclick event on VideoCard to set video properties",()=> {
        const setSelectedVideoProppertiesMock = jest.fn();
        const changinggSetChangingg = jest.fn();
        const mockTrigger = {
            // response: {},
            // setResponse: jest.fn,
            // videoMetaInfo: [],
            // setVideoMetaInfo: jest.fn,
            // videoPropperties: {},
            setSelectedVideoPropperties: setSelectedVideoProppertiesMock,
            // userSession: {},
            // setUserSession: jest.fn,
            changingg: false,
            changinggSetChangingg: changinggSetChangingg,
            // favoriteVideosMapUser: new Map(),
            // setFavoriteVideosMapUser: jest.fn,
            // favoritesFlag: false,
            // setFavoritesFlag: jest.fn,
            // favoritesVideosArrayUser: [],
            // setFavoritesVideosArrayUser: jest.fn
        }
        const name = "chabelo"
        const image = "https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg";
        const param = {
            videoName: name,
            imageVideo: image
        }
        render(<VideoContext.Provider value={mockTrigger}>
            <VideoCard name={name} imagen={image} />
        </VideoContext.Provider>);
        const videoCard = screen.getByRole("che-luis");
        fireEvent.click(videoCard)
        expect(setSelectedVideoProppertiesMock).toBeCalledWith(param);
        expect(changinggSetChangingg).toBeCalledWith(true)

    })

    test("2", () => {
        const name = "chabelo"
        render(<VideoContext.Provider value={mockValue}>
            <VideoCard name={name} imagen='https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg' />
        </VideoContext.Provider>);
        // render(<VideoCard name={name} imagen='https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg' />);
        expect(screen.getByText(name)).toBeInTheDocument()
        expect(screen.getByAltText(name)).toBeInTheDocument()
        // //const { container, getByText }= render(<VideoCard name={name} imagen='https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg' />);
        // //expect(getByText(name)).toBeInTheDocument();
    })
})
