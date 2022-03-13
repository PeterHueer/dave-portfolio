import React from "react";

export default function Hero(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="hero">
      <div className="hero-body">
        <p className="title is-4">{props.title}</p>
      </div>
      <div className="performance-grid">{props.children}</div>
    </section>
  );
}
