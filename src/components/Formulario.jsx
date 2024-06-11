import React from 'react'
import { useForm } from "react-hook-form";
import { edadValidator } from "./validator";


const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const incluirCivil = watch('incluirCivil')

  return (
    <div>
        <h2>formulario</h2>
        <p>Nombre: {watch('nombre')}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label >Nombre</label>
                <input type="text" {...register('nombre',{
                    required: true,
                    maxLength: 8
                })}  />
                {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El nombre tiene que tener ocho caracteres</p>}

            </div>
            <div>
                <label >Dirección</label>
                <input type="text" {...register('direccion')}  />
            </div>
            <div>
                <label >Email</label>
                <input type="text" {...register('email',{
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })}  />
                {errors.email?.type === 'pattern' && <p>El formato de email no es correcto</p>}
            </div>
            <div>
                <label >Edad</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })}  />
                {errors.edad && <p>La edad debe estar entre 18 a 65 </p>}

            </div>
            <div>
                <label >Provincia</label>
                <select {...register('proviancia')}>
                    <option value="BA">Buenos Aires</option>
                    <option value="C">Cordoba</option>
                    <option value="M">Mendoza</option>
                </select>
            </div>
            <input type="submit" value='Enviar' />
            <div>
                <label >¿Incluir estado civil?</label>
                <input type="checkbox" {...register('incluirCivil')} />
            </div>
            { incluirCivil && (
                <div>
                    <label >Estado Civil</label>
                    <input type="text" { ...register('civil')} />
                </div>
            )}
        </form>
    </div>
  )
}

export default Formulario