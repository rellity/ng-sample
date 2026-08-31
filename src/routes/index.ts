import { Component } from '@angular/core'
import { Link } from '@rellity/ng-router'

@Component({
  imports: [Link],
  template: `
    <section class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 class="text-sm font-semibold text-slate-900">file-based routing showcase</h2>
      <p class="mt-1 text-sm text-slate-500">
        angular + vite-plugin-angular + ng-router + tailwind, data from dummyjson.com
      </p>
      <ul class="mt-3 space-y-1 text-sm">
        <li><a to="/products" class="text-indigo-600 hover:underline">product search</a> — url-synced query through a debounced rxjs pipeline</li>
        <li><a to="/products/:id" [params]="{ id: 1 }" class="text-indigo-600 hover:underline">a product page</a> — route param bound straight to a signal input</li>
        <li><a to="/todos" class="text-indigo-600 hover:underline">todos</a> — service, observable, async pipe</li>
      </ul>
    </section>
  `,
})
export default class Home {}
