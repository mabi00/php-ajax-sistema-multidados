function changeColorBlue() {
  document.getElementById("tableColor").className = "portlet box blue";
  $.ajax({
    url: "show-cliente.php",
    type: "POST",
    dataType: "json",
    data: { param: "" },
    success: function (response) {
      var table =
        '<div class="portlet-title"><div class="caption"><i class="fa fa-folder-open"></i>Tabela Clientes</div><div class="tools"><a href="javascript:;" class="collapse"></a><a href="#portlet-config" data-toggle="modal" class="config"></a><a href="javascript:;" class="reload"></a><a href="javascript:;" class="remove"></a></div></div><div class="portlet-body"><div class="table-responsive"><table class="table table-hover">';

      table +=
        "<thead><tr><th>Nome</th><th>CPF</th><th>Endereço</th><th>Telefone</th><th>Email</th></tr></thead>";

      table += "<tbody>";

      for (var i = 0; i < response.length; i++) {
        var cliente = response[i];
        table += "<tr>";
        table += "<td>" + cliente["nome"] + "</td>";
        table += "<td>" + cliente["cpf"] + "</td>";
        table += "<td>" + cliente["endereco"] + "</td>";
        table += "<td>" + cliente["telefone"] + "</td>";
        table += "<td>" + cliente["email"] + "</td>";
        table += "</tr>";
      }
      table += "</tbody>";

      table += "</div></div></div>";

      $("#tableColor").html(table);
      console.log(response);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });
}

function changeColorGreen() {
  document.getElementById("tableColor").className = "portlet box green";
  $.ajax({
    url: "show-usuario.php",
    type: "POST",
    dataType: "json",
    data: { param: "" },
    success: function (response) {
      var table =
        '<div class="portlet-title"><div class="caption"><i class="fa fa-folder-open"></i>Tabela Usuários</div><div class="tools"><a href="javascript:;" class="collapse"></a><a href="#portlet-config" data-toggle="modal" class="config"></a><a href="javascript:;" class="reload"></a><a href="javascript:;" class="remove"></a></div></div><div class="portlet-body"><div class="table-responsive"><table class="table table-hover">';

      table +=
        "<thead><tr><th>Nome</th><th>CPF</th><th>Endereço</th><th>Telefone</th><th>Usuario</th></tr></thead>";

      table += "<tbody>";

      for (var i = 0; i < response.length; i++) {
        var cliente = response[i];
        table += "<tr>";
        table += "<td>" + cliente["nome"] + "</td>";
        table += "<td>" + cliente["cpf"] + "</td>";
        table += "<td>" + cliente["endereco"] + "</td>";
        table += "<td>" + cliente["telefone"] + "</td>";
        table += "<td>" + cliente["usuario"] + "</td>";
        table += "</tr>";
      }
      table += "</tbody>";

      table += "</div></div></div>";

      $("#tableColor").html(table);
      console.log(response);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });
}

function changeColorPurple() {
  document.getElementById("tableColor").className = "portlet box purple";
  $.ajax({
    url: "show-fornecedor.php",
    type: "POST",
    dataType: "json",
    data: { param: "" },
    success: function (response) {
      var table =
        '<div class="portlet-title"><div class="caption"><i class="fa fa-folder-open"></i>Tabela Fornecedores</div><div class="tools"><a href="javascript:;" class="collapse"></a><a href="#portlet-config" data-toggle="modal" class="config"></a><a href="javascript:;" class="reload"></a><a href="javascript:;" class="remove"></a></div></div><div class="portlet-body"><div class="table-responsive"><table class="table table-hover">';

      table +=
        "<thead><tr><th>Nome</th><th>CPF</th><th>Cidade</th><th>E-mail</th></tr></thead>";

      table += "<tbody>";

      for (var i = 0; i < response.length; i++) {
        var cliente = response[i];
        table += "<tr>";
        table += "<td>" + cliente["nome"] + "</td>";
        table += "<td>" + cliente["cpf"] + "</td>";
        table += "<td>" + cliente["cidade"] + "</td>";
        table += "<td>" + cliente["email"] + "</td>";
        table += "</tr>";
      }
      table += "</tbody>";

      table += "</div></div></div>";

      $("#tableColor").html(table);
      console.log(response);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });
}
