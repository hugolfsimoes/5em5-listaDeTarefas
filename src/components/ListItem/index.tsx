import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'
type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
}

export default function ListItem({ item, onChange }: Props) {

  return (
    <C.Container done={ item.done }>
      <input
        id={ `input-${ item.id }` }
        type="checkbox"
        checked={ item.done }
        onChange={ e => onChange(item.id, e.target.checked) }
      />
      <label htmlFor={ `input-${ item.id }` }>{ item.name } - { item.done.toString() }</label>

    </C.Container>
  )
}
