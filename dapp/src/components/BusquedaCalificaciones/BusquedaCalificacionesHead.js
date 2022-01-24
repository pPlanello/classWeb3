const BusquedaCalificacionesHead = ({evaluacionesLength}) => {

    let thead = [];

    thead.push(<th key={"chn"}>Nombre</th>);
    thead.push(<th key={"chn"}>Nota</th>);

    return <thead>{thead}</thead>;
};

export default BusquedaCalificacionesHead;
