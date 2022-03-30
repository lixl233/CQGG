import React from 'react'
import { Link } from 'react-router-dom'
// import './menu.css'

export default function Menu() {
  return (
    <div className="w-16 md:w-64 fixed">
      <div className="mb-8">
        <Link to="/">
          <div className="w-full md:h-56 flex flex-col justify-center items-center">
            <img
              src={require('../assets/logo.webp')}
              alt="s"
              className="relative top-10 w-12 md:w-32"
            />
            <span className="w-0 overflow-hidden md:w-auto text-2xl text-yellow-300">
              Champions
            </span>
            <span className="w-0 overflow-hidden md:w-auto relative -top-2 text-4xl">
              Queue
            </span>
          </div>
        </Link>
      </div>
      <nav className="text-bold text-base font-medium">
        <Link to="/players">
          <div className="h-14 flex leading-4">
            <svg className="icon ml-5 md:ml-14 mr-4" aria-hidden="true">
              <use xlinkHref="#icon-paixingbang"></use>
            </svg>
            <span className="hidden md:inline">PLAYERS</span>
          </div>
        </Link>
        <Link to="/champions">
          <div className="h-14 flex leading-4">
            <svg className="icon ml-5 md:ml-14 mr-4" aria-hidden="true">
              <use xlinkHref="#icon-shujuwajue"></use>
            </svg>
            <span className="hidden md:inline">CHAMPIONS</span>
          </div>
        </Link>
        <Link to="/matches">
          <div className="h-14 flex leading-4">
            <svg className="icon ml-5 md:ml-14 mr-4" aria-hidden="true">
              <use xlinkHref="#icon-match"></use>
            </svg>
            <span className="hidden md:inline">MATCHES</span>
          </div>
        </Link>
        <Link to="/teams">
          <div className="h-14 flex leading-4">
            <svg className="icon ml-5 md:ml-14 mr-4" aria-hidden="true">
              <use xlinkHref="#icon-jigouduiwu"></use>
            </svg>
            <span className="hidden md:inline">TEAMS</span>
          </div>
        </Link>
      </nav>
    </div>
  )
}
