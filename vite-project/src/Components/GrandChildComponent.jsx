import React from 'react';

function GrandChildComponent(props) {
  return (
    <div>
      <p>Data from Grandchild: {props.data}</p>
    </div>
  );
}

export default GrandChildComponent;