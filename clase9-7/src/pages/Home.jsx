
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductosContext } from '../context/ProductosContext';

const Home = () => {
  const { productos, loading, handleDelete } = useContext(ProductosContext);

  return (
    <div className="container mt-5" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
      {loading ? (
        <h1 className="text-center" style={{ color: 'rgb(11, 57, 84)', fontSize: '24px' }}>Cargando...</h1>
      ) : (
        <>
          <h1 className="text-center" style={{ color: 'rgb(11, 57, 84)', fontSize: '35px' }}>Listado de productos</h1>
          <table className="table table-hover mt-4">
            <thead style={{ backgroundColor: 'rgb(11, 57, 84)', color: '#fff' }}>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Descripción</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <tr key={producto.id}>
                  <td>{producto.name}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.descripcion}</td>
                  <td>
                    <Link to={`/editarProducto/${producto.id}`} className="btn" style={{ backgroundColor: 'rgb(49, 89, 190)', color: '#fff', marginRight: '10px' }}>Editar</Link>
                    <button className="btn" style={{ backgroundColor: 'rgb(20, 56, 28)', color: '#fff' }} onClick={() => handleDelete(producto.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Home;
