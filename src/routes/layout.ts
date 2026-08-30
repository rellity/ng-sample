import { Component } from '@angular/core'
import { RouterLink, RouterOutlet, injectNavigating } from '@rellity/ng-router'

@Component({
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="mx-auto flex min-h-dvh max-w-md flex-col gap-4 px-4 py-8">
      <header class="flex items-baseline justify-between">
        <h1 class="text-xl font-bold tracking-tight text-slate-900">ng-sample</h1>
        <nav class="flex items-center gap-4 text-sm">
          <a routerLink="/" routerLinkActive="font-semibold text-indigo-600" [routerLinkActiveOptions]="{ exact: true }" class="text-slate-600 transition hover:text-slate-900">home</a>
          <a routerLink="/products" routerLinkActive="font-semibold text-indigo-600" class="text-slate-600 transition hover:text-slate-900">products</a>
          <a routerLink="/todos" routerLinkActive="font-semibold text-indigo-600" class="text-slate-600 transition hover:text-slate-900">todos</a>
          @if (navigating()) {
            <span class="h-2 w-2 animate-pulse rounded-full bg-indigo-500" data-testid="navigating"></span>
          }
        </nav>
      </header>
      <router-outlet />
    </div>
  `,
})
export default class RootLayout {
  readonly navigating = injectNavigating()
}
