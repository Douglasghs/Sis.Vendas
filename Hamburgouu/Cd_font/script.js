// -----------------------------------------------------------------------------------   Definindo data e hora 

/*function Data_hora() {
    window.document.getElementById('tempo_hora').innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" +
        new Date().getSeconds();

    window.document.getElementById('tempo_data').innerHTML = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" +
        new Date().getFullYear();
}
setInterval(Data_hora, 1000); */

// ------------------------------------------------------------------------------ enlace da fila de pedido
function salvar() {
    for (let i = 0; i < 40; i++) {
        if (painel[i] == 0) {
            if (window.document.getElementById('nome').value != "" && window.document.getElementById('numero').value != "") {
                let criar = window.document.getElementById(campo_geral[i]);                                  // campo geral -- 01

                criar.style.display = 'block';
                criar.style.float = "left";
                criar.style.width = "99.5%";
                criar.style.height = "18%";
                criar.style.borderRadius = "10px";
                criar.style.marginTop = "0.3%";
                criar.style.background = "orange";
                criar.style.boxShadow = "1px 1px 1px 1px black";

                let Nome = window.document.getElementById(nome_div[i]);   // div escrito nome

                Nome.style.float = "left";
                Nome.style.width = "10%";
                Nome.style.height = "20%";
                Nome.innerHTML = "Cliente: ";
                Nome.style.fontSize = "12pt";
                Nome.style.fontFamily = "Arial";
                Nome.style.fontStyle = "Normal";
                Nome.style.fontWeight = "Bold";
                Nome.style.marginLeft = "0.5%";
                Nome.style.marginTop = "0.5%";
                Nome.style.color = "red";

                let cliente = window.document.getElementById('nome').value;    // div com o nome do cliente
                let passar_tela = window.document.getElementById(nome_cliente[i]);
                passar_tela.innerHTML = cliente;

                passar_tela.style.float = "left";
                passar_tela.style.width = "50%";
                passar_tela.style.height = "20%";
                passar_tela.style.marginTop = "0.5%";
                passar_tela.style.fontSize = "12pt";
                passar_tela.style.fontFamily = "Arial";
                passar_tela.style.fontStyle = "Normal";
                passar_tela.style.fontWeight = "Bold";
                passar_tela.style.marginLeft = "0.4%";

                let campo_hora01 = window.document.getElementById(nome_hora[i]); // nome hora

                campo_hora01.style.float = "left";
                campo_hora01.style.width = "10%";
                campo_hora01.style.height = "20%";
                campo_hora01.style.fontWeight = "Bold";
                campo_hora01.style.marginLeft = "2%";
                campo_hora01.style.marginTop = "0.5%";
                campo_hora01.innerHTML = "Hora:";
                campo_hora01.style.fontSize = "12pt";
                campo_hora01.style.fontFamily = "Arial";
                campo_hora01.style.fontStyle = "Normal";
                campo_hora01.style.color = "red"

                let hora = window.document.getElementById(horaa[i]);                // campo da hora
                hora.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();

                hora.style.float = "left";
                hora.style.width = "20%";
                hora.style.height = "20%";
                hora.style.marginLeft = "0.5%";
                hora.style.marginTop = "0.5%";
                hora.style.fontSize = "12pt";
                hora.style.fontFamily = "Arial";
                hora.style.fontStyle = "Normal";
                hora.style.fontWeight = "Bold";

                let pedido_fixo = window.document.getElementById(pedido[i]);        // nome pedido 

                pedido_fixo.style.float = "left";;
                pedido_fixo.style.width = "10%";
                pedido_fixo.style.height = "20%";
                pedido_fixo.innerHTML = "Pedido: ";
                pedido_fixo.style.fontSize = "12pt";
                pedido_fixo.style.fontFamily = "Arial";
                pedido_fixo.style.fontStyle = "Normal";
                pedido_fixo.style.fontWeight = "Bold";
                pedido_fixo.style.marginLeft = "0.5%";
                pedido_fixo.style.marginTop = "0.5%";
                pedido_fixo.style.color = "red";

                let pedido_nome = window.document.getElementById(pedido_selec[i]);         // pedido selecionado
                let lache = window.document.getElementById('campo_lache');
                pedido_nome.innerHTML = lache.options[lache.selectedIndex].value;

                verificador[i] = lache.options[lache.selectedIndex].value;

                pedido_nome.style.width = "40%";
                pedido_nome.style.height = "20%";
                pedido_nome.style.float = "left";
                pedido_nome.style.color = "blue";
                pedido_nome.style.fontSize = "12pt";
                pedido_nome.style.fontFamily = "Arial";
                pedido_nome.style.fontStyle = "Normal";
                pedido_nome.style.fontWeight = "Bold";
                pedido_nome.style.marginTop = "0.5%";
                pedido_nome.style.marginLeft = "0.5%";

                let quantidade = window.document.getElementById(nome_quantidade[i])  // nome quantidade

                quantidade.style.float = "left";
                quantidade.style.width = "15%";
                quantidade.style.height = "20%";
                quantidade.innerHTML = "Quantidade: ";
                quantidade.style.fontSize = "12pt";
                quantidade.style.fontFamily = "Arial";
                quantidade.style.fontStyle = "Normal";
                quantidade.style.fontWeight = "Bold";
                quantidade.style.marginTop = "0.5%";
                quantidade.style.marginLeft = "2%";
                quantidade.style.color = "red";

                let quant = window.document.getElementById(quant_hambur[i]);      // quantidade de hamburduer
                let quant_pedido = window.document.getElementById('numero').value;
                quant.innerHTML = quant_pedido + " Unidades";

                soma_quant[i] = window.document.getElementById('numero').value;

                quant.style.width = "20%";
                quant.style.height = "20%";
                quant.style.float = "left";
                quant.style.color = "black";
                quant.style.fontSize = "12pt";
                quant.style.fontFamily = "Arial";
                quant.style.fontStyle = "Normal";
                quant.style.fontWeight = "Bold";
                quant.style.marginTop = "0.5%";
                quant.style.marginLeft = "0.5%";


                let endereco = window.document.getElementById(nome_endereco[i]);    // nome endereço

                endereco.style.width = "13%";
                endereco.style.height = "20%";
                endereco.innerHTML = "Endereço: ";
                endereco.style.color = "red";
                endereco.style.fontSize = "12pt";
                endereco.style.fontFamily = "Arial";
                endereco.style.fontStyle = "Normal";
                endereco.style.fontWeight = "Bold";
                endereco.style.marginLeft = "0.5%";
                endereco.style.marginTop = "0.5%";
                endereco.style.float = "left";

                let endereco_digitado = window.document.getElementById(endereco_cliente[i]);    // endereço do cliente
                let pegar_endereco = window.document.getElementById('endereco').value;
                endereco_digitado.innerHTML = pegar_endereco;

                endereco_digitado.style.float = "left";
                endereco_digitado.style.width = "50%";
                endereco_digitado.style.height = "20%";
                endereco_digitado.style.color = "black";
                endereco_digitado.style.fontSize = "12pt";
                endereco_digitado.style.fontFamily = "Arial";
                endereco_digitado.style.fontStyle = "Normal";
                endereco_digitado.style.fontWeight = "Bold";
                endereco_digitado.style.marginTop = "0.5%";
                endereco_digitado.style.marginLeft = "0.5%";

                let n_c_endereco = window.document.getElementById(nome_compl_endereco[i]);

                n_c_endereco.style.width = "20%";
                n_c_endereco.style.height = "20%";
                n_c_endereco.style.float = "left";
                n_c_endereco.innerHTML = "Comp.Endereço:";
                n_c_endereco.style.color = "red";
                n_c_endereco.style.marginLeft = "1%";
                n_c_endereco.style.marginTop = "0.5%";
                n_c_endereco.style.fontSize = "11pt";
                n_c_endereco.style.fontFamily = "Arial";
                n_c_endereco.style.fontStyle = "Normal";
                n_c_endereco.style.fontWeight = "Bold";

                let c_c_endereco = window.document.getElementById(c_compl_endereco[i]);
                let pegar_comp_endereco = window.document.getElementById('compl_endereco').value;
                c_c_endereco.innerHTML = pegar_comp_endereco;

                c_c_endereco.style.float = "left";
                c_c_endereco.style.width = "12%";
                c_c_endereco.style.height = "20%";
                c_c_endereco.style.marginTop = "0.5%";
                c_c_endereco.style.marginLeft = "0.5%";
                c_c_endereco.style.fontSize = "11pt";
                c_c_endereco.style.fontFamily = "Arial";
                c_c_endereco.style.fontStyle = "Normal";
                c_c_endereco.style.fontWeight = "Bold";

                let campo_complemento = window.document.getElementById(nome_complemento[i]);   // nome complemento

                campo_complemento.style.width = "17%";
                campo_complemento.style.height = "20%";
                campo_complemento.innerHTML = "Complemento: ";
                campo_complemento.style.color = "red";
                campo_complemento.style.fontSize = "12pt";
                campo_complemento.style.fontFamily = "Arial";
                campo_complemento.style.fontStyle = "Normal";
                campo_complemento.style.fontWeight = "Bold";
                campo_complemento.style.marginLeft = "0.5%";
                campo_complemento.style.marginTop = "0.5%";
                campo_complemento.style.float = "left";

                let complemento = window.document.getElementById(complemento_certo[i]);    // complemento
                complemento.innerHTML = tomate + cebola + alface + milho + calabresa + completo;

                complemento.style.float = "left";
                complemento.style.width = "60%";
                complemento.style.height = "20%";
                complemento.style.color = "black";
                complemento.style.fontSize = "12pt";
                complemento.style.fontFamily = "Arial";
                complemento.style.fontStyle = "Normal";
                complemento.style.fontWeight = "Bold";
                complemento.style.marginTop = "0.5%";
                complemento.style.marginLeft = "0.5%";



                let botao = window.document.getElementById(click[i]);

                botao.style.width = "15%";
                botao.style.height = "20%";
                botao.style.float = "left";
                botao.innerHTML = "Retirar";
                botao.style.color = "black";
                botao.style.fontSize = "10pt";
                botao.style.fontFamily = "Arial";
                botao.style.fontStyle = "Normal";
                botao.style.fontWeight = "Bold";
                botao.style.marginLeft = "4%";
                botao.style.marginTop = "0.5%";
                botao.style.backgroundColor = "gray";
                botao.style.borderRadius = "5%";
                botao.style.boxShadow = "1px 1px 1px 1px black";

                /*
                let grupo = ['es01','es02','es03','es04','es05','es06'];   // limpar campos após salvamento do pedido

    for( let i=0; i<6;i++){
        revesamentoComplemento[i] = 0;
        window.document.getElementById(grupo[i]).style.backgroundColor = "transparent"
    }

    tomate = ""; cebola = ""; alface = ""; milho = ""; calabresa = ""; completo = "";  // fim da primeira instancia

    let grupo_formulario = ['nome', 'endereco', 'compl_endereco', 'numero'];

    for( let i=0; i<4; i++){
        window.document.getElementById(grupo_formulario[i]).value = "";
    }
    */

                painel[i] = 1;
                troca[i] = 0;

                break;
            }
            else if (window.document.getElementById('nome').value == "" || window.document.getElementById('numero').value == "") {
                alert("Preencha os campos para salvar")

                break;
            }
        }
    }
}

