function TaskItem1(){
    let todoName = 'Task One';
    let todoDate = '3/02/2024';

    return <div className="row mb-3">
        <div className="col-6">
            {todoName}
        </div>
        <div className="col-4">
            {todoDate}
        </div>
        <div className="col-2">
            <button className={'btn btn-danger'}>Delete</button>
        </div>
    </div>
}
export default TaskItem1