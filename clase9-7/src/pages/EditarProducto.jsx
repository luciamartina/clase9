import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditarProducto = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://66620bbf63e6a0189fec916a.mockapi.io/productos/${id}`)
    .then(res => res.json())
    .then(data => {
      setNombre(data.name);
      setPrecio(data.precio);
      setDescripcion(data.descripcion);
      setLoading(false);
    })
    .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = {
      nombre,
      precio,
      descripcion
    };

    fetch(`https://66620bbf63e6a0189fec916a.mockapi.io/productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
    .then(response => {
      if (response.ok) {
        console.log('Producto actualizado correctamente');
        setNombre('');
        setPrecio('');
        setDescripcion('');
      } else {
        console.error('Error al actualizar el producto');
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: "white", padding: '20px', borderRadius: '8px' }}>
      {loading ? (
        <h1 className="text-center" style={{ color: 'rgb(11, 57, 84)' }}>Cargando...</h1>
      ) : (
        <>
          <h1 className="text-center" style={{ color: 'rgb(11, 57, 84)' }}>Editar Producto</h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label" style={{ color: 'rgb(11, 57, 84)'}}>Nombre:</label>
              <input 
                type="text" 
                className="form-control" 
                id="nombre" 
                value={nombre} 
                onChange={(event) => setNombre(event.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label" style={{ color: 'rgb(11, 57, 84)' }}>Precio:</label>
              <input 
                type="number" 
                className="form-control" 
                id="precio" 
                value={precio} 
                onChange={(event) => setPrecio(event.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label" style={{ color: 'rgb(11, 57, 84)'}}>Descripción:</label>
              <textarea 
                className="form-control" 
                id="descripcion" 
                value={descripcion} 
                onChange={(event) => setDescripcion(event.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn w-100" style={{ backgroundColor: 'rgb(74, 107, 191)', color: '#fff' }}>Actualizar Producto</button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditarProducto;


