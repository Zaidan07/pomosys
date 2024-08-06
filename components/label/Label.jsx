import React from 'react'
import { LabelContainer } from './Label.styled'

export default function Label ({icon: Icon , text,mode, active}) {
  return (
    <>
      <LabelContainer mode={mode} active={active}>
        <Icon size={32}/>
        {text}
      </LabelContainer>
    </>
  )
}
