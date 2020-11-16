/*                                1001 Burguer   24/10/2020
      
      Programador - @Douglasghs_    Atualizado - 24/10/2020
      */

             /* Documentação do código em um arquivo *txt na pasta do programa 
                -- Segue a numeração de cada parte ao lado direito do código!!
                -- A numeração do código é referente a numeração no arquivo *txt
            */
function salvar() {                                                         
    for (let i = 0; i < 40; i++) {
        if (painel[i] == 0) {
            if (window.document.getElementById('nome').value != "" && window.document.getElementById('numero').value != "") {
                let criar = window.document.getElementById(campo_geral[i]);                                  // campo geral -- 01
                
                criar.style.display = 'block';   criar.style.float = "left"; criar.style.width = "508px";
                criar.style.height = "100px"; criar.style.borderRadius = "10px"; criar.style.marginTop = "2px";
                criar.style.background = "orange"; criar.style.boxShadow = "1px 1px 1px 1px black";

                let Nome = window.document.getElementById(nome_div[i]);   // div escrito nome

                Nome.style.float = "left"; Nome.style.width = "60px";
                Nome.style.height = "20px"; Nome.innerHTML = "Cliente: ";
                Nome.style.fontSize = "12pt"; Nome.style.fontFamily = "Arial";
                Nome.style.fontStyle = "Normal"; Nome.style.fontWeight = "Bold";
                Nome.style.marginLeft = "3px"; Nome.style.marginTop = "3px"; Nome.style.color = "red";

                let cliente = window.document.getElementById('nome').value;    // div com o nome do cliente
                let passar_tela = window.document.getElementById(nome_cliente[i]);
                passar_tela.innerHTML = cliente;

                passar_tela.style.float = "left"; passar_tela.style.width = "200px";
                passar_tela.style.height = "20px"; passar_tela.style.marginTop = "3px";
                passar_tela.style.fontSize = "12pt"; passar_tela.style.fontFamily = "Arial";
                passar_tela.style.fontStyle = "Normal"; passar_tela.style.fontWeight = "Bold"; passar_tela.style.marginLeft = "2px";

                let campo_hora01 = window.document.getElementById(nome_hora[i]); // nome hora

                campo_hora01.style.float = "left"; campo_hora01.style.width = "50px";
                campo_hora01.style.height = "20px"; campo_hora01.style.fontWeight = "Bold";
                campo_hora01.style.marginLeft = "110px"; campo_hora01.style.marginTop = "3px";
                campo_hora01.innerHTML = "Hora:"; campo_hora01.style.fontSize = "12pt";
                campo_hora01.style.fontFamily = "Arial"; campo_hora01.style.fontStyle = "Normal"; campo_hora01.style.color = "red"

                let hora = window.document.getElementById(horaa[i]);                // campo da hora
                hora.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();

                hora.style.float = "left"; hora.style.width = "50px"; hora.style.height = "20px";
                hora.style.marginLeft = "3px"; hora.style.marginTop = "3px";
                hora.style.fontSize = "12pt"; hora.style.fontFamily = "Arial";
                hora.style.fontStyle = "Normal"; hora.style.fontWeight = "Bold";

                let pedido_fixo = window.document.getElementById(pedido[i]);        // nome pedido 

                pedido_fixo.style.float = "left"; pedido_fixo.style.width = "60px";
                pedido_fixo.style.height = "20px"; pedido_fixo.innerHTML = "Pedido: ";
                pedido_fixo.style.fontSize = "12pt"; pedido_fixo.style.fontFamily = "Arial";
                pedido_fixo.style.fontStyle = "Normal"; pedido_fixo.style.fontWeight = "Bold";
                pedido_fixo.style.marginLeft = "3px"; pedido_fixo.style.marginTop = "3px"; pedido_fixo.style.color = "red";

                let pedido_nome = window.document.getElementById(pedido_selec[i]);         // pedido selecionado
                let lache = window.document.getElementById('campo_lache');
                pedido_nome.innerHTML = lache.options[lache.selectedIndex].value;

                pedido_nome.style.width = "230px"; pedido_nome.style.height = "20px";
                pedido_nome.style.float = "left"; pedido_nome.style.color = "blue";
                pedido_nome.style.fontSize = "12pt"; pedido_nome.style.fontFamily = "Arial";
                pedido_nome.style.fontStyle = "Normal"; pedido_nome.style.fontWeight = "Bold";
                pedido_nome.style.marginTop = "3px"; pedido_nome.style.marginLeft = "2px";

                let quantidade = window.document.getElementById(nome_quantidade[i])  // nome quantidade

                quantidade.style.float = "left"; quantidade.style.width = "97px";
                quantidade.style.height = "20px"; quantidade.innerHTML = "Quantidade: ";
                quantidade.style.fontSize = "12pt"; quantidade.style.fontFamily = "Arial";
                quantidade.style.fontStyle = "Normal"; quantidade.style.fontWeight = "Bold";
                quantidade.style.marginTop = "3px"; quantidade.style.color = "red";

                let quant = window.document.getElementById(quant_hambur[i]);      // quantidade de hamburduer
                let quant_pedido = window.document.getElementById('numero').value;
                quant.innerHTML = quant_pedido + " Unidades";
                soma.push(window.document.getElementById('numero').value);

                quant.style.width = "100px"; quant.style.height = "20px";
                quant.style.float = "left"; quant.style.color = "black";
                quant.style.fontSize = "12pt"; quant.style.fontFamily = "Arial";
                quant.style.fontStyle = "Normal"; quant.style.fontWeight = "Bold";
                quant.style.marginTop = "3px"; 


                let endereco = window.document.getElementById(nome_endereco[i]);    // nome endereço

                endereco.style.width = "50px"; endereco.style.height = "20px";
                endereco.innerHTML = "Endereço: "; endereco.style.color = "red";
                endereco.style.fontSize = "12pt"; endereco.style.fontFamily = "Arial";
                endereco.style.fontStyle = "Normal"; endereco.style.fontWeight = "Bold";
                endereco.style.marginLeft = "3px"; endereco.style.marginTop = "3px"; endereco.style.float = "left";

                let endereco_digitado = window.document.getElementById(endereco_cliente[i]);    // endereço do cliente
                let pegar_endereco = window.document.getElementById('endereco').value;
                endereco_digitado.innerHTML = pegar_endereco;

                endereco_digitado.style.float = "left"; endereco_digitado.style.width = "400px";
                endereco_digitado.style.height = "20px"; endereco_digitado.style.color = "black";
                endereco_digitado.style.fontSize = "12pt"; endereco_digitado.style.fontFamily = "Arial";
                endereco_digitado.style.fontStyle = "Normal"; endereco_digitado.style.fontWeight = "Bold";
                endereco_digitado.style.marginTop = "3px"; endereco_digitado.style.marginLeft = "34px";

                let campo_complemento = window.document.getElementById(nome_complemento[i]);   // nome complemento

                campo_complemento.style.width = "50px"; campo_complemento.style.height = "20px";
                campo_complemento.innerHTML = "Complemento: "; campo_complemento.style.color = "red";
                campo_complemento.style.fontSize = "12pt"; campo_complemento.style.fontFamily = "Arial";
                campo_complemento.style.fontStyle = "Normal"; campo_complemento.style.fontWeight = "Bold";
                campo_complemento.style.marginLeft = "3px"; campo_complemento.style.marginTop = "3px"; campo_complemento.style.float = "left";

                complemento = window.document.getElementById(complemento_certo[i]);    // complemento

                complemento.style.float = "left"; complemento.style.width = "300px";
                complemento.style.height = "20px"; complemento.style.color = "black";
                complemento.style.fontSize = "12pt"; complemento.style.fontFamily = "Arial";
                complemento.style.fontStyle = "Normal"; complemento.style.fontWeight = "Bold";
                complemento.style.marginTop = "3px"; complemento.style.marginLeft = "70px";

                let botao = window.document.getElementById(click[i]);

                botao.style.width = "60px"; botao.style.height = "20px";
                botao.style.float = "left"; botao.innerHTML = "Fechar";
                botao.style.color = "black"; botao.style.fontSize = "10pt"; botao.style.fontFamily = "Arial";
                botao.style.fontStyle = "Normal"; botao.style.fontWeight = "Bold";

                painel[i] = 1;
                // Limpar campos apos salvar

                window.document.getElementById('nome').value = "";
                window.document.getElementById('endereco').value = "";
                window.document.getElementById('numero').value = "";
                tomate = "";
                cebola = "";
                alface = "";
                milho = "";
                Calabresa = "";
                window.document.getElementById('es01').style.background = "rgba(169, 169, 169, 0.945)";
                window.document.getElementById('es02').style.background = "rgba(169, 169, 169, 0.945)";
                window.document.getElementById('es03').style.background = "rgba(169, 169, 169, 0.945)";
                window.document.getElementById('es04').style.background = "rgba(169, 169, 169, 0.945)";
                window.document.getElementById('es05').style.background = "rgba(169, 169, 169, 0.945)";
                window.document.getElementById('es06').style.background = "rgba(169, 169, 169, 0.945)";

                break;
            }
            else if(window.document.getElementById('nome').value == "" || window.document.getElementById('numero').value == ""){
                alert("Preencha os campos para salvar")

                break;
            }
        }
    }
}

