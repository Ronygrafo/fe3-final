import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists } = useContext(ContextGlobal)

  // console.log(dentists)

  return (
    <>
      <h1>Los Mejores Dentistas</h1>
      <p>a un solo click</p>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map(dentist => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </>
  )
}

export default Home
