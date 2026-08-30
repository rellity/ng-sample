# ng-sample

angular on vite via [@rellity/vite-plugin-angular](https://github.com/rellity/vite-plugin-angular), styled with tailwind, data from [dummyjson.com](https://dummyjson.com).

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

## github pages

no ci — build and push the `gh-pages` branch by hand:

```sh
npm run build:pages
git checkout gh-pages
cp -r dist/* dist/.nojekyll .
git add -A && git commit -m "chore: publish build to github pages"
git push origin gh-pages
git checkout main
```
