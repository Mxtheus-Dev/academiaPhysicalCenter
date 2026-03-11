// Lista de treinos pendentes
let treinos = JSON.parse(localStorage.getItem("treinos")) || []

// Lista de treinos concluídos
let concluidos = JSON.parse(localStorage.getItem("concluidos")) || []


/* =====================================
        CONTRATAR PLANO
=====================================*/

function contratarPlano(plano){

// salva plano escolhido
localStorage.setItem("plano", plano)

// redireciona para cadastro
window.location.href = "cadastro.html"

}


/* =====================================
        CARREGAMENTO DAS PÁGINAS
=====================================*/

window.onload = function(){

// verifica se precisa estar logado na área do aluno
if(window.location.pathname.includes("aluno.html")){

let logado = localStorage.getItem("logado")

if(logado !== "true"){
window.location.href = "login.html"
return
}

}

// recupera plano salvo
let plano = localStorage.getItem("plano")

// preenche campo plano no cadastro
let campoPlano = document.getElementById("plano")
if(campoPlano){
campoPlano.value = plano
}

// mostra dados do aluno
let aluno = JSON.parse(localStorage.getItem("aluno"))

if(aluno){

let nomeAluno = document.getElementById("nomeAluno")
let planoAluno = document.getElementById("planoAluno")

if(nomeAluno) nomeAluno.innerText = aluno.nome
if(planoAluno) planoAluno.innerText = aluno.plano

}

// carrega dados de treinos
mostrarTreinos()
mostrarConcluidos()
mostrarProximoTreino()

}


/* =====================================
        CADASTRO DO ALUNO
=====================================*/

function finalizarCadastro(){

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let telefone = document.getElementById("telefone").value
let senha = document.getElementById("senha").value
let plano = document.getElementById("plano").value

// cria objeto aluno
let aluno = {
nome,
email,
telefone,
senha,
plano
}

// salva no localStorage
localStorage.setItem("aluno", JSON.stringify(aluno))

alert("Cadastro realizado com sucesso!")

// redireciona para login
window.location.href = "login.html"

}


/* =====================================
        LOGIN DO ALUNO
=====================================*/

function loginAluno(){

let email = document.getElementById("loginEmail").value
let senha = document.getElementById("loginSenha").value

let aluno = JSON.parse(localStorage.getItem("aluno"))

if(!aluno){

alert("Você ainda não possui cadastro")
window.location.href = "cadastro.html"
return

}

// verifica email e senha
if(email === aluno.email && senha === aluno.senha){

localStorage.setItem("logado", "true")

window.location.href = "aluno.html"

}else{

alert("Email ou senha incorretos")

}

}


/* =====================================
        SAIR DA CONTA
=====================================*/

function sairConta(){

localStorage.removeItem("logado")

window.location.href = "login.html"

}


/* =====================================
        ADICIONAR TREINO
=====================================*/

function adicionarTreino(){

let data = document.getElementById("dataTreino").value
let tipo = document.getElementById("tipoTreino").value
let exercicio = document.getElementById("exercicio").value
let musculo = document.getElementById("musculo").value
let carga = document.getElementById("carga").value
let reps = document.getElementById("reps").value

// valida campos
if(!data || !tipo || !exercicio || !musculo || !carga || !reps){

alert("Preencha todos os campos")
return

}

// adiciona treino
treinos.push({
data,
tipo,
exercicio,
musculo,
carga,
reps
})

// salva no storage
localStorage.setItem("treinos", JSON.stringify(treinos))

// atualiza tela
mostrarTreinos()
mostrarProximoTreino()

}


/* =====================================
        MOSTRAR TREINOS PENDENTES
=====================================*/

function mostrarTreinos(){

let container = document.getElementById("listaTreinos")

if(!container) return

container.innerHTML = ""

treinos.forEach((t,index)=>{

container.innerHTML +=

`<div class="treino">

<h3>${t.exercicio}</h3>

<p>Data: ${t.data}</p>
<p>Tipo: ${t.tipo}</p>
<p>Músculo: ${t.musculo}</p>
<p>Carga: ${t.carga} kg</p>
<p>Repetições: ${t.reps}</p>

<button onclick="concluirTreino(${index})">
Concluir treino
</button>

<button onclick="removerTreino(${index})">
Remover
</button>

</div>`

})

}


/* =====================================
        CONCLUIR TREINO
=====================================*/

function concluirTreino(index){

let treino = treinos[index]

// move para concluídos
concluidos.push(treino)

// remove da lista
treinos.splice(index,1)

// salva alterações
localStorage.setItem("treinos", JSON.stringify(treinos))
localStorage.setItem("concluidos", JSON.stringify(concluidos))

// atualiza tela
mostrarTreinos()
mostrarConcluidos()
mostrarProximoTreino()

}


/* =====================================
        REMOVER TREINO
=====================================*/

function removerTreino(index){

treinos.splice(index,1)

localStorage.setItem("treinos", JSON.stringify(treinos))

mostrarTreinos()
mostrarProximoTreino()

}


/* =====================================
        MOSTRAR TREINOS CONCLUÍDOS
=====================================*/

function mostrarConcluidos(){

let container = document.getElementById("treinosConcluidos")

if(!container) return

container.innerHTML = ""

concluidos.forEach(t=>{

container.innerHTML +=

`<div class="treino">

<h3>${t.exercicio}</h3>

<p>Data: ${t.data}</p>
<p>Tipo: ${t.tipo}</p>

</div>`

})

}


/* =====================================
        MOSTRAR PRÓXIMO TREINO
=====================================*/

function mostrarProximoTreino(){

let campo = document.getElementById("proximoTreino")

if(!campo) return

if(treinos.length === 0){

campo.innerText = "Nenhum treino"
return

}

// ordena por data
let futuros = treinos.sort((a,b)=> new Date(a.data) - new Date(b.data))

let proximo = futuros[0]

campo.innerText = proximo.data + " - " + proximo.tipo

}