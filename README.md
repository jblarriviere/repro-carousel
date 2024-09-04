# Repro for crash using useAnimatedScrollHandler 

## 🚀 How to use

- Install packages with `yarn` or `npm install`.
- Run `npx expo run:ios` and/or `npx expo run:android`. Requires native toolchains to be installed.
- Comment one of the 2 lines in `onBeginDrag` param of `useAnimatedScrollHandler` to test one of the behaviours
- The `working` one fine no matter wether new arch is enabled or not
- The `crashing` one generates an exception when new arch is enabled

