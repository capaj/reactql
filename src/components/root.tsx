import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'
import { Global } from '@emotion/core'

// Components
import ScrollTop from '@/components/helpers/scrollTop'

// Global styles
import globalStyles from '@/global/styles'

// By default, pull in the ReactQL example. In your own project, just nix
// the `src/components/example` folder and replace the following line with
// your own React components
import Example from '@/components/example'

// ----------------------------------------------------------------------------

const Root: FC = () => (
  <div>
    <Global styles={globalStyles} />
    <Helmet>
      <title>4Home</title>
    </Helmet>
    <ScrollTop>
      <Switch>
        <Route path="/" exact component={Example} />
      </Switch>
    </ScrollTop>
  </div>
)

export default hot(Root)
