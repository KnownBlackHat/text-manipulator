export default function Alert({obj}){
    return(
        obj && <div className={"rounded text-white p-4 m-4 bg-" + obj.color + "-500"}>
            {obj.msg} 
        </div>
    )
}