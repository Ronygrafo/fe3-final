import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favState } = useContext(ContextGlobal)

  // console.log(favState)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        <div className='card-grid'>
          {favState.length > 0 ? (
            favState.map(dentist => <Card key={dentist.id} {...dentist} />)
          ) : (
            <p>You dont have any favorite dentist.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Favs
