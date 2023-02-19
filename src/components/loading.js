import ReactLoading from 'react-loading';

export function Loading() {
    return (
        <div style={{display :"flex" , "justifyContent" : "center" , "alignItems": "center" , margin:"80px"}}>
            <ReactLoading  type={"spin"} color={"#3498db"} height={'5%'} width={'5%'}  />
        </div>
    )
}