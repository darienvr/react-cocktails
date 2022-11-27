import { useGlobalContext } from '../Context';

const Pagination = ({pagina, onchange}) => {

    const { cocktails } = useGlobalContext()
    
    let valor = (cocktails.length)/6;
    let total = Math.trunc(valor)

    if(total<valor){
        total=total+1
    }

    const getPaginas = () => {
        const resultado = [];
        for(let i = 0; i < total; i++){
            let pa=i+1
            resultado.push(
            <button key={pa} onClick={() => onchange(pa)} 
                className={pagina === pa ? 'btn-pag active ' : 'btn-pag' }>
                {pa}
            </button>)
        }
        return resultado;
    }

    return(
        <div className="paginacion">
            <span className="texto-paginacion">Pagina {pagina} de {total}:</span>
            <br/>
            {getPaginas()}
        </div>
    )
}


export default Pagination;