// =============================================================================================================================================
// --------------------------------------------------- click de escolha de verdura  ------------------------------------------------------------
// =============================================================================================================================================

let tomate = " ";   let alface = " ";
let cebola = " ";   let milho = " ";
let Calabresa = " ";

function es01() {
    window.document.getElementById('es01').style.background = "green";
    tomate = " Tomate";
    for(let i=0; i<40; i++){
        if(painel[i] == 0){
            window.document.getElementById(complemento_certo[i]).innerHTML = tomate + cebola + alface + milho + Calabresa;
            break;
        }
    }
}

function es02() {
    window.document.getElementById('es02').style.background = "green";
    cebola = ", Cebola";
    for(let i=0; i<40; i++){
        if(painel[i] == 0){
            window.document.getElementById(complemento_certo[i]).innerHTML = tomate + cebola + alface + milho + Calabresa;
            break;
        }
    }
}

function es03() {
    window.document.getElementById('es03').style.background = "green";
    alface = ", Alface";
    for(let i=0; i<40; i++){
        if(painel[i] == 0){
            window.document.getElementById(complemento_certo[i]).innerHTML = tomate + cebola + alface + milho + Calabresa;
            break;
        }
    }
}

function es04() {
    window.document.getElementById('es04').style.background = "green";
    milho = ", Milho";
    for(let i=0; i<40; i++){
        if(painel[i] == 0){
            window.document.getElementById(complemento_certo[i]).innerHTML = tomate + cebola + alface + milho + Calabresa;
            break;
        }
    }
}

