import React from "react";
// import '../../assets/css/loading.css';
//npm install -S react-text-transition
import TextTransition, { presets } from "react-text-transition"
// reactstrap components
import { Button, Container } from "reactstrap";
// import helpGif2 from 'assets/img/helpGif2.gif';
// import helpGif3 from 'assets/img/helpGif3.gif';
import helpGif2  from"assets/img/support2.jpg";
import helpGif3  from"assets/img/support.avif";

// core components
const TEXTS = [
  // "Need Help?",
  "User Guide",
  "Classifying Software Bugs"
];


function HelpPageHeader() {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>


      <div  >
        <div
          
          style={{
            // backgroundImage: helpGif2,
            // backgroundImage: headreImage,
            //<img className='image' src={gify} alt="loading..." />
          }}
        >
          <img src={helpGif3} style={{ height: "500px", float: "left" }}></img>
          <img src={helpGif2} style={{ height: "500px", float: "right" }}></img>
        </div>

        <Container>

          <p className="title" style={{ color: "#023127", fontSize: "3rem", letterSpacing: "0.1rem", paddingTop: "10%", paddingBottom: "7%" }}>
            {/* <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            /> */}
            <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </p>
        </Container>

      </div>
    </>
  );
}

export default HelpPageHeader;
