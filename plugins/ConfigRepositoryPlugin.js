import { ConfigRepository } from '~/repositories/ConfigRepository'

export default (context, inject) => {
  inject('configRepository', new ConfigRepository())
}
