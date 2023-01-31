import Profilecomponent from './Profile/Profilecomponent';
import ProfileComponents from './Profile/Profilecomponent';

function App() {
  return (
    
    <div  style={styleObject} className="App">
    <h2>hello</h2>
    <Profilecomponent
    FullName="Haoua Khleifi"
    Bio="titulaire d'une mastère en science et technologie de l'information .."
    handelName={handelName} />
    </div>
  );
}
const handelName=(name)=>alert(`Hi I'am ${name}`);
const styleObject={color:"blue",textAlign: "center",wordSpacing: '3px'}

export default App;