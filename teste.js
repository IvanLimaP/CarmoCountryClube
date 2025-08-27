//laço for do 1 ao 10
for(let i1 = 1; i1<=10; i++) {
    console.log(i1)
}

//laço while do 1 ao 5
let i2 = 1;
while (i2 <= 5) {
    console.log(i2);
    i2++;
}

//laço do...while do 1 ao 3
let i3 = 1;
do {
    console.log(i3);
    i3++
}while(i3<=3)

//laço for numeros pares do 2 ao 20
for (let i4 = 2; i4 <= 20; i4 +=2) {
    console.log(i4);
}

//laço while numeros decrescente do 10 ao 1
let i5 = 10;
while (i5 >= 1) {
    console.log(i5);
    i5--;
}

//laço for tabuada do 5
for (let i6 = 1; i6 <= 10; i6++) {
    console.log(`5 x ${i6} = ${5 * i6}`);
}

//laço for soma dos numeros do 1 ao 100
let soma = 0;
for (let i7 = 1; i7 <= 100; i7++) {
    soma += i7;
}
console.log(soma); //não ta funcionando


//laço while numeros impares do 1 ao 20
let i8 = 1;
while(i8 <= 20) {
    if (i8 % 2 !== 0) {
        console.log(i8)
    }
    i8++;
}

const lista = [1,2,3,4,5,1,2,3,4,6,9,5,9]

const itemEncontrado = lista.find((item) => {
    return item > 2;
});

console.log(itemEncontrado)

let veiculo = {tipo: 'carro', numeroChasi: 123456, placa: 'HQJ-0102', anoFabricado: 2001 };
let veiculoAlterado = {...veiculo, active: true}


console.log(veiculo)
console.log(veiculoAlterado)

//resolvendo exercicio

const tasks = [
    { descrição: 'Passear com o cachorro', prioridade: 1, status: 'Concluida' },
    { descrição: 'Comprar ingredientes para o almoço', prioridade: 1, status: 'Concluida' },
    { descrição: 'Fazer o almoço', prioridade: 1, status: 'Pendente' },
    { descrição: 'Ir para a academia', prioridade: 2, status: 'Pendente' },
    { descrição: 'Resolver exercicio do curso', prioridade: 1, status: 'Concluida' },
    { descrição: 'Ir para o futebol', prioridade: 3, status: 'Pendente' },
]

//encontrar uma tarefa especifica
const selectedTask = tasks.find((tasks) => tasks.descrição === 'Fazer o almoço');
console.log(selectedTask);

//verificar se todas as tarefas estão concluidas
const isEveryTaskDone = tasks.every((tasks) => tasks.status === 'Concluida');
console.log(isEveryTaskDone);

//contar tarefas pendentes
/*const pendingTasksQtd = tasks.reduce((prev, next) => {
    if (next.status === 'Pendente') return prev + 1;
    return prev;
}, 0);

console.log(pendingTasksQtd);*/

//ordenar tarefas por prioridade 
/*const sortedTasks = tasks.sort((prevTask, currentTask) => prevTask.prioridade - currentTask.prioridade);
console.log(sortedTasks)*/

//adicionando novas tarefas
/*tasks.push({descrição: 'Treinar violão', prioridade: 2, status: 'Pendente'})
console.log(tasks)*/

//remover tarefas concluidas
/*const pendingTasks = tasks.filter((tasks) => tasks.status === 'Pendente'); pode fazer assim ou desse outro jeito abaixo
const pendingTasks = tasks.filter(({ status }) => status === 'Pendente');
console.log(pendingTasks);*/

//marcar tarefas como concluidas
/*const doneTasks = tasks.map((tasks) => ({ ...tasks, status: 'Concluida'}));
console.log(doneTasks);*/

//Promise

console.log('Buscar dados em um servidor');

let promessaDeBusca = new Promise((resolve, reject) => {
    console.log('Iniciando busca de dados no servidor')

    setTimeout(() => {
        let sucesso = true;
        if (sucesso) resolve({name: 'Fabio', age: 28})
        else reject('Opa, aconteceu um erro no servidor! Dados não encontrados')
    }, 5000)
})

console.log('Vida que segue, estou fazendo outras coisas no condigo enquanto executa a busca')

promessaDeBusca
    .then(console.log)
    .catch(console.log)