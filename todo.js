function Todo({todo, index, remove}){
    function handle(){
        remove(index);
    } 

    return(
        <div className="todo" onClick={handle}>{todo.text} <small>(remove)</small></div>
    );
}