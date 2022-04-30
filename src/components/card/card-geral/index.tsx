import { CardStyles } from "./styles"

interface CardPros {
  children: any
}
export const Card = ({ children }: CardPros) => {
  return(
    <>
    <CardStyles>{children}</CardStyles>
    </>
  )

}