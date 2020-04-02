import chalk from 'chalk'

import { build, common } from './app'

// ----------------------------------------------------------------------------

common.spinner.info(chalk.bgBlue('Build mode'))

void (async () => {
  await build()
  common.spinner.succeed('Finished building')
})()
