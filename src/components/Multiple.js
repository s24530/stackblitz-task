import React from 'react';

export default function Multiple({ name, number }) {
  const listItems = [];
  for (let i = 1; i <= number; i++) {
    listItems.push(<li key={i}>{i}</li>);
  }

  return (
    <>
      <h2>{name}</h2>
      <ul>{listItems}</ul>
    </>
  );
}
