// Obtenha a chave da API do YouTube
const apiKey = "AIzaSyB76T1j60NOQsVNeTF4U8wLCNAYfKg42ms";

// Faça uma chamada à API do YouTube para obter o vídeo
$.ajax({
  url: "https://www.googleapis.com/youtube/v3/videos",
  type: "GET",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
  },
  data: {
    part: "snippet,contentDetails",
    id: "3aZV1CbCqrU",
  },
  success: function(response) {
    // Processe a resposta da API
    const video = response.items[0];

    // Exiba o vídeo
    const iframe = document.createElement("iframe");
    iframe.src = video.contentDetails.embedHtml;
    iframe.width = 560;
    iframe.height = 315;
    $('body').append(iframe);
  },
  error: function(xhr, textStatus, errorThrown) {
    // Retorne o erro no console
    console.log(errorThrown);
  },
});
