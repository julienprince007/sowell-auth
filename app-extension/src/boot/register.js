import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-sowell-auth'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
