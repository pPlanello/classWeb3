import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const BusquedaCalificacionesBody = (props) => {
    const {drizzle, drizzleState, addrAlumno, index} = props;
    let row = [];
    row.push(<td>
        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"datosAlumno"}
            methodArgs={[addrAlumno]}
            render={datos => {
                return <p>{datos.nombre}</p>;
            }}
        />
    </td>);
    row.push(<td>
        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"calificaciones"}
            methodArgs={[addrAlumno, index]}
            render={nota =>
                <td>
                    {nota.tipo === "0" ? "N.P." : ""}
                    {nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                    {nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                </td>
            }
        />
    </td>);

    return (<tbody>{row}</tbody>);
};

export default BusquedaCalificacionesBody;
