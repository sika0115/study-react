import React from "react"; //Reactのお作法的なもの、React17でJSXを使用するだけの場合import必須でなくなった
import ReactDom from "react-dom"; //react-domのインポート・・・これ後でReactDomがなんなのか調べる
import App from "./App.jsx"; //他のファイルで画面のレンダリング部分を作成、コンポーネント化してindex.jsで利用

//Appを画面に反映する ReactDomライブラリの中のrender関数を使う
//1個目の引数：Appをコンポーネントとしてレンダリングするという意味でタグのように書く
//2個目の引数：htmlのどこに反映していくかを書く→jsでindex.htmlのid rootを指定
ReactDom.render(<App />, document.getElementById("root"));
