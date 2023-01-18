import React from 'react'  
     
import './Home.css'
import Header from './Header'  

import Section from './Section'


function Tesla() {
  return (<>
  
 <Header />




<Section 
carName="model 3"
text="Schedule a Demo Drive"
right=" custom Order"
left="view inventry"
backgroundImage="model-3.jpg"
icon = {true}

/>
<Section 
carName="model s"
text="Schedule a Demo Drive"
right="custom Order"
left="view inventry"
backgroundImage="model-s.jpg"

/>
<Section 
carName ="model Y"
text="Schedule a Demo Drive"
right="custom Order"
left="view inventry"
backgroundImage="model-y.jpg"
/>
<Section 
carName= "model X"
text="Schedule a Demo Drive"
right="custom Order"
left="view inventry"
backgroundImage="model-x.jpg"
/>
<Section 
carName ="Soler Roof"
text="Schedule a Demo Drive"
right="custom Order"
left="view inventry"
backgroundImage="Solar-roof.jpg"
/>

<Section 
carName= "Soler panel"
text="Schedule a Demo Drive"
right="custom Order"
left="view inventry"
backgroundImage="Solar-panel.jpg"
/>
<Section 
carName ="Accessories"
right="custom Order"
backgroundImage="accessories.jpg"


/> 

    

    </>
  )
}

export default Tesla