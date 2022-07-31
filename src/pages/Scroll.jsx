import { useRef, useState } from "react";
import useScroll from "../hook/useScroll";

const Scroll = () => {
  const [todos, setTodos] = useState([]);
  const [page,  setPage]  = useState(1);
  const limit = 20;
  const parent = useRef();
  const child  = useRef();

  const intersected = useScroll(parent, child, () => fetchTodos(page, limit));

  function fetchTodos(page, limit) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
        .then(response => response.json())
        .then(json => { 
            setTodos(prev => [...prev, ...json]);
            setPage(prev => prev + 1);
        });
  };

  return (
    <div>
      <h1 className="centered">Scroll</h1>
      <div className="row">
        <div className="col" ref={parent}>
          <div className="scrolledArea">
            { todos.map(todo => <p key={todo.id}>ID:{todo.id}. {todo.title}</p>) }
            <p ref={child} className="lastElement">Loaded: {todos.length} rows</p>
          </div>
        </div>
        <div className="col">
            <h3 className="centered">Hook content</h3>
            <p>export default function useScroll(parent, child, callback) &#123;</p>
            <p style={{marginLeft:10}}>const observer = useRef();</p>
            <p style={{marginLeft:10}}>useEffect(</p>
            <p style={{marginLeft:20}}>() =&gt; &#123;</p>
            <p style={{marginLeft:30}}>const options =</p>
            <p style={{marginLeft:40}}>&#123;root:parent.current, rootMargin:'0px', threshold:0&#125;;</p>
            <p style={{marginLeft:30}}>observer.current = new IntersectionObserver(</p>
            <p style={{marginLeft:40}}>([target]) =&gt; &#123;</p>
            <p style={{marginLeft:50}}>if(target.isIntersecting) &#123;callback();&#125;</p>
            <p style={{marginLeft:40}}>&#125;,</p>
            <p style={{marginLeft:40}}>options</p>
            <p style={{marginLeft:30}}>);</p>
            <p style={{marginLeft:30}}>observer.current.observe(child.current);</p>
            <p style={{marginLeft:30}}>return function() &#123;</p>
            <p style={{marginLeft:40}}>if(child.current) observer.current.unobserve(child.current)</p>
            <p style={{marginLeft:30}}>&#125;</p>
            <p style={{marginLeft:20}}>&#125;,</p>
            <p style={{marginLeft:20}}>[callback]</p>
            <p style={{marginLeft:10}}>);</p>
            <p>&#125;</p>
        </div>
      </div>
    </div>
  );
}
export default Scroll;