var painel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let campo_geral = ['grere01', 'grere02', 'grere03', 'grere04', 'grere05', 'grere06', 'grere07', 'grere08', 'grere09',
    'grere10', 'grere11', 'grere12', 'grere13', 'grere14', 'grere15', 'grere16', 'grere17', 'grere18',
    'grere19', 'grere20', 'grere21', 'grere22', 'grere23', 'grere24', 'grere25', 'grere26', 'grere27',
    'grere28', 'grere29', 'grere30', 'grere31', 'grere32', 'grere33', 'grere34', 'grere35', 'grere36', 'grere37', 'grere38',
    'grere39', 'grere40'];

let nome_div = ['nome01', 'nome02', 'nome03', 'nome04', 'nome05', 'nome06', 'nome07', 'nome08', 'nome09', 'nome10',
    'nome11', 'nome12', 'nome13', 'nome14', 'nome15', 'nome16', 'nome17', 'nome18', 'nome19', 'nome20',
    'nome21', 'nome22', 'nome23', 'nome24', 'nome25', 'nome26', 'nome27', 'nome28', 'nome29', 'nome30',
    'nome31', 'nome32', 'nome33', 'nome34', 'nome35', 'nome36', 'nome37', 'nome38', 'nome39', 'nome40'];

let nome_cliente = ['passarnome01', 'passarnome02', 'passarnome03', 'passarnome04', 'passarnome05', 'passarnome06',
    'passarnome07', 'passarnome08', 'passarnome09', 'passarnome10', 'passarnome11', 'passarnome12',
    'passarnome13', 'passarnome14', 'passarnome15', 'passarnome16', 'passarnome17', 'passarnome18',
    'passarnome19', 'passarnome20', 'passarnome21', 'passarnome22', 'passarnome23', 'passarnome24',
    'passarnome25', 'passarnome26', 'passarnome27', 'passarnome28', 'passarnome29', 'passarnome30',
    'passarnome31', 'passarnome32', 'passarnome33', 'passarnome34', 'passarnome35', 'passarnome36', 'passarnome37',
    'passarnome38', 'passarnome39', 'passarnome40']

