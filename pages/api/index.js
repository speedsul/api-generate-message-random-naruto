// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '../../services/naruto.json'
const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}
function handler(req, res) {
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

export default allowCors(handler)
