import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
}
function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  //useEffect(Oque fazer, quando fazer)
  useEffect(()=>{
    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
    fetch("https://one022b-marketplace-vxxx.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])

  return (
    <>
      <div className='container-produtos'>
      {produtos.map(prod=>{
        return(
          <div key={prod.id}  className='produto-item'>
            <h1>{prod.nome}</h1>
            <img src={prod.imagem} alt="Imagem do celular"/>
            <p>{prod.preco}</p>
            <p>{prod.descricao}</p>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default App
