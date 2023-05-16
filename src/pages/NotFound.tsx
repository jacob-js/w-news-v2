import { Button } from "@mui/joy"
import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src="/lost.svg" alt="" className="w-80" />
      <div className="my-5">Looks like you're lost.</div>
      <Button variant="soft" size="lg" color="neutral" style={{paddingLeft: 40, paddingRight: 40}} onClick={() =>navigate('/', {replace: true})}>Go Back Home</Button>
    </div>
  )
}

export default NotFound