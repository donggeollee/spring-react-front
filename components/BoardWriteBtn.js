import Link from 'next/link';

const BoardWriteBtn = ({props}) => {
    return (
        <div>
            <span style={{padding:'5px'}}>
                    <Link href='/boardWrite'>
                        <button>글작성</button>
                    </Link>
            </span>
        </div>
    )
}
export default BoardWriteBtn;