import {newContextComponents} from "@drizzle/react-components";
import { Link } from "react-router-dom";

const {ContractData, ContractForm} = newContextComponents;

const EvaluacionesProfesor = (props) => {
    const {drizzle, drizzleState, address, datos} = props;
    // Comprobacion si eres profesor y sino matricularte.
    return (<>
            <h2>Buscar Notas por Evaluaciones</h2>
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"profesor"}
                methodArgs={[]}
                render={addrProfe => {
                    if (addrProfe === address) {
                        return (<ContractData
                                    drizzle={drizzle}
                                    drizzleState={drizzleState}
                                    contract={"Asignatura"}
                                    method={"evaluacionesLength"}
                                    methodArgs={[]}
                                    render={evaluacionesLength=> {
                                        let linkEvaluaciones = [];
                                        for (let i = 0; i < evaluacionesLength; i++) {
                                            linkEvaluaciones.push(<ContractData
                                                drizzle={drizzle}
                                                drizzleState={drizzleState}
                                                contract={"Asignatura"}
                                                method={"evaluaciones"}
                                                methodArgs={[i]}
                                                render={evaluacion => {
                                                    let routeEvaluacion = "/calificacionesProfesor/?indexEval=" + i;
                                                    return (<p>Notas de: 
                                                        <button><Link to={routeEvaluacion}>
                                                            {evaluacion.nombre}
                                                            </Link>
                                                        </button>
                                                        </p>);
                                                }}
                                            />);
                                        }
                                        return linkEvaluaciones;
                                    }}
                                />);
                    } else if (datos.nombre) {
                        return <p>{datos.nombre} NO ERES PROFESOR</p>
                    } else {
                        return <p>NO ESTÁS MATRICULADO</p>
                    }
                }}
            /></>);
};
    
export default EvaluacionesProfesor;