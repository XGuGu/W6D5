import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tab from './frontend/tab';
import Weather from './frontend/weather';

const Tabs = [
  {title: "one", content: "Today is Friday"},
  {title: "two", content: "I like Friday"},
  {title: "three", content: "Liming likes watching movies"}
];

function All() {
  return (
    <div>
      <Clock />
      <Tab data = {Tabs}/>
      <Weather />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<All />, root);
});