let nome_hora = ['campo_hora01', 'campo_hora02', 'campo_hora03', 'campo_hora04', 'campo_hora05', 'campo_hora06',
    'campo_hora07', 'campo_hora08', 'campo_hora09', 'campo_hora10', 'campo_hora11', 'campo_hora12',
    'campo_hora13', 'campo_hora14', 'campo_hora15', 'campo_hora16', 'campo_hora17', 'campo_hora18',
    'campo_hora19', 'campo_hora20', 'campo_hora21', 'campo_hora22', 'campo_hora23', 'campo_hora24',
    'campo_hora25', 'campo_hora26', 'campo_hora27', 'campo_hora28', 'campo_hora29', 'campo_hora30',
    'campo_hora31', 'campo_hora32', 'campo_hora33', 'campo_hora34', 'campo_hora35', 'campo_hora36', 'campo_hora37',
    'campo_hora38', 'campo_hora39', 'campo_hora40'];

let horaa = ['hora01', 'hora02', 'hora03', 'hora04', 'hora05', 'hora06', 'hora07', 'hora08', 'hora09', 'hora10', 'hora11',
    'hora12', 'hora13', 'hora14', 'hora15', 'hora16', 'hora17', 'hora18', 'hora19', 'hora20', 'hora21', 'hora22',
    'hora23', 'hora24', 'hora25', 'hora26', 'hora27', 'hora28', 'hora29', 'hora30', 'hora31', 'hora32', 'hora33', 'hora34',
    'hora35', 'hora36', 'hora37', 'hora38', 'hora39', 'hora40'];

