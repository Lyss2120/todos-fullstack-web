const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			todos: [
				{
					todoId: 0,
					todoTitle: "make the bed",
					done: false,
					archived: false,
					tag: "HomeTasks"
				},
				{
					todoId: 7,
					todoTitle: "make breakfast",
					done: false,
					archived: false,
					tag: "HomeTasks"
				},
				{
					todoId: 9,
					todoTitle: "cleaning",
					done: false,
					archived: false,
					tag: "HomeTasks"
				},
				{
					todoId: 1,
					todoTitle: "finish webapp project",
					done: true,
					archived: false,
					tag: "Work"
				},
				{
					todoId: 2,
					todoTitle: "dr appointment",
					done: false,
					archived: false,
					tag: "Health"
				},
				{
					todoId: 3,
					todoTitle: "random task",
					done: true,
					archived: false,
					tag: null
				},
				{
					todoId: 0,
					todoTitle: "make the bed",
					done: false,
					archived: false,
					tag: "HomeTasks"
				},
				{
					todoId: 7,
					todoTitle: "make breakfast",
					done: false,
					archived: false,
					tag: "HomeTasks"
				},
				{
					todoId: 9,
					todoTitle: "cleaning",
					done: false,
					archived: false,
					tag: "HomeTasks"
				},
				{
					todoId: 1,
					todoTitle: "finish webapp project",
					done: true,
					archived: false,
					tag: "Work"
				},
				{
					todoId: 2,
					todoTitle: "dr appointment",
					done: false,
					archived: false,
					tag: "Health"
				},
				{
					todoId: 3,
					todoTitle: "random task",
					done: true,
					archived: false,
					tag: null
				}

			],
			tags: [
				{ value: "Work", label: "Work", icon: "CgWorkAlt" },
				{ value: "Errands", label: "Errands", icon: "MdAddShoppingCart" },
				{ value: "Health", label: "Health", icon: "CiMedicalCross" },
				{ value: "HomeTasks", label: "HomeTasks", icon: "IoHomeOutline" },
				{ value: "Study", label: "Study", icon: "IoIosLaptop" },
				{ value: null, label: "None" }
			],
            filteredTag: {
				title: 'Work',
				icon: 'CgWorkAlt',
				todos: [
					{
						todoId: 1,
						todoTitle: "finish webapp project",
						done: true,
						archived: false,
						tag: "Work"
					},
					{
						todoId: 1,
						todoTitle: "finish webapp project",
						done: true,
						archived: false,
						tag: "Work"
					}
				]
			},
			inputValue: '',
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// getMessage: async () => {
			// 	try {
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	} catch (error) {
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			
			getAllTodos: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			getOneTodo: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			deleteTodo: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			updateteTodo: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			addTodo: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			addTag: (id) => {
				console.log('addTag', id);

			},

			handleSubmit: () => {
				const store = getStore();
				// const [...store.inputValue]= newInputValue
				console.log('handlesubmit');
				setStore({ todos: [...store.todos, newInputValue] });
			},

			archiveTodoById: (todo, id) => {
				// const store = getStore();
				console.log('archiveTodoById', todo, id);
				// setStore({ demo: demo });
			}

		}
	};
};

export default getState;