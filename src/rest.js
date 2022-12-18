import React, { useState, useEffect } from "react";
import axios from "axios";

function Rest() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //   const result = await axios("http://my-api.com/items");
      //   setItems(result.data);
    }

    fetchData();
  }, []);

  async function handleCreate(item) {
    // const result = await axios.post("http://my-api.com/items", item);
    // setItems([...items, result.data]);
  }

  async function handleUpdate(item) {
    // const result = await axios.put(`http://my-api.com/items/${item.id}`, item);
    // setItems(items.map((i) => (i.id === item.id ? result.data : i)));
  }

  async function handleDelete(item) {
    // await axios.delete(`http://my-api.com/items/${item.id}`);
    // setItems(items.filter((i) => i.id !== item.id));
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdate(item)}>Edit</button>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleCreate({
            name: event.target.elements.name.value,
          });
          event.target.reset();
        }}
      >
        <input name="name" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Rest;
