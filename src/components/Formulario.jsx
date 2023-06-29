
import {useState} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');


    const [error, setError] = useState(false);

   
    const handleSubmit = (e) => {

        e.preventDefault()

        //Validación del formulario

        //Comprobación de si hay algún campo vacío
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return;
        }else{
            setError(false)
        }

        //objeto de paciente

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        //se obtiene una copia de pacientes y se le asigna objetoPaciente
        setPacientes([...pacientes, objetoPaciente]);

        console.log(pacientes)


        //Reiniciar el form

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-3"> 
                Añade pacientes y {' '}
                <span className="text-indigo-600 font-bold">
                    Adminitralos
                </span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="shadow-md rounded-lg py-10 px-5 bg-slate-100">

                {error && <Error mensaje = 'Todos los campos son obligatorios'/>}

                <div className="mb-5">
                    <label htmlFor="mascota"
                    className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Mascota
                    </label>
                    <input 
                       id= "mascota"
                       type="text"
                       placeholder="Nombre de la mascota"
                       className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       value={nombre}
                       onChange={(e) => setNombre(e.target.value)}
                       />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario"
                    className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Propietario
                    </label>
                    <input 
                       id= "propietario"
                       type="text"
                       placeholder="Nombre del propietario"
                       className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       value={propietario}
                       onChange={(e) => setPropietario(e.target.value)}
                       />
                </div>
                <div className="mb-5">
                    <label htmlFor="email"
                    className="block text-gray-700 uppercase font-bold"
                    >
                        Email
                    </label>
                    <input 
                       id= "email"
                       type="email"
                       placeholder="Email propietario"
                       className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta"
                    className="block text-gray-700 uppercase font-bold"
                    >
                        Alta
                    </label>
                    <input 
                       id= "alta"
                       type="date"
                       className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       value={fecha}
                       onChange={(e) => setFecha(e.target.value)}
                       />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta"
                    className="block text-gray-700 uppercase font-bold"
                    >
                        Síntomas
                    </label>
                    <textarea
                    id="sintomas"
                    className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los Síntomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    >
                    </textarea>
                </div>

                <input

                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursot-pointer transition-colors"
                value="Agregar paciente"                
                />
                
            </form>
        </div>
    )

}

export default Formulario