let pedido = ['pedido01', 'pedido02', 'pedido03', 'pedido04', 'pedido05', 'pedido06', 'pedido07', 'pedido08', 'pedido09', 'pedido10', 'pedido11',
    'pedido12', 'pedido13', 'pedido14', 'pedido15', 'pedido16', 'pedido17', 'pedido18', 'pedido19', 'pedido20', 'pedido21', 'pedido22',
    'pedido23', 'pedido24', 'pedido25', 'pedido26', 'pedido27', 'pedido28', 'pedido29', 'pedido30', 'pedido31', 'pedido32',
    'pedido33', 'pedido34', 'pedido35', 'pedido36', 'pedido37', 'pedido38', 'pedido39', 'pedido40'];

let pedido_selec = ['pedido_nome01', 'pedido_nome02', 'pedido_nome03', 'pedido_nome04', 'pedido_nome05', 'pedido_nome06', 'pedido_nome07',
    'pedido_nome08', 'pedido_nome09', 'pedido_nome10', 'pedido_nome11', 'pedido_nome12', 'pedido_nome13', 'pedido_nome14',
    'pedido_nome15', 'pedido_nome16', 'pedido_nome17', 'pedido_nome18', 'pedido_nome19', 'pedido_nome20', 'pedido_nome21',
    'pedido_nome22', 'pedido_nome23', 'pedido_nome24', 'pedido_nome25', 'pedido_nome26', 'pedido_nome27', 'pedido_nome28',
    'pedido_nome29', 'pedido_nome30', 'pedido_nome31', 'pedido_nome32', 'pedido_nome33', 'pedido_nome34', 'pedido_nome35', 'pedido_nome36',
    'pedido_nome37', 'pedido_nome38', 'pedido_nome39', 'pedido_nome40'];

