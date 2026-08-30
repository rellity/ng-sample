import { provideFileRouter } from '@rellity/ng-router'
import { routes } from '@rellity/ng-router/routes'

// hash urls so deep links work on github pages without server config
export const router = provideFileRouter(routes, {
  hash: true,
  titleTemplate: '%s · ng-sample',
})
