import React, { useState, useEffect } from "react";
// import home from "./home.txt";
// import getText from "./getText";
export default function Home() {
  const [text, setText] = useState("");
  
  useEffect(() => {
    // const prewrittenText = "hello";
    let currentIndex = 1;
  const prewrittenText =
`Hello! How fun that you found your way into my website.
My name is Anton, I am a Computer Science student and
I am attending my last semester  at Gothenburg University.

As of right now, I am finishing my bachelor thesis.
We are developing a natural deduction editor for
predicate- and propositional logic. I have thoroughly
enjoyed working on this project and have gained
valuable skills and knowledge from it.

I would describe myself as a
logical and curios person that loves to find
new and innovative solutions to problems.

Some of my many hobbies are brewing beer,
cook food and build computers.

I hope you can find this site interesting,
and if anything, you can find my contact info on
my linkedin profile.


Best, Anton`
    setText("H" + prewrittenText[1]);

    const typingInterval = setInterval(() => {
      if (currentIndex >= prewrittenText.length) {
        clearInterval(typingInterval);
      } else if (currentIndex < prewrittenText.length - 1) {
        setText((prevText) => prevText + prewrittenText[currentIndex]);
        currentIndex++;
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return <div style={{whiteSpace : "pre-wrap", paddingLeft : "20px"}}>{text}</div>;
}
