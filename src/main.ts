import './styles.css'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideZonelessChangeDetection } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { App } from './app'

bootstrapApplication(App, {
  providers: [provideZonelessChangeDetection(), provideHttpClient(withFetch())],
}).catch(console.error)
