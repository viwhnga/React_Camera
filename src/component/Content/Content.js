import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export default function Content() {
  return (
    <div>
           <div id="content">
              {/* this is the content for menu */}
              <LeftContent />
              {/* this is a content for item  */}
              <RightContent />
              <div style={{clear: 'both'}} />
            </div>
    </div>
  )
}
