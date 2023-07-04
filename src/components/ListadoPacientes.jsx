import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  

  return (
    <div className="md:w-1/2 lg:w-3/5 w-full">

      {pacientes && pacientes.length ? (
        <>
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

        </>
      ) : (
        <>

          <h2 className="font-bold text-3xl text-center mt-10 md:mt-0">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center"> 
            Comienza a agregar {' '}
            <span className="text-indigo-600 font-bold">
              pacientes.
            </span>
          </p>

        </>
      )}

      

    </div>
  );
};

export default ListadoPacientes;