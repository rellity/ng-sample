import { CurrencyPipe } from '@angular/common'
import { Component, inject, signal } from '@angular/core'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { Link, injectQueryParam } from '@rellity/ng-router'
import { catchError, debounceTime, distinctUntilChanged, of, switchMap, tap } from 'rxjs'
import { DummyJsonApi, type ProductsResponse } from '../api'

const EMPTY: ProductsResponse = { products: [], total: 0 }

@Component({
  imports: [CurrencyPipe, Link],
  template: `
    <section class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 class="text-sm font-semibold text-slate-900">product search</h2>
      <p class="mt-0.5 text-xs text-slate-500">
        url-synced query → debounced rxjs pipeline → switchMap → signal
      </p>

      <input
        placeholder="search products…"
        autocomplete="off"
        [value]="q() ?? ''"
        (input)="onInput($event)"
        class="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />

      @if (loading()) {
        <p class="mt-3 animate-pulse text-sm text-slate-400">searching…</p>
      } @else if (results(); as response) {
        <ul class="mt-3 divide-y divide-slate-100">
          @for (product of response.products; track product.id) {
            <li>
              <a
                [to]="'/products/:id'" [params]="{ id: product.id }"
                class="flex items-center gap-3 py-2 transition hover:bg-slate-50"
              >
                <img
                  [src]="product.thumbnail"
                  [alt]="product.title"
                  class="h-10 w-10 rounded-lg bg-slate-100 object-cover"
                />
                <span class="flex-1 truncate text-sm text-slate-700">{{ product.title }}</span>
                <span class="text-sm font-semibold tabular-nums text-slate-900">
                  {{ product.price | currency }}
                </span>
              </a>
            </li>
          } @empty {
            <li class="py-2 text-sm text-slate-400">no products found</li>
          }
        </ul>
        <p class="mt-2 text-xs text-slate-500">{{ response.total }} total matches</p>
      }
    </section>
  `,
})
export default class Products {
  readonly #api = inject(DummyJsonApi)
  readonly q = injectQueryParam('q')
  readonly loading = signal(true)
  readonly results = toSignal(
    toObservable(this.q).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.loading.set(true)),
      switchMap((query) =>
        this.#api.searchProducts(query ?? '').pipe(catchError(() => of(EMPTY))),
      ),
      tap(() => this.loading.set(false)),
    ),
  )

  onInput(event: Event) {
    this.q.set((event.target as HTMLInputElement).value || undefined)
  }
}
