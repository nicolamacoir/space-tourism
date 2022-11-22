import React from 'react'
import { SubHeading } from './subheading.styles'

const sh = ({children}) => {
  return (
    <SubHeading>
      { children }
    </SubHeading>
  )
}

export default sh