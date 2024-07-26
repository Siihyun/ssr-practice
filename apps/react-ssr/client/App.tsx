import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { GlobalNavigationBar } from "@/components/GlobalNavigationBar";
import { Contents } from "@/components/Contents";

export const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(window.__INITIAL_DATA__);
  }, []);

  return (
    <div id="root">
      <Header />
      <div style={{ display: "flex", height: "" }}>
        <GlobalNavigationBar />
        <Contents contents={data} />
      </div>
    </div>
  );
};

export default App;