let nome_quantidade = ['quantidade_nome01', 'quantidade_nome02', 'quantidade_nome03', 'quantidade_nome04', 'quantidade_nome05',
    'quantidade_nome06', 'quantidade_nome07', 'quantidade_nome08', 'quantidade_nome09', 'quantidade_nome10',
    'quantidade_nome11', 'quantidade_nome12', 'quantidade_nome13', 'quantidade_nome14', 'quantidade_nome15',
    'quantidade_nome16', 'quantidade_nome17', 'quantidade_nome18', 'quantidade_nome19', 'quantidade_nome20',
    'quantidade_nome21', 'quantidade_nome22', 'quantidade_nome23', 'quantidade_nome24', 'quantidade_nome25',
    'quantidade_nome26', 'quantidade_nome27', 'quantidade_nome28', 'quantidade_nome29', 'quantidade_nome30',
    'quantidade_nome31', 'quantidade_nome32', 'quantidade_nome33', 'quantidade_nome34', 'quantidade_nome35', 'quantidade_nome36',
    'quantidade_nome37', 'quantidade_nome38', 'quantidade_nome39', 'quantidade_nome40'];

let quant_hambur = ['quant01', 'quant02', 'quant03', 'quant04', 'quant05', 'quant06', 'quant07', 'quant08', 'quant09', 'quant10',
    'quant11', 'quant12', 'quant13', 'quant14', 'quant15', 'quant16', 'quant17', 'quant18', 'quant19', 'quant20',
    'quant21', 'quant22', 'quant23', 'quant24', 'quant25', 'quant26', 'quant27', 'quant28', 'quant29', 'quant30',
    'quant31', 'quant32', 'quant33', 'quant34', 'quant35', 'quant36', 'quant37', 'quant38', 'quant39', 'quant40'];

let nome_endereco = ['campo_endereco01', 'campo_endereco02', 'campo_endereco03', 'campo_endereco04', 'campo_endereco05',
    'campo_endereco06', 'campo_endereco07', 'campo_endereco08', 'campo_endereco09', 'campo_endereco10',
    'campo_endereco11', 'campo_endereco12', 'campo_endereco13', 'campo_endereco14', 'campo_endereco15',
    'campo_endereco16', 'campo_endereco17', 'campo_endereco18', 'campo_endereco19', 'campo_endereco20',
    'campo_endereco21', 'campo_endereco22', 'campo_endereco23', 'campo_endereco24', 'campo_endereco25',
    'campo_endereco26', 'campo_endereco27', 'campo_endereco28', 'campo_endereco29', 'campo_endereco30',
    'campo_endereco31', 'campo_endereco32', 'campo_endereco33', 'campo_endereco34', 'campo_endereco35', 'campo_endereco36',
    'campo_endereco37', 'campo_endereco38', 'campo_endereco39', 'campo_endereco40'];