function es05() {
    window.document.getElementById('es05').style.background = "green";
    Calabresa = ", Calabresa";
    for(let i=0; i<40; i++){
        if(painel[i] == 0){
            window.document.getElementById(complemento_certo[i]).innerHTML = tomate + cebola + alface + milho + Calabresa;
            break;
        }
    }
}

function es06() {
    window.document.getElementById('es06').style.background = "green";
    for(let i=0; i<40; i++){
        if(painel[i] == 0){
            window.document.getElementById(complemento_certo[i]).innerHTML = "Completo";
            break;
        }
    }
}

// =============================================================================================================================================
// -------------------------------------------------------  fechar bloco ---------------------------------------------------------------------
// ============================================================================================================================================

let geral_vendidos = 0;

function bt01() {
    document.getElementById('grere01').style.display = 'none';
    let soma02 = 0;
    for(let i=0; i<soma.length; i++){
        soma02 =+ soma[i];
    }
    geral_vendidos =+ soma02;
    window.document.getElementById('vendidos').value = geral_vendidos;
    alert(geral_vendidos);

    
    painel[0] = 0;
}

function bt02() {
    document.getElementById('grere02').style.display = 'none';
    let soma02 = 0;
    for(let i=0; i<soma.length; i++){
        soma02 =+ soma[i];
    }
    geral_vendidos =+ soma02;
    window.document.getElementById('vendidos').value = geral_vendidos;
    alert(geral_vendidos);

    painel[1] = 0;
}

