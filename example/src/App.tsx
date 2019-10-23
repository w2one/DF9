import * as React from "react";
import { hot } from "react-hot-loader";

import { Hello, Button } from "../../src";

function App() {
    return (
        <>
            <Hello name="Jay" />
            <Button onClick={() => console.log("button")}>按钮</Button>
        </>
    );
}

export default hot(module)(App);
