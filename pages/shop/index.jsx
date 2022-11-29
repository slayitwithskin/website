import {React, useState} from 'react'
import Soon from '../../hocs/Soon'
import Shop from './shop'

const ShopIndex = () => {
    const [status, setStatus] = useState(false)
  return (
    <>
        {status ? <Shop/> : <Soon />}
    </>
  )
}

export default ShopIndex