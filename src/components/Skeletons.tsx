import Skeleton from "./ui/Skeleton"

function Skeletons({count}: {count: number}) {
  return <>{Array.from(Array(count || 1).keys()).map((n) =><Skeleton  key={n} />)}</>
   
}

export default Skeletons