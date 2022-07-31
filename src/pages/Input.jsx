import useInput from "../hook/useInput.js";

const Input = () => {
  
  const name = useInput("");
  const surname = useInput("");
  const alertNameSurname = () => { alert("NAME: " + name.val + "\nSURNAME: " + surname.val)}
  
  return (
    <div>
      <h1 className="centered">Input Hook</h1>
      <div className="row">
        <div className="col"><br/>
            <input type="text"   className="input"  placeholder="Name"    value={name.val}    onChange={name.onChange}    />
            <input type="text"   className="input"  placeholder="Surname" value={surname.val} onChange={surname.onChange} />
            <input type="submit" className="submit" value="SEND" onClick={alertNameSurname} />
            <label style={{display:"block"}}>NAME OUTPUT:</label>
            <label className="outputLbl">{name.val}</label>
        </div>
        <div className="col">
            <div className="colContent">
                <h3 className="centered">Hook content</h3>
                <p>export default function useInput(initValue) &#123;</p>
                <p style={{marginLeft:10}}>const [value, setValue] = useState(initValue);</p>
                <p style={{marginLeft:10}}>const onChange = e =&gt; &#123;</p>
                <p style={{marginLeft:20}}>setValue(e.target.value);</p>
                <p style={{marginLeft:10}}>&#125;</p>
                <p style={{marginLeft:10}}>return &#123; value, onChange &#125; </p>
                <p>&#125;</p>
                <h3 className="centered">Hook using</h3>
                <p>const name = useInput("");</p>
                <p>const surname = useInput("");</p>
                <p>&lt;input value=&#123;name.value&#125; onChange=&#123;name.onChange&#125; /&gt;</p>
                <p>&lt;input value=&#123;surname.value&#125; onChange=&#123;surname.onChange&#125; /&gt;</p>
                <p style={{marginLeft:20}}>or</p>
                <p>&lt;input &#123; ...surname &#125; /&gt;</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Input;
