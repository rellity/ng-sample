# ng-sample

angular on vite via [@rellity/vite-plugin-angular](https://github.com/rellity/vite-plugin-angular), file-based routing via [@rellity/ng-router](https://github.com/rellity/ng-router), styled with tailwind, data from [dummyjson.com](https://dummyjson.com).

- inline templates only, no separate html or css files
- zoneless, standalone components, signals
- file-based routes under `src/routes/` (layout, `[id]` params, 404 catch-all), hash urls so deep links work on github pages
- tailwind v4 through `@tailwindcss/vite`
- product search: url-synced query (`injectQueryParam`) → debounced rxjs pipeline (`debounceTime`, `switchMap`) → signal, rows link to `/products/:id` where the param binds straight to a signal input
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
