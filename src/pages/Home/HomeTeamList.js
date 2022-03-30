import React from 'react'

export default function HomeTeamList(props) {
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
                  '战队详情页面开发中，未上线，请移步 TEAMS 页面查看战队信息！'
                )
              }}
              className="font-medium bg-list-color mb-1 flex py-2 pl-2 hover:bg-list-hover"
            >
              <img
                src={require(`../../assets/team/${item.tag}.png`)}
                alt={`${item.tag}战队队标`}
                className="w-8 h-8 mr-4"
              />
              <span>{item.tag}</span>
            </li>
          )
        })
      )}
    </ol>
  )
}
