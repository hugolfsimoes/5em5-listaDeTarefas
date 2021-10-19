import React, { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
  onEnter: (taskName: string) => void
}

export default function AddArea({ onEnter }: Props) {
  const [ inputText, setInputText ] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText) {
      onEnter(inputText);
      setInputText('');
    }

  }
  return (
    <div>
      <C.Container>
        <div className="image">➕</div>
        <input type="text"
          placeholder="Adicione uma tarefa"
          value={ inputText }
          onChange={ e => setInputText(e.target.value) }
          onKeyUp={ handleKeyUp } />
      </C.Container>
    </div>
  )
}
