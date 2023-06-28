import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'
import CardSkeleton from '../Components/CardSkeleton'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentistsState } = useContext(ContextGlobal)

  // console.log(dentists)

  return (
    <>
      <h1>Los Mejores Dentistas</h1>
      <p>a un solo click</p>
      <div className='card-grid'>
        {dentistsState.dentistsList.length === 0 ? (
          <>
            {[...Array(10)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        ) : (
          dentistsState.dentistsList.map(dentist => (
            <Card key={dentist.id} {...dentist} />
          ))
        )}
      </div>
    </>
  )
}

export default Home
