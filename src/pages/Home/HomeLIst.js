import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeLIst(props) {
  const navigate = useNavigate()
  return (
    <ol className="flex flex-col align-center mt-5 text-lg">
      {!props.data ? (
        <div>Loading</div>
      ) : (
        props.data.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                navigate(`/players/${item.name}`)
              }}
              className="font-medium bg-list-color mb-1 flex py-2 pl-2 hover:bg-list-hover"
            >
              <img
                src={item.avatar}
                alt={`${item.name}的图标`}
                className="w-8 h-8 mr-4"
              />
              <span>{item.name}</span>
            </li>
          )
        })
      )}
    </ol>
  )
}
