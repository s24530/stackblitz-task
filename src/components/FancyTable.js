import React from 'react';

export default function FancyTable({ n }) {
  const listItems = [];
  for (let i = 1; i <= n; i++) {
    listItems.push(<li key={i}>{i}</li>);
  }
  return <ul>{listItems}</ul>;
}
