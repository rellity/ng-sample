import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { BehaviorSubject, catchError, map, of, switchMap } from 'rxjs'
import { DummyJsonApi, type Todo } from './api'

@Component({
  selector: 'app-todos',
  imports: [AsyncPipe],
  template: `
    <section class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-sm font-semibold text-slate-900">todos</h2>
          <p class="mt-0.5 text-xs text-slate-500">service → observable → async pipe</p>
        </div>
        <button
          type="button"
          (click)="refresh()"
          class="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-500 active:scale-95"
        >
          refresh
        </button>
      </div>

      @if (todos$ | async; as todos) {
        <ul class="mt-3 divide-y divide-slate-100">
          @for (todo of todos; track todo.id) {
            <li class="flex items-center gap-3 py-2">
              <input type="checkbox" disabled [checked]="todo.completed" class="h-4 w-4 accent-indigo-600" />
              <span
                class="text-sm text-slate-700"
                [class.line-through]="todo.completed"
                [class.text-slate-400]="todo.completed"
              >
                {{ todo.todo }}
              </span>
            </li>
          } @empty {
            <li class="py-2 text-sm text-slate-400">could not load todos</li>
          }
        </ul>
      } @else {
        <p class="mt-3 animate-pulse text-sm text-slate-400">loading…</p>
      }
    </section>
  `,
})
export class Todos {
  readonly #api = inject(DummyJsonApi)
  readonly #reload = new BehaviorSubject<void>(undefined)
  readonly todos$ = this.#reload.pipe(
    switchMap(() =>
      this.#api.todos(6, this.#randomSkip()).pipe(
        map((response) => response.todos),
        catchError(() => of([] as Todo[])),
      ),
    ),
  )

  refresh() {
    this.#reload.next()
  }

  #randomSkip() {
    return Math.floor(Math.random() * 100)
  }
}
