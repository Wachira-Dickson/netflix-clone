import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';

const HomeScreen = () => {

  return (
    <>
    <div className='relative h-screen text-white'>
      <Navbar />

      <img src="/kids.png" alt="Hero img" claasName='absolute top-0 left-0 w-full h-full object-cover -z-50'/>

      <div className='absolute top-0 left-0 w-full h-full object-cover bg-black/50 -z-50 '  aria-hidden='true'/>

      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>

        <div className='bg-linear-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10'/>

        <div className='max-w-2xl'>
          <h1 className='mt-4 text-6xl font-extrabold text-balance'>
            Extraction
          </h1>
          <p className='mt-2 text-lg'>
            2014 | 18+
          </p>

          <p className='mt-4 text-lg'>
            Chris Hemsworth stars as Tyler Rake, a fearless black ops mercenary who embarks on a mission 
            to rescue the kidnapped son of an international crime lord. As Rake ventures into the dangerous
             underworld of Dhaka, Bangladesh, he must confront his own demons and fight against overwhelming
          </p>
        </div>

        <div className='flext mt-8'>
          <Link to="/watch/123"
          className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center'>
            <Play className='size-6 mr-2 fill-black'/>
            Play
          </Link>

          <Link to="/watch/123"
          className='bg-gray-500/70 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center'>
            <Info className='size-6 mr-2'/>
            More Info
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeScreen
