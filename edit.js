import React, { Component } from 'react';
import axios from 'axios'; 

export default class EditTodo extends Component {

    constructor(props) {
        super(props); 
        

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoUser = this.onChangeTodoUser.bind(this); 
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this); 
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state={
            todo_description:'', 
            todo_user:'',
            todo_priority: '',
            todo_completed:false
        }
    }

    componentDidMount(){
        axios.get('https://localhost:4000/todos/ +this.props.match.params.id')
        .then(response =>{
            this.setState({
                todo_description: response.data.todo_description,
                todo_user: response.data.todo_user,
                todo_priority: response.data.todo_priority,
                todo_completed: response.data.todo_completed,
            })
        })

        .catch(function(error) {
            console.log(error)
        })
    }

    onChangeTodoDescription(e) {
        this.setState({
          todo_description: e.target.value
        });
    }
    
    onChangeTodoUser(e) {
        this.setState({
            todo_user: e.target.value
        });
    }
    
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }
    
    onChangeTodoCompleted(e){
        this.setState({
            todo_completed:!this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_user: this.state.todo_user, 
            todo_priority: this.state.todo_priority, 
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
          .then(res => console.log(res, 'data'));
          this.props.history.push('/')
    }

    render() {
        return (
            <div>
                 <h3>Edit Todo</h3>
                  <form onSubmit={this.onSubmit}>
                  </form>
                   <div className="form-group">               <label>Description: </label>
                      <input type="text"
                             className="form-control"
                             value={this.state.todo_description}
                             onChange={this.onChangeTodoDescription}
                              />
                             </div>
                             <div className="form-group">
                                <label>User:</label>
                                <input type="text"
                                       className="form-control"
                                       value={this.state.todo_user}
                                       onChange={this.onChangeTodoUser}
                                       />
                        </div>
                        <div className="form-group">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.todo_priority ==='Low' }
                                   onChange={this.onChangeTodoPriority}
                                    />
                         <label className="form-check-label">Low</label>
                   </div>
                   <div className="form-group">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.todo_priority ==='Medium' }
                                   onChange={this.onChangeTodoPriority}
                                    />
                         <label className="form-check-label">Medium</label>
                         </div>
                         <div className="form-group">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.todo_priority ==='High' }
                                   onChange={this.onChangeTodoPriority}
                                    />
                             <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="completedCheckbox"
                                   name="completedCheckbox"
                                   onChange={this.onChangeTodoCompleted}
                                   checked={this.state.todo_completed}
                                   value={this.state.todo_completed}
                                   />
                                   <label className="form-check-label" htmlFor="completedCheckbox">
                                   Completed
                                   </label>
                            </div>
                            <br/>
                             <div className="form-group">
                              <input type="submit" value="Edit Todo" className="btn btn-primary" />
                             </div>
                             </div>
                        </div>
                  </div>
            </div>
    
    
        )}
}