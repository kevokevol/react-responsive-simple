import React from 'react';
import { render} from 'react-dom';
import { MobileAndTablet, Desktop } from '../../src';
const App = () => (
    [
    <MobileAndTablet>
       <div>ya yeet</div>
    </MobileAndTablet>,
    <Desktop>
        <div>na neet</div>
    </Desktop>
    ]
);
render(<App />, document.getElementById("root"));