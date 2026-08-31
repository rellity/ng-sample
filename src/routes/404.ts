import { Component } from '@angular/core'
import { Link, injectUrl } from '@rellity/ng-router'

@Component({
  imports: [Link],
  template: `
    <section class="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <h2 class="text-sm font-semibold text-slate-900">404</h2>
      <p class="mt-1 text-sm text-slate-500">
        no page at <code class="rounded bg-slate-100 px-1" data-testid="missed-url">{{ url() }}</code>
      </p>
      <a to="/" class="mt-2 inline-block text-sm text-indigo-600 hover:underline">go home</a>
    </section>
  `,
})
export default class NotFound {
  readonly url = injectUrl()
}
