require('../less/main.less')
require('../node_modules/basscss/css/basscss.min.css')
'use strict'

import React from 'react'
import App from './containers/App'

React.render(<App />, document.getElementById('content'))
