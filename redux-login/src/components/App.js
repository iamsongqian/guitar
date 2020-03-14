import React from 'react'
import { withRouter } from 'react-router-dom'
const App = props => {
  console.log(props)
  return (
    <div>
      <h2>Welcome:{props.location.state?.name}</h2>
    </div>
  )
}
export default withRouter(App)