let endereco_cliente = ['endereco_digitado01', 'endereco_digitado02', 'endereco_digitado03', 'endereco_digitado04', 'endereco_digitado05',
    'endereco_digitado06', 'endereco_digitado07', 'endereco_digitado08', 'endereco_digitado09', 'endereco_digitado10',
    'endereco_digitado11', 'endereco_digitado12', 'endereco_digitado13', 'endereco_digitado14', 'endereco_digitado15',
    'endereco_digitado16', 'endereco_digitado17', 'endereco_digitado18', 'endereco_digitado19', 'endereco_digitado20',
    'endereco_digitado21', 'endereco_digitado22', 'endereco_digitado23', 'endereco_digitado24', 'endereco_digitado25',
    'endereco_digitado26', 'endereco_digitado27', 'endereco_digitado28', 'endereco_digitado29', 'endereco_digitado30',
    'endereco_digitado31', 'endereco_digitado32', 'endereco_digitado33', 'endereco_digitado34', 'endereco_digitado35', 'endereco_digitado36',
    'endereco_digitado37', 'endereco_digitado38', 'endereco_digitado39', 'endereco_digitado40'];

let nome_compl_endereco = ['compl_endereco01', 'compl_endereco02', 'compl_endereco03', 'compl_endereco04', 'compl_endereco05',
    'compl_endereco06', 'compl_endereco07', 'compl_endereco08', 'compl_endereco09', 'compl_endereco10',
    'compl_endereco11', 'compl_endereco12', 'compl_endereco13', 'compl_endereco14', 'compl_endereco15',
    'compl_endereco16', 'compl_endereco17', 'compl_endereco18', 'compl_endereco19', 'compl_endereco20',
    'compl_endereco21', 'compl_endereco22', 'compl_endereco23', 'compl_endereco24', 'compl_endereco25',
    'compl_endereco26', 'compl_endereco27', 'compl_endereco28', 'compl_endereco29', 'compl_endereco30',
    'compl_endereco31', 'compl_endereco32', 'compl_endereco33', 'compl_endereco34', 'compl_endereco35',
    'compl_endereco36', 'compl_endereco37', 'compl_endereco38', 'compl_endereco39', 'compl_endereco40']

let c_compl_endereco = ['camp_compl_endereco01', 'camp_compl_endereco02', 'camp_compl_endereco03', 'camp_compl_endereco04', 'camp_compl_endereco05',
    'camp_compl_endereco06', 'camp_compl_endereco07', 'camp_compl_endereco08', 'camp_compl_endereco09', 'camp_compl_endereco10',
    'camp_compl_endereco11', 'camp_compl_endereco12', 'camp_compl_endereco13', 'camp_compl_endereco14', 'camp_compl_endereco15',
    'camp_compl_endereco16', 'camp_compl_endereco17', 'camp_compl_endereco18', 'camp_compl_endereco19', 'camp_compl_endereco20',
    'camp_compl_endereco21', 'camp_compl_endereco22', 'camp_compl_endereco23', 'camp_compl_endereco24', 'camp_compl_endereco25',
    'camp_compl_endereco26', 'camp_compl_endereco27', 'camp_compl_endereco28', 'camp_compl_endereco29', 'camp_compl_endereco30',
    'camp_compl_endereco31', 'camp_compl_endereco32', 'camp_compl_endereco33', 'camp_compl_endereco34', 'camp_compl_endereco35',
    'camp_compl_endereco36', 'camp_compl_endereco37', 'camp_compl_endereco38', 'camp_compl_endereco39', 'camp_compl_endereco40']

