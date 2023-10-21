import React, { useState } from 'react';
import jsPDF from 'jspdf';

function TextToPDF() {
  const [text, setText] = useState('');
  
  const convertToPDF = () => {
    const pdf = new jsPDF();
    pdf.text(10, 10, text);
    pdf.save('converted.pdf');
  };

  return (
    <>
    
   


     <div className="hero"> 
     <div className='main'>

<h1>Text to PDF Conversion</h1>
<textarea
  value={text}
  onChange={(e) => setText(e.target.value)}
  rows="10"
  cols="50"
  placeholder="Enter your text here"
></textarea>
<button onClick={convertToPDF}>Convert to PDF</button>
</div>
  <div className="hero__title">
    

  
  
  </div>

  <div className="cube"></div>
  <div className="cube"></div>
  <div className="cube"></div>
  <div className="cube"></div>
  <div className="cube"></div>
  <div className="cube"></div>
</div>


    
    </>
   
  );
}

export default TextToPDF;
