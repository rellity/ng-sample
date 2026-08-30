import { CurrencyPipe } from '@angular/common'
import { Component, inject, input } from '@angular/core'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { RouterLink, href } from '@rellity/ng-router'
import type { RouteMeta } from '@rellity/ng-router'
import { catchError, of, switchMap } from 'rxjs'
import { DummyJsonApi } from '../../api'

export const route: RouteMeta = {
  title: 'product',
}

@Component({
  imports: [CurrencyPipe, RouterLink],
  template: `
    <section class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <a [routerLink]="backLink" class="text-xs text-indigo-600 hover:underline">← back to search</a>
      @if (product(); as p) {
        <div class="mt-3 flex items-start gap-4">
          <img [src]="p.thumbnail" [alt]="p.title" class="h-20 w-20 rounded-xl bg-slate-100 object-cover" />
          <div>
            <h2 class="font-semibold text-slate-900" data-testid="product-title">{{ p.title }}</h2>
            <p class="text-sm font-semibold tabular-nums text-indigo-600">{{ p.price | currency }}</p>
            <p class="mt-1 text-sm text-slate-500">{{ p.description }}</p>
            <p class="mt-2 text-xs text-slate-400">route param id: <span data-testid="product-id">{{ id() }}</span></p>
          </div>
        </div>
      } @else {
        <p class="mt-3 animate-pulse text-sm text-slate-400">loading…</p>
      }
    </section>
  `,
})
export default class ProductDetail {
  readonly id = input.required<string>()
  readonly #api = inject(DummyJsonApi)
  readonly product = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) => this.#api.product(id).pipe(catchError(() => of(null)))),
    ),
  )
  readonly backLink = href('/products')
}
