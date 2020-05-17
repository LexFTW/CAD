## DCA (Diabetes Control and Automation) <img src="https://img.shields.io/badge/npm-6.4.1-blue" /> <img src="https://img.shields.io/badge/react_native-0.61.4-green" /> <img src="https://img.shields.io/badge/react_native_cli-2.0.1-green" />

DCA (Control and Automation of Diabetes) is a project that seeks to establish a system that allows the user to have more accurate and automated control over his blood glucose level in his day to day.

In this project will consist the part of *software*, the idea is that in a future add the *hardware* part where from the configuration set of rules established by the user, the device allows to regulate the glucose automatically to the user.

---

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Before you can start and start working with the application, it is important to have Node and NPM installed. To check if you have both tools installed, open a terminal and write these statements.

```
node -v
```
```
npm -v
```

### Installing
Once you have Node and NPM installed, from the terminal pointing to the root directory of the project, you will execute this statement.

```
npm install
```

This will cause all the packages and libraries necessary for the proper functioning of the application to be installed in the *node_modules* folder

After do this, you have to change two files to correct functionality:
 
 ```
CAD-master\node_modules\@react-navigation\bottom-tabs\src\views\BottomTabBar.tsx
 ```
 ```
CAD-master\node_modules\@firebase\firestore\dist\index.cjs.js
 ```
 
 The correct files are in folder *replace*.

## Testing
For test the app, you should write the next sentence in the terminal:

```
npm test
```

## Deployment
For deploy the app in Android, iOS or Web, from the terminal pointing to the root directory of the project, you will execute this statement.

```
expo start
```

Once executed, a window will open in your default browser and you can select in which System you want to run the application.

*To do it from Android or iOS, you will need to have the Expo app installed on your mobile or have an emulator on your computer*

## Built With
* [ReactJS](https://reactjs.org/) - The web framework used
* [ExpoCLI](https://expo.io/) - The web framework used for a compiler the app in Android, IPhone and Web.
* [JestJS](https://jestjs.io/) - The framework for unit test and mock.
* [Firebase](https://firebase.google.com/) - The host for the app.

## Project Details
Please read *Wiki* for details on how we have worked on this project.

## Authors
* Alexis Mengual Vázquez
* David Usón
