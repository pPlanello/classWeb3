import {newContextComponents} from "@drizzle/react-components";
import BusquedaCalificacionesBody from "./BusquedaCalificacionesBody";
import BusquedaCalificacionesHead from "./BusquedaCalificacionesHead";

const {ContractData, ContractForm} = newContextComponents;

const BusquedaCalificaciones = (props) => {
    const {drizzle, drizzleState} = props;
    const url = window.location.search;
    const index = url.split("=")[1];
    return (<ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract={"Asignatura"}
        method={"evaluaciones"}
        methodArgs={[index]}
        render={evaluacion => {
            return (<>
                <h1>Evaluacion: {evaluacion.nombre}</h1>
                <table>
                <BusquedaCalificacionesHead></BusquedaCalificacionesHead>
                <ContractData drizzle={props.drizzle}
                    drizzleState={props.drizzleState}
                    contract={"Asignatura"}
                    method={"matriculasLength"}
                    render={matriculasLength => {
                        let rowAlumno = [];
                        for (let i = 0; i < matriculasLength; i++) {
                            rowAlumno.push(<ContractData
                                drizzle={props.drizzle}
                                drizzleState={props.drizzleState}
                                contract={"Asignatura"}
                                method={"matriculas"}
                                methodArgs={[i]}
                                render={addrAlumno => 
                                    <BusquedaCalificacionesBody drizzle={props.drizzle}
                                                        drizzleState={props.drizzleState}
                                                        addrAlumno={addrAlumno}
                                                        index={index}/>
                                }
                            />)
                        }
                        return rowAlumno;
                    }}
                />
                </table>
                </>);
        }}
    />);
};
    
export default BusquedaCalificaciones;