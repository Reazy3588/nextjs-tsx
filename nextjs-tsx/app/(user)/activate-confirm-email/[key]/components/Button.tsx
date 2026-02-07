import React from 'react'
import style from './style.module.css'


type Prpos = {

    title: string,
    onClick ?: () => void,
    classname ?: string,
}

export default function Button({title, onClick, classname}: Prpos) {
  return (
    <>
        <div className="mt-10 flex justify-center">
                <button onClick={onClick} className={`${style.container} ${classname}`}>
                    <span>{title}</span>
                </button>
        </div>
    </>
  )
}


