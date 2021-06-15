import '@riotjs/hot-reload'
import { component } from 'riot'
import application from './application.riot'
import registerGlobalComponents from './register-global-components'

// register
registerGlobalComponents()

// mount the root tag
component( application )( document.body, {
  title: 'Hello world!'
} )
