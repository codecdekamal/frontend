import { NavLink } from "react-router-dom"
const Alert = ({message}) => {
  return (
    <div class="alert alert-success d-flex align-items-center justify-content-center text-danger " role="alert">
  {message}
</div>

  )
}

export default Alert