function bt03() {
    document.getElementById('grere03').style.display = 'none';
    let soma02 = 0;
    for(let i=0; i<soma.length; i++){
        soma02 =+ soma[i];
    }
    window.document.getElementById('vendidos').value = soma02;
    alert(soma02);
    painel[2] = 0;
}

function bt04() {
    document.getElementById('grere04').style.display = 'none';
    painel[3] = 0;
}

function bt05() {
    document.getElementById('grere05').style.display = 'none';
    painel[4] = 0;
}

function bt06() {
    document.getElementById('grere06').style.display = 'none';
    painel[5] = 0;
}

function bt07() {
    document.getElementById('grere07').style.display = 'none';
    painel[6] = 0;
}

function bt08() {
    document.getElementById('grere08').style.display = 'none';
    painel[7] = 0;
}

function bt09() {
    document.getElementById('grere09').style.display = 'none';
    painel[8] = 0;
}

function bt10() {
    document.getElementById('grere10').style.display = 'none';
    painel[9] = 0;
}

function bt11() {
    document.getElementById('grere11').style.display = 'none';
    painel[10] = 0;
}

function bt12() {
    document.getElementById('grere12').style.display = 'none';
    painel[11] = 0;
}

function bt13() {
    document.getElementById('grere13').style.display = 'none';
    painel[12] = 0;
}

function bt14() {
    document.getElementById('grere14').style.display = 'none';
    painel[13] = 0;
}

function bt15() {
    document.getElementById('grere15').style.display = 'none';
    painel[14] = 0;
}

function bt16() {
    document.getElementById('grere16').style.display = 'none';
    painel[15] = 0;
}

function bt17() {
    document.getElementById('grere17').style.display = 'none';
    painel[16] = 0;
}

function bt18() {
    document.getElementById('grere18').style.display = 'none';
    painel[17] = 0;
}

function bt19() {
    document.getElementById('grere19').style.display = 'none';
    painel[18] = 0;
}

function bt20() {
    document.getElementById('grere20').style.display = 'none';
    painel[19] = 0;
}

function bt21() {
    document.getElementById('grere21').style.display = 'none';
    painel[20] = 0;
}

function bt22() {
    document.getElementById('grere22').style.display = 'none';
    painel[21] = 0;
}

function bt23() {
    document.getElementById('grere23').style.display = 'none';
    painel[22] = 0;
}

function bt24() {
    document.getElementById('grere24').style.display = 'none';
    painel[23] = 0;
}

function bt25() {
    document.getElementById('grere25').style.display = 'none';
    painel[24] = 0;
}

function bt26() {
    document.getElementById('grere26').style.display = 'none';
    painel[25] = 0;
}

function bt27() {
    document.getElementById('grere27').style.display = 'none';
    painel[26] = 0;
}

function bt28() {
    document.getElementById('grere28').style.display = 'none';
    painel[27] = 0;
}

function bt29() {
    document.getElementById('grere29').style.display = 'none';
    painel[28] = 0;
}

function bt30() {
    document.getElementById('grere30').style.display = 'none';
    painel[29] = 0;
}

function bt31() {
    document.getElementById('grere31').style.display = 'none';
    painel[30] = 0;
}

function bt32() {
    document.getElementById('grere32').style.display = 'none';
    painel[31] = 0;
}

function bt33() {
    document.getElementById('grere33').style.display = 'none';
    painel[32] = 0;
}

function bt34() {
    document.getElementById('grere34').style.display = 'none';
    painel[33] = 0;
}

function bt35() {
    document.getElementById('grere35').style.display = 'none';
    painel[34] = 0;
}

function bt36() {
    document.getElementById('grere36').style.display = 'none';
    painel[35] = 0;
}

function bt37() {
    document.getElementById('grere37').style.display = 'none';
    painel[36] = 0;
}

function bt38() {
    document.getElementById('grere38').style.display = 'none';
    painel[37] = 0;
}

function bt39() {
    document.getElementById('grere39').style.display = 'none';
    painel[38] = 0;
}

function bt40() {
    document.getElementById('grere40').style.display = 'none';
    painel[39] = 0;
}

window.document.getElementById('lucro').value = "0.0";
window.document.getElementById('vendidos').value = "0";


