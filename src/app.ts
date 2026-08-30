import { Component } from '@angular/core'
import { RouterOutlet } from '@rellity/ng-router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App {}
