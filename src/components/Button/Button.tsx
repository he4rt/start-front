import * as S from './style'
import { ButtonProps } from './Button.types'


export const Button = ({label, onClick}:ButtonProps) => {
    return <S.Button onClick={onClick}>{label}</S.Button>
}
