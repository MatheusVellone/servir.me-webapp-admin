import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'ramda'

import AdminLayout from '../layouts/admin/index'

const styles = () => ({
  root: {
    textAlign: 'center',
  },
})

class Index extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <AdminLayout>
        <div className={classes.root}>
          <Typography variant='display1' gutterBottom>
            Servir.me
          </Typography>
          <Typography>
            You think water moves fast? You should see ice.
          </Typography>
        </div>
      </AdminLayout>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

const enhance = compose(
  withStyles(styles)
)

export default enhance(Index)
