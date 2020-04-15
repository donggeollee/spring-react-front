import BoardList from '../components/BoardList';
import Filter from '../components/Filter';
import BoardWriteBtn from '../components/BoardWriteBtn';
import Link from 'next/link';

const Board = ()=>{


    return (
        <div>
            <Filter/>
            <BoardWriteBtn/>
            <BoardList/>
            <p>
                complex search filter +  paging Board page 
            </p>
            


        </div>
    )
}

export default Board;