import {newContextComponents} from "@drizzle/react-components";

const {AccountData, ContractData, ContractForm} = newContextComponents;

const Matriculacion = (props) => {
    const {drizzle, drizzleState, address} = props;
    // Comprobacion si eres profesor y sino matricularte.
    return (<ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"profesor"}
                methodArgs={[]}
                render={addrProfe => {
                    if (addrProfe === address) {
                        return <p>SOY EL PROFE</p>
                    }
                    return <ContractForm
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="Asignatura"
                        method="automatricula"
                        render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                            const labels = ["Nombre y Primer Apellido", "email"];
                            const placeholder = ["Pepe", "pepe@alumnos.upm.es"]
                            return <form onSubmit={handleSubmit}>
                                        {inputs.map((input, index) => (
                                            <p> {labels[index]} &nbsp;
                                                <input key={input.name} type={inputTypes[index]} name={input.name}
                                                    value={state[input.name]} placeholder={placeholder[index]}
                                                    onChange={handleInputChange}
                                                />
                                            </p> ))}
                                        <button key="submit" type="button" onClick={handleSubmit}>Matricular</button>
                                    </form>
                        }}
                    />
                }}
            />);
};
    
export default Matriculacion;