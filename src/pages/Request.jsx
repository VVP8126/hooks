import axios from "axios";
import useRequest from "../hook/useRequest";

const Request = () => {
  const [data, error, loading] = useRequest(getAll);

  function getAll() {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  };

  return (
    <div>
      <h1 className="centered">Request</h1>
      <div className="row">
        <div className="col">
          { loading
              ? <div className="spinner"></div>
              : error
                ? "Error while downloading ... " + error
                : data.map(item => <p key={item.id}>{item.id}. {item.title}</p>)
          }
        </div>
        <div className="col">
          <h3 className="centered">Hook content</h3><br />
          <p>export default function useRequest(request) &#123;</p>
          <p style={{marginLeft:10}}>const [data, setData] = useState([]);</p>
          <p style={{marginLeft:10}}>const [error, setError] = useState(null);</p>
          <p style={{marginLeft:10}}>const [isLoading, setIsLoading] = useState("");</p>
          <p style={{marginLeft:10}}>useEffect(</p>
          <p style={{marginLeft:20}}>() =&gt; &#123;</p>
          <p style={{marginLeft:30}}>setIsLoading(true);</p>
          <p style={{marginLeft:30}}>request()</p>
          <p style={{marginLeft:40}}>.then(response =&gt; setData(response.data))</p>
          <p style={{marginLeft:40}}>.catch(error =&gt; setError(error))</p>
          <p style={{marginLeft:40}}>.finally(() =&gt; setIsLoading(false))</p>
          <p style={{marginLeft:20}}>&#125;,</p>
          <p style={{marginLeft:20}}>[]</p>
          <p style={{marginLeft:10}}>);</p>
          <p style={{marginLeft:10}}>return [data, error, isLoading];</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  );
}
export default Request;
