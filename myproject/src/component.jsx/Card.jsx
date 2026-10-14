import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h3>Student Record</h3>
      <h3>{props.name}</h3>
      <h3>Class:{props.classname}</h3>
      <h3>Roll:{props.roll}</h3>
      <img
        src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimg.magnific.com%2Ffree-photo%2Fcloseup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.magnific.com%2Ffree-photos-vectors%2Fbeautiful&docid=nxadCfcURl2yVM&tbnid=SeMV_qAWkGBtaM&vet=12ahUKEwib4qeDrYaXAxV0m-EIHdHlNKAQnPAOegUIyAEQAA..i&w=740&h=491&hcb=2&ved=2ahUKEwib4qeDrYaXAxV0m-EIHdHlNKAQnPAOegUIyAEQAA"
      />
    </div>
  )
}

export default Card
