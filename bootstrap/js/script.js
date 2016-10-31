$(document).ready(function () {


    function enviarEmail() {
        var $requisicao = $.ajax({
            method: "POST",
            url: 'http://contato-twsatc.rhcloud.com/contato-api/email',
            crossDomain: true,
            data: {
                nome: $("#nome").val(),
                email: $("#email").val(),
                telefone: $("#telefone").val(),
                mensagem: $("#mensagem").val(),
                para: $("#para").val()
            }
        });
        $requisicao.then(function (resposta) {
            $("#carregando").hide();
            if (resposta === true) {
                $("#contato").trigger("reset");
                $("#mensagem-sucesso").addClass("show");
            } else {
                $("#mensagem-erro").addClass("show");
            }
        });
    }


    $("#contato").on("submit", function (event) {
        event.preventDefault();
        enviarEmail();
    });

    $(document).ajaxStart(function () {
        $("#carregando").show();
    });
});