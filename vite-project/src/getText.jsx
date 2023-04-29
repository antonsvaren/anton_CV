import { useEffect, useState } from "react";

export default function getText(textFile) {
    const [text, setText] = useState("");
    useEffect(() => {
      fetch(textFile)
        .then((response) => response.text())
        .then((data) => setText(data));
    }, []); 
    return text;
  }