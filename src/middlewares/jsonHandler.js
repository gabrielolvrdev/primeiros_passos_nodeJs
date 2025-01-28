export async function jsonHandler(request, response) {
  const buffers = []

  //coleta os chunks de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk)
  }

  try {
    // concatena os chunk e converte para string. em seguida, convite a string para JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null
  }

   // Define o Header de resposta como JSON
  response.setHeader("Content-Type", "aplication/json")

}