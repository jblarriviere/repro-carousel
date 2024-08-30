# Repro for crash using useAnimatedScrollHandler 

## 🚀 How to use

- Install packages with `yarn` or `npm install`.
- Run `npx expo run:ios` and/or `npx expo run:android`. Requires native toolchains to be installed.
- Replace `onBeginDrag` param of `useAnimatedScrollHandler` by any of the callback defined above.
- The `working` ones are called just fine, when the `crashing` ones generate an exception

