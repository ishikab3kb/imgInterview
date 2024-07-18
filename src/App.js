// import logo from './logo.svg';
import './App.css';
import ComContainer from './Comment';
import { data } from './data';

const RecursiveComponent = ({ text,date, comments }) => {
  const hassubComments = comments && comments.length

  return (
    <div className='leftpadding'>
      <ComContainer title={text} date={date}></ComContainer>
      {hassubComments && comments.map((item) => (
        <RecursiveComponent key={item.text} {...item} />
      ))}
    </div>
  )
}


function App() {

  return (
    <div className="App">
      {data.map((item,index) => <RecursiveComponent key={index} {...item} />)}
    </div>
  );
}

export default App;
