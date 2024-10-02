import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Administrador = () => {
    const [recetas, setRecetas] = useState([]);
    const [nuevaReceta, setNuevaReceta] = useState('');
  
    useEffect(() => {
      const recetasGuardadas = JSON.parse(localStorage.getItem('recetas')) || [];
      setRecetas(recetasGuardadas);
    }, []);
  
    const agregarReceta = () => {
      if (nuevaReceta === '') {
        Swal.fire('Error', 'Debes ingresar una receta', 'error');
        return;
      }
  
      const nuevasRecetas = [...recetas, nuevaReceta];
      setRecetas(nuevasRecetas);
      localStorage.setItem('recetas', JSON.stringify(nuevasRecetas));
      setNuevaReceta('');
      Swal.fire('Éxito', 'Receta agregada correctamente', 'success');
    };
  
    const eliminarReceta = (index) => {
      const nuevasRecetas = recetas.filter((_, i) => i !== index);
      setRecetas(nuevasRecetas);
      localStorage.setItem('recetas', JSON.stringify(nuevasRecetas));
      Swal.fire('Eliminada', 'Receta eliminada correctamente', 'success');
    };
  
    return (
      <div className="container">
        <h1>Administrador de Recetas</h1>
        <input
          type="text"
          className="form-control mb-2"
          value={nuevaReceta}
          onChange={(e) => setNuevaReceta(e.target.value)}
          placeholder="Nueva receta"
        />
        <button className="btn btn-success" onClick={agregarReceta}>Agregar Receta</button>
  
        <ul className="list-group mt-3">
          {recetas.map((receta, index) => (
            <li key={index} className="list-group-item">
              {receta}
              <button className="btn btn-danger float-end" onClick={() => eliminarReceta(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Administrador;