let nome_complemento = ['campo_complemento01', 'campo_complemento02', 'campo_complemento03', 'campo_complemento04', 'campo_complemento05',
    'campo_complemento06', 'campo_complemento07', 'campo_complemento08', 'campo_complemento09', 'campo_complemento10',
    'campo_complemento11', 'campo_complemento12', 'campo_complemento13', 'campo_complemento14', 'campo_complemento15',
    'campo_complemento16', 'campo_complemento17', 'campo_complemento18', 'campo_complemento19', 'campo_complemento20',
    'campo_complemento21', 'campo_complemento22', 'campo_complemento23', 'campo_complemento24', 'campo_complemento25',
    'campo_complemento26', 'campo_complemento27', 'campo_complemento28', 'campo_complemento29', 'campo_complemento30',
    'campo_complemento31', 'campo_complemento32', 'campo_complemento33', 'campo_complemento34', 'campo_complemento35',
    'campo_complemento36', 'campo_complemento37', 'campo_complemento38', 'campo_complemento39', 'campo_complemento40'];

let complemento_certo = ['complemento01', 'complemento02', 'complemento03', 'complemento04', 'complemento05',
    'complemento06', 'complemento07', 'complemento08', 'complemento09', 'complemento10',
    'complemento11', 'complemento12', 'complemento13', 'complemento14', 'complemento15',
    'complemento16', 'complemento17', 'complemento18', 'complemento19', 'complemento20',
    'complemento21', 'complemento22', 'complemento23', 'complemento24', 'complemento25',
    'complemento26', 'complemento27', 'complemento28', 'complemento29', 'complemento30',
    'complemento31', 'complemento32', 'complemento33', 'complemento34', 'complemento35', 'complemento36', 'complemento37', 'complemento38',
    'complemento39', 'complemento40']

let click = ['bt01', 'bt02', 'bt03', 'bt04', 'bt05', 'bt06', 'bt07', 'bt08', 'bt09', 'bt10',
    'bt11', 'bt12', 'bt13', 'bt14', 'bt15', 'bt16', 'bt17', 'bt18', 'bt19', 'bt20',
    'bt21', 'bt22', 'bt23', 'bt24', 'bt25', 'bt26', 'bt27', 'bt28', 'bt29', 'bt30',
    'bt31', 'bt32', 'bt33', 'bt34', 'bt35', 'bt36', 'bt37', 'bt38', 'bt39', 'bt40'];

//-----------------------------------------------------------------------------  configuração dos complementos

let revesamentoComplemento = [0, 0, 0, 0, 0, 0];
// variáveis de complemento
let tomate = "", cebola = "", alface = "", milho = "", calabresa = "", completo = "";

function es01() {
    if (revesamentoComplemento[0] == 0) {     // ref ao campo tomate 
        window.document.getElementById('es01').style.backgroundColor = "green";
        revesamentoComplemento[0] = 1;
        tomate = "Tomate, ";

        revesamentoComplemento[5] = 0;
        document.getElementById('es06').style.backgroundColor = "transparent";
        completo = "";
    }
}

function es02() {
    if (revesamentoComplemento[1] == 0) {         // ref ao campo cebola 
        window.document.getElementById('es02').style.backgroundColor = "green";
        revesamentoComplemento[1] = 1;
        cebola = "Cebola,";

        revesamentoComplemento[5] = 0;
        document.getElementById('es06').style.backgroundColor = "transparent";
        completo = "";
    }
}

function es03() {
    if (revesamentoComplemento[2] == 0) {        // ref ao campo alface
        window.document.getElementById('es03').style.backgroundColor = "green";
        revesamentoComplemento[2] = 1;
        alface = "Alface, ";

        revesamentoComplemento[5] = 0;
        document.getElementById('es06').style.backgroundColor = "transparent";
        completo = "";
    }
}

function es04() {
    if (revesamentoComplemento[3] == 0) {         // ref ao campo milho
        window.document.getElementById('es04').style.backgroundColor = "green";
        revesamentoComplemento[3] = 1;
        milho = "Milho, ";

        revesamentoComplemento[5] = 0;
        document.getElementById('es06').style.backgroundColor = "transparent";
        completo = "";
    }
}

