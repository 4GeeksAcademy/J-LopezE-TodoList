import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
	const [inpuntTask, setInputTask] = useState("");
	const [taskList, setTaskList] = useState([])

	const taskAdd = (event) => {
		setInputTask(event.target.value);

	}
	const submitTask = () => {
		setTaskList([...taskList, inpuntTask])
		setInputTask("")
	}
	const evenKey = (event) => {
		if (event.key === "Enter")
			return submitTask();
		else console.log("estas mal")
	}
	const deletTask = (index) => {
		const filterTask = taskList.filter((task, i) => i !== index)
		setTaskList(filterTask)
	}
	return (
		<div className="card mb-3 mt-5 text-center">
			<h1>TodoList</h1>
			 <div className="card-header d-flex">
				<input type="text" className="form-control" value={inpuntTask} onChange={taskAdd} onKeyDown={evenKey} />
				<button className="btn btn-primary" onClick={submitTask}>+</button>
			</div>
			<div className="card-body">
					<ul className="list-group">
						{taskList.map((task, index) => {
							return <li key={task+index} className="list-group-item active d-flex justify-content-between" aria-current="true">{task}
								<button className="btn btn-danger" onClick={() => deletTask(index)}>X</button>
							</li>
						})}
					</ul>
				</div> 
		</div>
	);
};

export default Home;
