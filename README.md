# Tesla app

This repository contains an app inspired by the Tesla app.

https://user-images.githubusercontent.com/12099455/221868615-9251e841-f32c-4901-9781-e435f47fb5c4.mp4

## Goals
The project was an experiment to see if it was possible to render a 3D model within a React Native app. This project has been on my mind for the last couple of years, but there were no libraries or frameworks available for rendering 3D models within React Native at that time. Creating this project also allowed me to explore other React Native packages such as: [Expo-GL](https://github.com/expo/expo), [React Three Fiber](https://github.com/pmndrs/react-three-fiber), [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler), [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated) and [React Spring](https://github.com/pmndrs/react-spring)

## Known issues and limitations
- When running the app, the console will log the following message `EXGL: gl.pixelStorei() doesn't support this parameter yet!`
- The `useGLTF` hook currently throws an error while loading a model with textures. The root cause of this issue is a missing implementation within React Native [React Three Fiber #1972](https://github.com/pmndrs/react-three-fiber/issues/1972)
- `Expo-GL` currently doesn't support the transmission material property. This results in the app throwing an error. The app imports the material manually to resolve this issue.
- This app was created on a Windows device and tested on a Samsung Galaxy S21. Therefore, I have no clue how it runs on other smartphones.

## Credits
- Thanks to Metarex.4d for providing the model of the Tesla roadster 2020 on [SketchFab](https://sketchfab.com/3d-models/tesla-roadster-2020-1fbf29e297bd4a17ac39a00a378441d8).
- Thanks to [FontAwesome](https://fontawesome.com/) for providing the icons.
- Thanks to Tesla for making an inspiring app.
