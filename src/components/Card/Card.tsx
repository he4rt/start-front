import * as C from './style'
import { CardProps } from './Card.types'

export const Card = ({label}:CardProps) => {
     
    return (
        <C.Card href='#'>
            {/* Componente icon */}

            <C.Label>
                {label}
            
            </C.Label>

           {/* Componente icon */}
        </C.Card>
    )
    
}