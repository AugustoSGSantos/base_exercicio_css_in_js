import { FormEvent, SetStateAction, useState } from 'react'
import { Botao, Campo, Formulario } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario>
      <Campo />
      <Botao>Pesquisar</Botao>
    </Formulario>
  )
}
export default FormVagas
