# react-responsive-simple
React components that are enabled according to viewport width. [View on NPM](https://www.npmjs.com/package/react-responsive-simple)

# Usage
Run `yarn add react-responsive-simple` or `npm install react-responsive-simple`
Import the components you want at the start of the files you need them in. Components available:
- `<Mobile>`: Renders on viewports <768px wide
- `<MobileAndTablet>`: Renders on viewports <992px wide
- `<Tablet>`: Renders on viewports >=768px and <992px wide
- `<Desktop>`: Renders on viewports >=992px wide
- `<SmallDesktop>`: Renders on viewports >=992px and <1200px wide
- `<LargeDesktop>`: Renders on viewports >=1200px wide

Maximally, we can define 3 different breakpoints, with 4 different views. Usually, `<MobileAndTablet>` and `<Desktop>` 
should be sufficient. 

In addition, you can define your own breakpoints with `<ResponsiveComponent>` using the props `min` and `max`. If you would like to leave either undefined, you just leave the prop undefined. For example: `<ResponsiveComponent min={1000}>` becomes active at viewports of >=1000px wide, and `<ResponsiveComponent max={1000}>` is the corresponding component which becomes active at viewports of <1000px wide.

# Example
```
import React from 'react';
import { render} from 'react-dom';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';
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
```

Yields:
<div><img src="https://github.com/kevinl94303/react-responsive-simple/blob/master/examples/screenshots/desktop-view.png?raw=true" width=50%/></div>
on screens above 992px wide and 
<div><img src="https://github.com/kevinl94303/react-responsive-simple/blob/master/examples/screenshots/mobile-view.png?raw=true" width=50%/></div>
on screens below 992px wide.
