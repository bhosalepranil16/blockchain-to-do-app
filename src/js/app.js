const Web3 = require('web3');

let web3Provider = null;
let web3 = null;
let contracts = {};
let account = null;
let todoInstance = null;

const dataArea = document.getElementById('data-area');
const btnAddTask = document.getElementById('btnAddTask');
const taskInput = document.getElementById('taskInput');
const taskInputId = document.getElementById('taskInputId');
const btncompleteTask = document.getElementById('btncompleteTask');

const initWeb3 = async () => {
	if(window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		await window.ethereum.enable();
		web3Provider = window.web3.currentProvider;
	} else {
		web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
		web3 = new Web3(App.web3Provider);
	}
}
const initContract = function() {
	$.getJSON("TodoList.json",function(todo) {
		contracts.Todo = TruffleContract(todo);
		contracts.Todo.setProvider(web3Provider);
		return connectedAccount();
	})
}

const connectedAccount = async () => {
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	account = accounts[0];
	todoInstance = await contracts.Todo.deployed();
	return render();
}

const render = async () => {
	const taskCount = await todoInstance.taskCount();
	let task = null;
	dataArea.innerHTML = "";
	for(let i=0;i<taskCount;i++) {
		task = await todoInstance.taskList(i);
		const template = '<tr><th scope="row">' + task[0] + '</th><th>' + task[1] + '</th><th>' + task[2] + '</th>';
		dataArea.insertAdjacentHTML('beforeend',template);
	}
}

btnAddTask.addEventListener('click',async(e) => {
	e.preventDefault();
	await todoInstance.addTask(taskInput.value);
	render();
});

btncompleteTask.addEventListener('click',async(e) => {
	e.preventDefault();
	await todoInstance.completeStatus(parseInt(taskInputId.value));
	render();
});


$(function(){
	$(window).load(function(){
		initWeb3();
		initContract();
	});
});