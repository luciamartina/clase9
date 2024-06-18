import { useState } from 'react';

const CargarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const nuevoProducto = {
      nombre,
      precio,
      descripcion
    };

    fetch('https://66620bbf63e6a0189fec916a.mockapi.io/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoProducto)
    })
    .then(response => {
      if (response.ok) {
        console.log('Producto agregado correctamente');
        setNombre('');
        setPrecio('');
        setDescripcion('');
        setError('');
      } else {
        console.error('Error al agregar el producto');
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
      <h1 className="text-center" style={{ color: 'rgb(11, 57, 84)', fontSize: '30px' }}>Cargar Productos</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label" style={{ color: 'rgb(11, 57, 84)' }}>Nombre:</label>
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
          <label htmlFor="descripcion" className="form-label" style={{ color: 'rgb(11, 57, 84)', fontSize:"16px" }}>Descripción:</label>
          <textarea 
            className="form-control" 
            id="descripcion" 
            value={descripcion} 
            onChange={(event) => setDescripcion(event.target.value)} 
            required 
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn w-100" style={{ backgroundColor: 'rgb(74, 107, 191)', color: '#fff' , }}>Agregar Producto</button>
      </form>
    </div>
  );
};

export default CargarProducto;