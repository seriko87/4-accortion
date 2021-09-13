import React from "react";
import data from "./data";
import Question from "./Question";

function App() {
  return (
    <main>
      <section className='title'>
        <h1>questions and answers about login</h1>
      </section>
      <section className='questions'>
        {data.map((item) => {
          return <Question question={item} key={item.id} />;
        })}
      </section>
    </main>
  );
}

export default App;
