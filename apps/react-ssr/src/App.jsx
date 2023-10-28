import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <div>count : {count}</div>
      <ul>
        <li className="test">SSR PRACTICE</li>
        <li>#1 : ssr only 만들기</li>
        <li>#2 : ssr + csr(hydration)</li>
        <li>#3 : react + ssr</li>
        <li>#4 : react + streaming ssr</li>
      </ul>
    </div>
  );
}

export default App;
