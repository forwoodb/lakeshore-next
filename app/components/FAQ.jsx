"use client";
import { useState } from "react";
import Button from "./Button";

const faq = [
  {
    id: 1,
    question: "Who?",
    answer: "One person or many people.",
    isActive: false,
  },
  {
    id: 2,
    question: "What?",
    answer: "One thing or many things.",
    isActive: false,
  },
  {
    id: 3,
    question: "When?",
    answer: "One time or many times.",
    isActive: false,
  },
  {
    id: 4,
    question: "Where?",
    answer: "One place or many places",
    isActive: false,
  },
  {
    id: 5,
    question: "How?",
    answer: "One way or many ways.",
    isActive: false,
  },
];

const FAQ = () => {
  const [list, setList] = useState(faq);

  const handleClick = (id) => {
    const faqList = list.map((q) => {
      if (q.id === id) {
        q.isActive = !q.isActive;
      }
      return q;
    });
    setList(faqList);
  };

  return (
    <section id="faq" className="py-8">
      <div className="w-[95%] m-auto">
        <h2 className="text-2xl">FAQ</h2>
        <div className="faq-items flex justify-between">
          <ul className="w-[48%]">
            {list
              .map((q) => {
                return (
                  <li key={q.id} className="my-1 border border-black">
                    <button
                      onClick={() => handleClick(q.id)}
                      className="w-full pl-4 text-left cursor-pointer"
                    >
                      {q.question}
                    </button>
                    <p
                      onClick={() => handleClick(q.id)}
                      className={`${q.isActive ? "block" : "hidden"} pl-4`}
                    >
                      {q.answer}
                    </p>
                  </li>
                );
              })
              .slice(0, 3)}
          </ul>
          <ul className="w-[48%]">
            {list
              .map((q) => {
                return (
                  <li key={q.id} className="my-1 border border-black">
                    <button
                      onClick={() => handleClick(q.id)}
                      className="w-full pl-4 text-left cursor-pointer"
                    >
                      {q.question}
                    </button>
                    <p
                      onClick={() => handleClick(q.id)}
                      className={`${q.isActive ? "block" : "hidden"} pl-4`}
                    >
                      {q.answer}
                    </p>
                  </li>
                );
              })
              .slice(3)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
