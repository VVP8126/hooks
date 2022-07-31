import { useRef } from "react";
import useHover from "../hook/useHover";

const Hover = () => {
  
  const element = useRef();
  const isHovering = useHover(element);
  
  return (
    <div>
      <h1 className="centered">Hover</h1>
      <div className="row">
        <div className="col">
            <div className="colContent">
                <p>Hover the square:</p>
                <div ref={element} className={isHovering ? "blackSquare" : "greySquare"} ></div>
                <p><label className="outputLbl">Output:</label></p>
                <p className="centered">{ isHovering ? " Mouse is over square": " Mouse leaved" }</p>
            </div>
        </div>
        <div className="col">
            <div className="colContent">
                <h3 className="centered">Hook content</h3>
                <br/>
                <p>export default function useHover(ref) &#123;</p>
                <p style={{marginLeft:10}}>const [isHovering, setIsHovering] = useState(false);</p>
                <p style={{marginLeft:10}}>const on  = () =&gt; &#123;setIsHovering(true)&#125;;</p>
                <p style={{marginLeft:10}}>const off = () =&gt; &#123;setIsHovering(false)&#125;;</p>
                <br/>
                <p style={{marginLeft:10}}>useEffect(() =&gt; &#123;</p>
                <p style={{marginLeft:20}}>if(!ref.current) &#123; return; &#125;</p>
                <p style={{marginLeft:20}}>const node = ref.current;</p>
                <p style={{marginLeft:20}}>node.addEventListener('mouseenter',on);</p>
                <p style={{marginLeft:20}}>node.addEventListener('mousemove',on);</p>
                <p style={{marginLeft:20}}>node.addEventListener('mouseleave',off);</p>
                <p style={{marginLeft:20}}>return function () &#123;</p>
                <p style={{marginLeft:30}}>node.removeEventListener('mouseenter',on);</p>
                <p style={{marginLeft:30}}>node.removeEventListener('mousemove', on);</p>
                <p style={{marginLeft:30}}>node.removeEventListener('mouseleave',off);</p>
                <p style={{marginLeft:20}}>&#125;</p>
                <p style={{marginLeft:20}}>&#125;,[]</p>
                <p style={{marginLeft:10}}>)</p>
                <p style={{marginLeft:10}}>return isHovering;</p>
                <p>&#125;</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Hover;
