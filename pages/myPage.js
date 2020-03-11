import Link from 'next/link';

const MyPage = ({id})=>{

    return (
        <div>
            마이페이지
            <Link href={{ 
                    pathname:'/post',
                    query : {id:'1'}
                    }}
                  as={`/post/${'1'}`}
            >
                <a>포스트페이지로 이동</a>
            </Link>
        </div>
    )
}

MyPage.getInitialProps = async (context) => {
    console.log("excute getInitial Props!!!!__MyPage.js")
    return { id : parseInt(context.query.id, 10) }
}


export default MyPage;