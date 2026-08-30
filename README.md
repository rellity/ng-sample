# ng-sample

angular on vite via [vite-plugin-angular](https://github.com/rellity/vite-plugin-angular), styled with tailwind, data from [dummyjson.com](https://dummyjson.com).

- inline templates only, no separate html or css files, no router
- zoneless, standalone components, signals
- tailwind v4 through `@tailwindcss/vite`
- product search: signal → debounced rxjs pipeline (`debounceTime`, `switchMap`) → signal
- todos: the typical workflow — injectable service, `HttpClient`, observable, `async` pipe

## run

```sh
npm i
npm run dev
```
