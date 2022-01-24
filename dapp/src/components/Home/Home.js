import {newContextComponents} from "@drizzle/react-components";
import Matriculacion from "./Matriculacion";

const {AccountData, ContractData, ContractForm} = newContextComponents;

const Home = (props) => (
    <section className="AppHome">
        <h3>Bienvenido a la práctica de BCDA.</h3>

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
                        let content = "";
                        // Comprobacion de si estás matriculado
                        if (datos.nombre) {
                            return (<p>{datos.nombre} ESTÁS MATRICULADO</p>);
                        } else {
                            // Comprobacion si eres profesor y sino matricularte.
                            content = (<Matriculacion
                                drizzle = {props.drizzle}
                                drizzleState = {props.drizzleState}
                                address = {address}
                            />);
                        }
                        return content
                    }}
                />
            </>
            }
        />
    </section>
);
    
export default Home;