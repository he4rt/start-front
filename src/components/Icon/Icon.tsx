
import { IconProps } from './Icon.types'
import * as S from './style'

export const Icon = ({src,...props}:IconProps) => {
    
    return <S.Icon src={`${src}.svg`}{...props} />
}