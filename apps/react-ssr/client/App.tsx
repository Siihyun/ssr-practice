import { useEffect } from "react";
import { Header } from "@/components/Header";

function App() {
  useEffect(() => {
    console.log("effect!");
  }, []);

  return (
    <div id="root">
      {/* userInfo 받아오기 */}
      <Header />
      <ul>
        <li
          className="test"
          onClick={() => {
            console.log("clicked");
          }}
        >
          SSR PRACTICE
        </li>
        <li>#1 : ssr only 만들기</li>
        <li>#2 : ssr + csr(hydration)</li>
        <li>#3 : react + ssr</li>
        <li>#4 : react + streaming ssr</li>
      </ul>
    </div>
  );
}

export default App;
