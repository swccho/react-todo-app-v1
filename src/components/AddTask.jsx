function AddTask(){
    return <div className="row mb-3">
        <div className="col-6">
            <input type="text" className={'form-control'} placeholder={'Enter Task Here'}/>
        </div>
        <div className="col-4">
            <input type="date"  className={'form-control'} />
        </div>
        <div className="col-2">
            <button className={'btn btn-success'}>Add</button>
        </div>
    </div>
}
export default AddTask