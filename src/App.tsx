import ListGroup from './components/ListGroup';
import Message from './Message'

function App(){
  let items = ["New York", "San Francisco", "tokyo", "London", "Paris"];

  return <div>
    <ListGroup items={items} heading='Cities'/>
    
    </div>;
}

export default App