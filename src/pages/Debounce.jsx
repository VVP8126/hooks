import { useState } from "react";
import useDebounce from "../hook/useDebounce";

const Debounce = () => {
  const [val,setVal] = useState("");
  const [todos,setTodos] = useState([]);

  const debouncedSearch = useDebounce(search, 1000); // 1sec - delay

  function search(query) {
    // fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query) - common case
    fetch(`https://jsonplaceholder.typicode.com/todos?id=` + query) // - search by id
      .then(response => response.json())
      .then(json => { console.log(json); setTodos(json) });
  }
  const onChange = e => {
    let query = e.target.value;
    setVal(query);
    debouncedSearch(query);
  }
  return (
    <div>
      <h1 className="centered">Debounce Hook</h1>
      <div className="row">
        <div className="col">
          <h3 className="centered">The request will be sent in 1 second after last symbol typinng</h3>
          <input className="searchInput" type="text" value={val} onChange={onChange} placeholder="Search todo ..." />
          <div className="colContent">
            {todos ? todos.map(todo => <p key={todo.id}>{todo.title}</p>) : "" }
          </div>
        </div>
        <div className="col">
          <h3 className="centered">Hook content</h3>
          <br />
          <p>export default function useDebounce(callback, delay) &#123;</p>
          <p style={{marginLeft:10}}>const timer = useRef();</p>
          <p style={{marginLeft:10}}>const debouncedCallback = useCallback(</p>
          <p style={{marginLeft:20}}>() =&gt; &#123;</p>
          <p style={{marginLeft:30}}>if(timer.current) &#123;</p>
          <p style={{marginLeft:40}}>clearTimeout(timer.current);</p>
          <p style={{marginLeft:30}}>&#125;</p>
          <p style={{marginLeft:30}}>timer.current = setTimeout(</p>
          <p style={{marginLeft:40}}>() =&gt; callback(),</p>
          <p style={{marginLeft:40}}>delay</p>
          <p style={{marginLeft:30}}>);</p>
          <p style={{marginLeft:20}}>&#125;,</p>
          <p style={{marginLeft:20}}>[callback, delay]</p>
          <p style={{marginLeft:10}}>);</p>
          <p style={{marginLeft:10}}>return debouncedCallback;</p>
          <p>&#125;</p>
        </div>
      </div>

    </div>
  );
}
export default Debounce;
