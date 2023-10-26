#React NR

#Parcel
Dev build
Local Server
HMR(auto refresh)
File watching algorithm(written in C++)
Caching - Faster builds
Image Optimization
Minification
Bundling
Compress
Code Splitting
Differential bundling - to support older browsers
Diagnostic and good error handling
Give a way to host app on https (currently http://localhost:1234/)
Tree shaking

Food App

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, cuisine, delery tie
- Footer
- - Copyright
- - Links
- - Address
- - Contact

Two types of Export/Import

- Default Export/Import
  export default Component;
  import Component from "path";

- Named Export/Import
  export const Component;
  import {Component} from "path";

React Hooks
(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End To End Testing (e2e)

# Setting up testing in our app

- Install React Testing library
- Install jest
- Install Babel dependencies
- Configure Babel
- Configure parcel config file to disable default babel transpilation
- Jest configuration: npx jest --init
- Install JSDOM library
- Install @babel/preset-react libarary to support JSX in testing library
- Include @babel/preset-react inside babel config
- Install @testing-libarary/jest-dom
