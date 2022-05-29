// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '../../services/naruto.json'

export default function handler(req, res) {
  const message = getRandom()
  res.status(200).json(message)
}

const getRandom = () => {
  const { naruto } = data
  const quantidadeRegistro = naruto.length
  const numeroAleatorio = Math.floor(Math.random() * quantidadeRegistro)
  const dadosFiltrados = naruto.filter((item) => {
    return item.id === numeroAleatorio
  })
  return dadosFiltrados
}