// =============================================================================================================================================
// -------------------------------------------------------  Limpar bloco ---------------------------------------------------------------------
// ============================================================================================================================================

function Limpar() {
    for(let i=0; i<40; i++){                             // marcação respectiva da div de pedido;
        if(painel[i] == 0){
            window.document.getElementById(complemento_certo[i]).innerHTML = "";
            break;
        }
    }
    window.document.getElementById('nome').value = "";
    window.document.getElementById('endereco').value = "";
    window.document.getElementById('numero').value = "";
    tomate = "";
    cebola = "" ;
    alface = "";
    milho = "";
    Calabresa = "";
    window.document.getElementById('es01').style.background = "rgba(169, 169, 169, 0.945)";
    window.document.getElementById('es02').style.background = "rgba(169, 169, 169, 0.945)";
    window.document.getElementById('es03').style.background = "rgba(169, 169, 169, 0.945)";
    window.document.getElementById('es04').style.background = "rgba(169, 169, 169, 0.945)";
    window.document.getElementById('es05').style.background = "rgba(169, 169, 169, 0.945)";
    window.document.getElementById('es06').style.background = "rgba(169, 169, 169, 0.945)";
}








var painel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let campo_geral = ['grere01', 'grere02', 'grere03', 'grere04', 'grere05', 'grere06', 'grere07', 'grere08', 'grere09',
    'grere10', 'grere11', 'grere12', 'grere13', 'grere14', 'grere15', 'grere16', 'grere17', 'grere18',
    'grere19', 'grere20', 'grere21', 'grere22', 'grere23', 'grere24', 'grere25', 'grere26', 'grere27',
    'grere28', 'grere29', 'grere30', 'grere31','grere32', 'grere33','grere34','grere35','grere36','grere37','grere38',
    'grere39', 'grere40'];

let nome_div = ['nome01', 'nome02', 'nome03', 'nome04', 'nome05', 'nome06', 'nome07', 'nome08', 'nome09', 'nome10',
    'nome11', 'nome12', 'nome13', 'nome14', 'nome15', 'nome16', 'nome17', 'nome18', 'nome19', 'nome20',
    'nome21', 'nome22', 'nome23', 'nome24', 'nome25', 'nome26', 'nome27', 'nome28', 'nome29', 'nome30',
    'nome31','nome32','nome33','nome34','nome35','nome36','nome37','nome38','nome39','nome40'];

let nome_cliente = ['passarnome01', 'passarnome02', 'passarnome03', 'passarnome04', 'passarnome05', 'passarnome06',
    'passarnome07', 'passarnome08', 'passarnome09', 'passarnome10', 'passarnome11', 'passarnome12',
    'passarnome13', 'passarnome14', 'passarnome15', 'passarnome16', 'passarnome17', 'passarnome18',
    'passarnome19', 'passarnome20', 'passarnome21', 'passarnome22', 'passarnome23', 'passarnome24',
    'passarnome25', 'passarnome26', 'passarnome27', 'passarnome28', 'passarnome29', 'passarnome30',
    'passarnome31','passarnome32','passarnome33','passarnome34','passarnome35','passarnome36','passarnome37',
    'passarnome38','passarnome39','passarnome40']

let nome_hora = ['campo_hora01', 'campo_hora02', 'campo_hora03', 'campo_hora04', 'campo_hora05', 'campo_hora06',
    'campo_hora07', 'campo_hora08', 'campo_hora09', 'campo_hora10', 'campo_hora11', 'campo_hora12',
    'campo_hora13', 'campo_hora14', 'campo_hora15', 'campo_hora16', 'campo_hora17', 'campo_hora18',
    'campo_hora19', 'campo_hora20', 'campo_hora21', 'campo_hora22', 'campo_hora23', 'campo_hora24',
    'campo_hora25', 'campo_hora26', 'campo_hora27', 'campo_hora28', 'campo_hora29', 'campo_hora30',
    'campo_hora31','campo_hora32','campo_hora33','campo_hora34','campo_hora35','campo_hora36','campo_hora37',
    'campo_hora38','campo_hora39','campo_hora40'];

