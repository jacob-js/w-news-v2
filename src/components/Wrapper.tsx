import { PropsWithChildren } from 'react'

function Wrapper({children}: PropsWithChildren) {
  return (
    <div className='max-w-7xl w-11/12 mx-auto'>{children}</div>
  )
}

export default Wrapper