import ReacrtDOM from "react-dom";
import {App} from "./App";



ReacrtDOM.render(<App />, document.getElementById("root"));
/*第一引数にrender対象,第二引数にrender箇所 */
/*第一引数が<App />となっているが、Reactでは関数名をHTMLのようにタグで囲むことによってコンポーネントとして扱える*/
