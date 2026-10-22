
import React from 'react'
import './App.css';

// COPIED FROM problems2.html

function block(number, color) {
  this.number = number;
  this.color = color;
}

const blockArr = [
  new block(2, "#32a852"), new block(9, "#327ba8"), new block(0, "#ffbb54"),
  new block(5, "#b076db"), new block(1, "#83ebbe"), new block(8, "#290f59"),
  new block(3, "#a30a17"), new block(6, "#3b26de"), new block(4, "#fa89c2")
];

// component representing one block
function OneBlock(props) {
  // handles click
  const click = () => {
    alert("Value: " + props.children);
  }
  return (
    <div class="block" style={{ backgroundColor: props.color }} onClick={click}>
      {props.children}
    </div>
  );
}

// component of grid of blocks
// takes in the array blockArr
function Grid(props) {

  return (
    <div id="grid">
      {props.blockArr.map((item, i) => (
        <OneBlock key={i} color={item.color}>{item.number}</OneBlock>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Grid blockArr = {blockArr} />
    </div>
  );
}

export default App;
