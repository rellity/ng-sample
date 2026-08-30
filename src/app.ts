import { Component } from '@angular/core'
import { Products } from './products'
import { Todos } from './todos'

@Component({
  selector: 'app-root',
  imports: [Products, Todos],
  template: `
    <main class="mx-auto flex min-h-dvh max-w-md flex-col gap-4 px-4 py-10">
      <header>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900">ng-sample</h1>
        <p class="mt-1 text-sm text-slate-500">
          angular + vite-plugin-angular + tailwind, data from dummyjson.com
        </p>
      </header>
      <app-products />
      <app-todos />
    </main>
  `,
})
export class App {}
