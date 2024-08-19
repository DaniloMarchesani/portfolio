import React, { FC } from 'react'
import { IContainer } from './interface'

export const Container: FC<IContainer> = ({ children }) => {
  return (
    <div className='mx-auto my-0 max-w-[1000px]'>
        {children}
    </div>
  )
}