function es05() {
    if (revesamentoComplemento[4] == 0) {        // ref ao campo calabresa 
        window.document.getElementById('es05').style.backgroundColor = "green";
        revesamentoComplemento[4] = 1;
        calabresa = "Calabresa";

        revesamentoComplemento[5] = 0;
        document.getElementById('es06').style.backgroundColor = "transparent";
        completo = "";
    }
}

function es06() {
    if (revesamentoComplemento[5] == 0) {        // ref ao campo completo 
        window.document.getElementById('es06').style.backgroundColor = "green";
        revesamentoComplemento[5] = 1;
        completo = "Completo";

        let grupo = ['es01', 'es02', 'es03', 'es04', 'es05'];

        for (let i = 0; i < 5; i++) {
            revesamentoComplemento[i] = 0;
            document.getElementById(grupo[i]).style.backgroundColor = "transparent";
        }

        tomate = ""; cebola = ""; alface = ""; milho = ""; calabresa = "";

    }
}

//-------------------------------------------------------------- função limpar todo os dados do formulário

function Limpar() {

    let grupo = ['es01', 'es02', 'es03', 'es04', 'es05', 'es06'];   // inicio da primeira instancia

    for (let i = 0; i < 6; i++) {
        revesamentoComplemento[i] = 0;
        window.document.getElementById(grupo[i]).style.backgroundColor = "transparent"
    }

    tomate = ""; cebola = ""; alface = ""; milho = ""; calabresa = ""; completo = "";  // fim da primeira instancia

    let grupo_formulario = ['nome', 'endereco', 'compl_endereco', 'numero'];

    for (let i = 0; i < 4; i++) {
        window.document.getElementById(grupo_formulario[i]).value = "";
    }
}

//---------------------------------------------------------- funções retirar pedido da fila de pedido

let troca = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let valores_quant = 0;
let soma_quant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let valores_lucro = 0;
let soma_lucro = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let verificador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function bt01() {

    for (let i = 0; i < 40; i++) {
        if (troca[i] == 0) {

            window.document.getElementById(campo_geral[i]).style.display = "none";  // adiconando ao campo de vendidos
            painel[i] = 0;

            valores_quant = parseInt(valores_quant) + parseInt(soma_quant[i]);
            document.getElementById('vendidos').value = valores_quant;

            if (verificador[i] == "Pechincheiro Burguer") {             // adicionando ao campo de lucro
                soma_lucro[i] = 5;
                valores_lucro = parseInt(valores_lucro) + parseInt(soma_lucro[i] * soma_quant[i]);
            }
            else if (verificador[i] == "Lagilina Burguer") {
                soma_lucro[i] = 7;
                valores_lucro = parseInt(valores_lucro) + parseInt(soma_lucro[i] * soma_quant[i]);
            }
            else if (verificador[i] == "Narizinho Burguer") {
                soma_lucro[i] = 10;
                valores_lucro = parseInt(valores_lucro) + parseInt(soma_lucro[i] * soma_quant[i]);
            }
            else if (verificador[i] == "Bucho Burguer") {
                soma_lucro[i] = 13;
                valores_lucro = parseInt(valores_lucro) + parseInt(soma_lucro[i] * soma_quant[i]);
            }
            else if (verificador[i] == "Fofão Burguer") {
                soma_lucro[i] = 15;
                valores_lucro = parseInt(valores_lucro) + parseInt(soma_lucro[i] * soma_quant[i]);
            }
            else if (verificador[i] == "Meu Beiço Burguer") {
                soma_lucro[i] = 17;
                valores_lucro = parseInt(valores_lucro) + parseInt(soma_lucro[i] * soma_quant[i]);
            }
            else if (verificador[i] == "Explosão") {
                soma_lucro[i] = 30;
                valores_lucro = parseInt(valores_lucro) + parseInt(soma_lucro[i] * soma_quant[i]);
            }
            document.getElementById('lucro').value = valores_lucro + " R$";

            troca[i] = 1;

            break;
        }
    }
}