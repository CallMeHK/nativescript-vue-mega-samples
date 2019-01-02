# NativeScript-Vue MEGA SAMPLES

> A native application built with NativeScript-Vue to showcase methods of implementing commonly requested features

## What is in here

To explore the component code that implements the common features of this app, go to app/components

### API Call Page

This page demonstrates a simple api call with axios to the magic the gathering api.  I learned in this part that you cannot display web images that are http instead of https addresses, so the photo is stored locally.  I will add and exception later on.  

### Detect Online Page

This page uses the nativescript connectivity core module to check the connection type, mobile, wifi, or none.  A permission has also been added to the app to allow the app to access this feature on a device, which can be found at /app/App_Resources/Android/src/main/AndroidManifest.xml. 

### Key Value Page

This page uses the applications settings core module to store data associated with the app locally.  This can be thought of like localstorage in traditional web developement.  Many developers save usernames and passowrds here, but it may be a better idea to use the nativescript-secure-storage module, which implements packages from Facebook and Apple to store encrypted values.  

### Scroll Page

Simple scrolling list view that renders with a for loop via v-template.  Pokemon.  There is an onclick for development purposes.

### Simple Form Page

Demo of some input components and pickers.  No focus or special sauce. Probably should use RadForms if you  want to do this right.

### SQLite Page

Demo of nativescript-sqlite package.  Very simple and easy to use once you get it.  I like nosql better, and would like to check out the nativescript implementation of couchdb, but this seems pretty easy and effective.  Also, should probably sync this with vuex rather than individual components to save time and sanity.

### Vuex Demo Page

A bank of temporary variables that all components in the app can reach for and change.  Can use it to push changes to app settings and sqlite.  When a subscribed variable changes, views that use that variable re renders.  Very very useful.  

### Webview Page

Can embed html or display https sites in window within app. 

## Planned features

- Components within components
- Passing props to components and with router
- Add permission for magic api non https images
- vuex with sqlite and keyvalues
- couchdb implementation
- access camera via core package
- encryption for APK
- RadForms, RadCharts, RadCalendar

## Usage

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```
