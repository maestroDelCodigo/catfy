import React from 'react'
import '../../styles/button.scss'
function Categories({name}){
  return (
<section>
  <button class='lined thick'>{name}</button>
</section>
  )
}

export default Categories