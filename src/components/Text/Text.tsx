import { TextProps } from './Text.types'
import * as S from './style'

export const Text = ({ content }: TextProps) => {
    return <S.Text>{content}</S.Text>
}
