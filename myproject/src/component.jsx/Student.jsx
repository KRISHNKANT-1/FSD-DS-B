import React from 'react';

const Student = (props) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        width: '300px'
      }}
    >
      <h2>Student Record</h2>
      <h2>Mohan ji</h2>

      <p>Age: 20</p>
      <p>Grade: A</p>

      <img
        src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimg.magnific.com%2Ffree-photo%2Fcloseup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.magnific.com%2Ffree-photos-vectors%2Fbeautiful&docid=nxadCfcURl2yVM&tbnid=SeMV_qAWkGBtaM&vet=12ahUKEwib4qeDrYaXAxV0m-EIHdHlNKAQnPAOegUIyAEQAA..i&w=740&h=491&hcb=2&ved=2ahUKEwib4qeDrYaXAxV0m-EIHdHlNKAQnPAOegUIyAEQAA"
        alt="Student"
        height={100}
      />
      <h2>Student Record</h2>
      <h2>Mohan ji</h2>

      <p>Age: 20</p>
      <p>Grade: A</p>

      <img
        src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimg.magnific.com%2Ffree-photo%2Fcloseup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.magnific.com%2Ffree-photos-vectors%2Fbeautiful&docid=nxadCfcURl2yVM&tbnid=SeMV_qAWkGBtaM&vet=12ahUKEwib4qeDrYaXAxV0m-EIHdHlNKAQnPAOegUIyAEQAA..i&w=740&h=491&hcb=2&ved=2ahUKEwib4qeDrYaXAxV0m-EIHdHlNKAQnPAOegUIyAEQAA"
        alt="Student"
        height={100}
        width={100}
      />

      <h2>Roll No: 104</h2>
      <h2>Class: B.Tech</h2>
    </div>
  );
};

export default Student;