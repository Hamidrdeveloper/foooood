import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'

import { ICategoryCardProps } from '~/@types'

import { setCategory } from '~/store/actions/Product'

import {
  Container,
  Title,
} from '~/components/CategoriesList/components/Card/styles'

const CardComponent: React.FC<ICategoryCardProps> = (
  props: ICategoryCardProps
) => {
  const { title, icon } = props

  const dispatch = useDispatch()

  return (
    <Container onPress={() => dispatch(setCategory(title))}>
      <FontAwesome5 name={icon} size={18} color="#ffffff" />
      <Title>{title}</Title>
    </Container>
  )
}

export default CardComponent
