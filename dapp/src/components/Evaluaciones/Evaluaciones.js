import {newContextComponents} from "@drizzle/react-components";

import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";

import EvaluacionesProfesor from "./EvaluacionesProfesor/EvaluacionesProfesor"

import EvaluacionesSinComponentes from "./EvaluacionesSinComponentes";

const {AccountData, ContractData} = newContextComponents;

const Evaluaciones = (props) => (
    <section className="AppEvaluaciones">
        <h2>Evaluaciones</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"evaluacionesLength"}
            render={el => (
                <table>
                    <EvaluacionesHead/>
                    <EvaluacionesBody drizzle={props.drizzle}
                                      drizzleState={props.drizzleState}
                                      evaluacionesLength={el}/>
                </table>
            )}
        />

        <EvaluacionesSinComponentes drizzle={props.drizzle} drizzleState={props.drizzleState} />

        <AccountData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            accountIndex="0"
            units="ether"
            precision="3"
            render={({address, balance, units}) => <>
                <ContractData
                    drizzle={props.drizzle}
                    drizzleState={props.drizzleState}
                    contract={"Asignatura"}
                    method={"datosAlumno"}
                    methodArgs={[address]}
                    render={datos => {
                        return (<EvaluacionesProfesor drizzle={props.drizzle} drizzleState={props.drizzleState} address={address} datos={datos}/>);
                    }}
                />
            </>
            }
        />
        
    </section>
);

export default Evaluaciones;
