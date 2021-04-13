import React from "react";
import { Card, Menu, Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { useStore } from "../store/store";

function TodoItem(props) {
  // const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);

  return (
    <div className="todoItem">
      <li>
        <Card title={<h3>{props.title}</h3>} style={{ width: 300 }}>
          <p>details: {props.details}</p>
          <p>createdAt: {props.createdAt}</p>
          <p>dueDate: {props.dueDate}</p>
          <p>completed: {props.completed === true ? "completed" : "Not"}</p>
          <Button type="primary" shape="circle">
            Toggle Complete
          </Button>
          <Button type="primary" shape="circle">
            Delete
          </Button>
        </Card>
      </li>
    </div>
  );
}

export default TodoItem;
