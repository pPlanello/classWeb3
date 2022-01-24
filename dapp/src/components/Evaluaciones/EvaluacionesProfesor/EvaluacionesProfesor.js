import {newContextComponents} from "@drizzle/react-components";

const {ContractData, ContractForm} = newContextComponents;

const EvaluacionesProfesor = (props) => {
    const {drizzle, drizzleState, address, datos} = props;
    // Comprobacion si eres profesor y sino matricularte.
    return (<ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"profesor"}
                methodArgs={[]}
                render={addrProfe => {
                    if (addrProfe === address) {
                        const dayNow = new Date();
                        return <ContractForm
                            drizzle={drizzle}
                            drizzleState={drizzleState}
                            contract="Asignatura"
                            method="creaEvaluacion"
                            render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                const labels = ["Nombre de la evaluación", "fecha", "puntos"];
                                const placeholder = ["Pepe", dayNow.getTime()/1000, ]
                                return (<>
                                    <h2>Añadir una evaluación</h2>
                                    <form onSubmit={handleSubmit}>
                                        {inputs.map((input, index) => {
                                            return  (<p> {labels[index]} &nbsp;
                                                <input key={input.name} type={inputTypes[index]} name={input.name}
                                                    value={state[input.name]} placeholder={placeholder[index]}
                                                    onChange={handleInputChange}
                                                />
                                            </p>)
                                            })}
                                        <button key="submit" type="button" onClick={handleSubmit}>Añadir evaluación</button>
                                    </form>
                                </>);
                            }}
                        />
                    } else if (datos.nombre) {
                        return <p>{datos.nombre} NO ERES PROFESOR</p>
                    } else {
                        return <p>NO ESTÁS MATRICULADO</p>
                    }
                }}
            />);
};
    
export default EvaluacionesProfesor;