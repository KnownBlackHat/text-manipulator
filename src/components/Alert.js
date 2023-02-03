export default function Alert({ obj }) {
    setTimeout(() => {
        try {document.querySelector(`#id_${obj.id}`).remove()}
        catch {}
    }, 1500);
    return (
        <div id={`id_${obj.id}`} className={"rounded duration-500 text-white p-4 m-4 bg-" + obj.color + "-500"}>
            {obj.msg}
            
        </div>
    )
}