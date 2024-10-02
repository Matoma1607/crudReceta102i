import { useParams } from 'react-router-dom';

const DetalleReceta = () => {
    const { id } = useParams();
  const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    return (
        <div className="container">
        <h1>Detalle de la Receta</h1>
        <p>{recetas[id] || 'Receta no encontrada'}</p>
      </div>
    );
};

export default DetalleReceta;