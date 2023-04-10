import * as S from './style'
import { ButtonProps } from './Button.types'


export const Button = ({label, ...props}:ButtonProps) => {
    return <S.Button {...props}>{label}</S.Button>
}
