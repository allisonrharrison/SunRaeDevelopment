import React, { useState } from 'react'
import { Tooltip } from 'reactstrap'

import './Socials.scss'

const TooltipItem = props => {
  const { item, id } = props
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const toggle = () => setTooltipOpen(!tooltipOpen)

  return (
    <span>
      <a href={item.href} id={'Tooltip-' + id} target="_blank" rel="noreferrer">
      <i className={item.icon}></i>
      </a>
      <Tooltip
        placement={item.placement}
        href={item.href}
        isOpen={tooltipOpen}
        target={'Tooltip-' + id}
        toggle={toggle}
        innerClassName={'tt-inner'}
      >
        {item.text}
      </Tooltip>
    </span>
  )
}

const Socials = props => {
  return (
    <div id="social">
      {[
        {
          placement: 'bottom',
          href: 'https://www.github.com/allisonrharrison/',
          icon: 'fab fa-github fa-lg',
          text: '/allisonrharrison'
        },
        {
          placement: 'bottom',
          href: 'https://www.twitter.com/SunRaeDev/',
          icon: 'fab fa-twitter fa-lg',
          text: '@SunRaeDev'
        },
        {
          placement: 'bottom',
          href: 'https://www.linkedin.com/in/allisonrharrison/',
          icon: 'fab fa-linkedin fa-lg',
          text: '/in/allisonrharrison'
        },
        {
          placement: 'bottom',
          href: 'mailto:admin@sunrae.dev',
          icon: 'fas fa-envelope fa-lg',
          text: 'admin@sunrae.dev'
        }
      ].map((tooltip, i) => {
        return <TooltipItem key={i} item={tooltip} id={i} />
      })}
    </div>
  )
}

export default Socials
