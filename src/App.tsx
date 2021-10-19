import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea'

function App() {
  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ])
  const handleTaskChange = (taskId: number, isChecked: boolean) => {
    const newList = [ ...list ];
    newList.forEach((item) => {
      if (item.id === taskId) {
        item.done = isChecked
      }
    });
    setList(newList)
  }
  const hadleAddTask = (taskName: string) => {
    const newList = [ ...list ];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>
        <AddArea onEnter={ hadleAddTask } />
        { list.map((item, index) => (
          <ListItem key={ index } item={ item } onChange={ handleTaskChange } />
        )) }
      </C.Area>
    </C.Container>
  );
}

export default App;
