export default function App2() {
    return (
        <Board></Board>
    );
}

export function Board() {
    return (<>
        <div className="board-row">
            <Square value={1}/>
            <Square value={2}/>
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
    </>
    )
}
export function Square({value}) {
    function handleClick(){
        console.log('clicked')
    }
    return (
        <button className="square" onClick={handleClick}>{value}</button>
    )
}