let horaa = ['hora01', 'hora02', 'hora03', 'hora04', 'hora05', 'hora06', 'hora07', 'hora08', 'hora09', 'hora10', 'hora11',
    'hora12', 'hora13', 'hora14', 'hora15', 'hora16', 'hora17', 'hora18', 'hora19', 'hora20', 'hora21', 'hora22',
    'hora23', 'hora24', 'hora25', 'hora26', 'hora27', 'hora28', 'hora29', 'hora30', 'hora31','hora32','hora33','hora34',
    'hora35','hora36','hora37','hora38','hora39','hora40'];

let pedido = ['pedido01', 'pedido02', 'pedido03', 'pedido04', 'pedido05', 'pedido06', 'pedido07', 'pedido08', 'pedido09', 'pedido10', 'pedido11',
    'pedido12', 'pedido13', 'pedido14', 'pedido15', 'pedido16', 'pedido17', 'pedido18', 'pedido19', 'pedido20', 'pedido21', 'pedido22',
    'pedido23', 'pedido24', 'pedido25', 'pedido26', 'pedido27', 'pedido28', 'pedido29', 'pedido30', 'pedido31','pedido32',
    'pedido33','pedido34','pedido35','pedido36','pedido37','pedido38','pedido39','pedido40'];

let pedido_selec = ['pedido_nome01', 'pedido_nome02', 'pedido_nome03', 'pedido_nome04', 'pedido_nome05', 'pedido_nome06', 'pedido_nome07',
    'pedido_nome08', 'pedido_nome09', 'pedido_nome10', 'pedido_nome11', 'pedido_nome12', 'pedido_nome13', 'pedido_nome14',
    'pedido_nome15', 'pedido_nome16', 'pedido_nome17', 'pedido_nome18', 'pedido_nome19', 'pedido_nome20', 'pedido_nome21',
    'pedido_nome22', 'pedido_nome23', 'pedido_nome24', 'pedido_nome25', 'pedido_nome26', 'pedido_nome27', 'pedido_nome28',
    'pedido_nome29', 'pedido_nome30', 'pedido_nome31','pedido_nome32','pedido_nome33','pedido_nome34','pedido_nome35','pedido_nome36',
    'pedido_nome37','pedido_nome38','pedido_nome39','pedido_nome40'];

let nome_quantidade = ['quantidade_nome01', 'quantidade_nome02', 'quantidade_nome03', 'quantidade_nome04', 'quantidade_nome05',
    'quantidade_nome06', 'quantidade_nome07', 'quantidade_nome08', 'quantidade_nome09', 'quantidade_nome10',
    'quantidade_nome11', 'quantidade_nome12', 'quantidade_nome13', 'quantidade_nome14', 'quantidade_nome15',
    'quantidade_nome16', 'quantidade_nome17', 'quantidade_nome18', 'quantidade_nome19', 'quantidade_nome20',
    'quantidade_nome21', 'quantidade_nome22', 'quantidade_nome23', 'quantidade_nome24', 'quantidade_nome25',
    'quantidade_nome26', 'quantidade_nome27', 'quantidade_nome28', 'quantidade_nome29', 'quantidade_nome30',
    'quantidade_nome31','quantidade_nome32','quantidade_nome33','quantidade_nome34','quantidade_nome35','quantidade_nome36',
    'quantidade_nome37','quantidade_nome38','quantidade_nome39','quantidade_nome40'];

let quant_hambur = ['quant01', 'quant02', 'quant03', 'quant04', 'quant05', 'quant06', 'quant07', 'quant08', 'quant09', 'quant10',
    'quant11', 'quant12', 'quant13', 'quant14', 'quant15', 'quant16', 'quant17', 'quant18', 'quant19', 'quant20',
    'quant21', 'quant22', 'quant23', 'quant24', 'quant25', 'quant26', 'quant27', 'quant28', 'quant29', 'quant30',
    'quant31','quant32','quant33','quant34','quant35','quant36','quant37','quant38','quant39','quant40'];

