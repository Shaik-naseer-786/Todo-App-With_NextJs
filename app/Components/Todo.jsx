import React from "react";
import axios from "axios";

const Todo = ({ id, title, description, mongoId, completed }) => {


  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {id + 1}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{completed ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex gap-1">
        <button
          
          className="py-2 px-4 bg-red-500 text-white"
        >
          Delete
        </button>
        <button className="py-2 px-4 bg-green-500 text-white">Done</button>
      </td>
    </tr>
  );
};

export default Todo;
