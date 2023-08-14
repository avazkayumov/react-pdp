const App = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick = {() => setCount(count += 1)}>+</button>
    </div>
  );
};

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<App />);