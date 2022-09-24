import React from 'react'


export default function About(props) {

    // const [myStyle, setMyStyle] = useState ({
    //     color: 'black',
    //     backgroundColor:'white'
        
    // })

    // const [btntext, setBtnText] = useState('Enable Dark Mode')

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     } else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText('Enable Dark Mode')

    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }
  return (
    <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1 className='my-3'>About Us</h1>
       <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                What is accordion in HTML?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                An accordion is used to show (and hide) HTML content. Use the w3-hide class to hide the accordion content.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                What is accordion header?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                The accordion header controls the state of the accordion panel. To mark this relationship, we can make use of the aria-controls attribute, which value is the id of the accordion panel (in this case, accordion-panel-1 ).
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                What is website accordion?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.
                </div>
                </div>
         </div>
        </div>
    </div>
  )
}
