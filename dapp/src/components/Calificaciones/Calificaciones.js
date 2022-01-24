import {newContextComponents} from "@drizzle/react-components";

import CalificacionesHead from "./CalificacionesHead";
import CalificacionesBody from "./CalificacionesBody";
import Calificar from "./Calificar";

import CalificacionesProfesor from "./CalificacionesProfesor/CalificacionesProfesor";

const {AccountData, ContractData} = newContextComponents;

const Calificaciones = (props) => (
    <section className="AppCalificaciones">
        <h2>Calificaciones</h2>

        <ContractData drizzle={props.drizzle}
                      drizzleState={props.drizzleState}
                      contract={"Asignatura"}
                      method={"matriculasLength"}
                      render={ml => <ContractData
                          drizzle={props.drizzle}
                          drizzleState={props.drizzleState}
                          contract={"Asignatura"}
                          method={"evaluacionesLength"}
                          render={el => <table>
                              <CalificacionesHead evaluacionesLength={el}/>
                              <CalificacionesBody drizzle={props.drizzle}
                                                  drizzleState={props.drizzleState}
                                                  matriculasLength={ml}
                                                  evaluacionesLength={el}/>
                          </table>}
                      />}
        />

        <Calificar drizzle={props.drizzle}
                   drizzleState={props.drizzleState} />

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
                        return (<CalificacionesProfesor drizzle={props.drizzle} drizzleState={props.drizzleState} address={address} datos={datos}/>);
                    }}
                />
            </>
            }
        />
    </section>
);

export default Calificaciones;
