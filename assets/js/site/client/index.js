function cadastro() {
  $('#cadastro, #financeiro, #fiscal, #contabilidade').click(function() {
      $('#cardGroup').fadeOut(500);
  })
}

cadastro();

$.ajax({
  url: 'http://localhost/libaryASP/api',
  type: 'GET', 
  dataType: 'json',
  success: function(data) {
    console.log(data.Clientes.Cadastros);
  },
  error: function(xhr, status, error) {
    console.error(error);
  }
  
});