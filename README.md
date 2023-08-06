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
