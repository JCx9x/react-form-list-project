import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes)
  return (
    <div className="md:w-1/2 lg:w-3/5 w-full">
      <h2 className="font-bold text-3xl text-center mt-10 md:mt-0">Listado de pacientes</h2>
      <p className="text-lg mt-5 text-center"> 
        Administra tus {' '}
        <span className="text-indigo-600 font-bold">
          pacientes y citas
        </span>
      </p>

      <div>
        {pacientes.map((paciente) => (
          <Paciente 
          key={paciente.id}
          paciente={paciente} />
        ))}
      </div>
    </div>
  );
};

export default ListadoPacientes;