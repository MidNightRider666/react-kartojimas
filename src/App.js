import React from "react";
import { Button, Block, Hero } from "./Components";

const App = () => {
  return ( <div>
    <>
      <Hero type="success" children="Success Title" title="Success Subtitle"/>
      <Block type="success">Success Block</Block>
      <Button type="success" onclick="submit">Press me</Button>
      </> 
      <>
      <Hero type="danger" children="Danger Title" title="Danger Subtitle"/>
      <Block type="danger">Danger Block</Block>
      <Button type="danger" onclick="reset">Press me</Button>
      </>
      <>
      <Hero type="primary" children="Primary Title" title="Primary Subtitle"/>
      <Block type="primary">Primary Block</Block>
      <Button type="primary" onclick="button">Press me</Button>
      </>
      </div>
  );
}

export default App;
