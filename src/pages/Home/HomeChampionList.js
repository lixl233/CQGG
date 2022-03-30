import React from 'react'
// import { useNavigate } from 'react-router-dom'

export default function HomeChampionLIst(props) {
  // const navigate = useNavigate()
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
                alert(
                  '英雄详情页面开发中，未上线，请移步 CHAMPIONS 页面查看英雄数据！'
                )
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
