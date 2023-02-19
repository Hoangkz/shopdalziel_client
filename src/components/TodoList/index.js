import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import todoListSlice from './todosSlice' ;
import { v4 as uuidv4 } from 'uuid';
import { todosRemainingSelector } from '../../redux/selectors';
export default function TodoList() {

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todosRemainingSelector);

  const handleInputChange = (e)=>{
    setTodoName(e.target.value)
  }
  const handleInputPriorityChange = (e)=>{
    setPriority(e)
  }
  const dispatch = useDispatch();

  const handleAddButtonClick = ()=>{
    dispatch(todoListSlice.actions.addTodo({
      id:uuidv4(),
      name:todoName,
      priority:priority,
      completed:false
    }))
    setTodoName("");
    setPriority("Medium");
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo)=><Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handleInputPriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddButtonClick} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