let nome_endereco = ['campo_endereco01', 'campo_endereco02', 'campo_endereco03', 'campo_endereco04', 'campo_endereco05',
    'campo_endereco06', 'campo_endereco07', 'campo_endereco08', 'campo_endereco09', 'campo_endereco10',
    'campo_endereco11', 'campo_endereco12', 'campo_endereco13', 'campo_endereco14', 'campo_endereco15',
    'campo_endereco16', 'campo_endereco17', 'campo_endereco18', 'campo_endereco19', 'campo_endereco20',
    'campo_endereco21', 'campo_endereco22', 'campo_endereco23', 'campo_endereco24', 'campo_endereco25',
    'campo_endereco26', 'campo_endereco27', 'campo_endereco28', 'campo_endereco29', 'campo_endereco30',
    'campo_endereco31','campo_endereco32','campo_endereco33','campo_endereco34','campo_endereco35','campo_endereco36',
    'campo_endereco37','campo_endereco38','campo_endereco39','campo_endereco40'];

let endereco_cliente = ['endereco_digitado01', 'endereco_digitado02', 'endereco_digitado03', 'endereco_digitado04', 'endereco_digitado05',
    'endereco_digitado06', 'endereco_digitado07', 'endereco_digitado08', 'endereco_digitado09', 'endereco_digitado10',
    'endereco_digitado11', 'endereco_digitado12', 'endereco_digitado13', 'endereco_digitado14', 'endereco_digitado15',
    'endereco_digitado16', 'endereco_digitado17', 'endereco_digitado18', 'endereco_digitado19', 'endereco_digitado20',
    'endereco_digitado21', 'endereco_digitado22', 'endereco_digitado23', 'endereco_digitado24', 'endereco_digitado25',
    'endereco_digitado26', 'endereco_digitado27', 'endereco_digitado28', 'endereco_digitado29', 'endereco_digitado30',
    'endereco_digitado31','endereco_digitado32','endereco_digitado33','endereco_digitado34','endereco_digitado35','endereco_digitado36',
    'endereco_digitado37','endereco_digitado38','endereco_digitado39','endereco_digitado40'];

let nome_complemento = ['campo_complemento01', 'campo_complemento02', 'campo_complemento03', 'campo_complemento04', 'campo_complemento05',
    'campo_complemento06', 'campo_complemento07', 'campo_complemento08', 'campo_complemento09', 'campo_complemento10',
    'campo_complemento11', 'campo_complemento12', 'campo_complemento13', 'campo_complemento14', 'campo_complemento15',
    'campo_complemento16', 'campo_complemento17', 'campo_complemento18', 'campo_complemento19', 'campo_complemento20',
    'campo_complemento21', 'campo_complemento22', 'campo_complemento23', 'campo_complemento24', 'campo_complemento25',
    'campo_complemento26', 'campo_complemento27', 'campo_complemento28', 'campo_complemento29', 'campo_complemento30',
    'campo_complemento31','campo_complemento32','campo_complemento33','campo_complemento34','campo_complemento35',
    'campo_complemento36','campo_complemento37','campo_complemento38','campo_complemento39','campo_complemento40'];

let complemento_certo = ['complemento01', 'complemento02', 'complemento03', 'complemento04', 'complemento05',
    'complemento06', 'complemento07', 'complemento08', 'complemento09', 'complemento10',
    'complemento11', 'complemento12', 'complemento13', 'complemento14', 'complemento15',
    'complemento16', 'complemento17', 'complemento18', 'complemento19', 'complemento20',
    'complemento21', 'complemento22', 'complemento23', 'complemento24', 'complemento25',
    'complemento26', 'complemento27', 'complemento28', 'complemento29', 'complemento30',
    'complemento31','complemento32','complemento33','complemento34','complemento35','complemento36','complemento37','complemento38',
    'complemento39','complemento40']

let click = ['bt01', 'bt02', 'bt03', 'bt04', 'bt05', 'bt06', 'bt07', 'bt08', 'bt09', 'bt10',
    'bt11', 'bt12', 'bt13', 'bt14', 'bt15', 'bt16', 'bt17', 'bt18', 'bt19', 'bt20',
    'bt21', 'bt22', 'bt23', 'bt24', 'bt25', 'bt26', 'bt27', 'bt28', 'bt29', 'bt30',
    'bt31','bt32','bt33','bt34','bt35','bt36','bt37','bt38','bt39','bt40'];

    let soma = []