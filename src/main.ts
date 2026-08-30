import './styles.css'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideZonelessChangeDetection } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { App } from './app'
import { router } from './router'

bootstrapApplication(App, {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    router,
  ],
}).catch(console.error)
