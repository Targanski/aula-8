$.support.cors = true;

$(document).ready(
        function(){
            $('#conteudo').load("page/pagina01.html")
        }

)

$('#btPagina1').click(
    function (){
        $('#conteudo').load("page/pagina01.html")
        
    }
)
$('#btPagina2').click(  

    function (){
        alert("clique na pagina 2")
        console.log("clique no botao 2")

    }
)
    
