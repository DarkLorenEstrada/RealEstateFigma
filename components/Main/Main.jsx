 
import InputForm from './InputForm'
import Image from 'next/image'

const Main = () => {
  return (
    <div className="flex mt-[92px]" id='main'>
      <div className='flex ml-36 flex-col '>

        <div className="mt-52  relative">
          <h1 className='text-MainH1Size text-sp-gray2 font-semibold' >Need to Rent a House?</h1>
          <p className='mb-7 mt-2 text-spSize2 text-sp-gray2'>We&#39;ll help you find your next home.</p>
        </div>
        <InputForm />
      </div>
      <div className="grid grid-flow-col auto-cols-max gap-5 ml-auto ">

        <div className="relative w-[690px] h-[680px] ml-5 z-0">
          <Image
            src={"/Images/house.webp"}
            alt="house"
            layout='fill'
          />
        </div>
        <div className="relative  place-self-end w-[50px] h-[680px]">
          <Image
            src={"/Images/half-house.webp"}
            alt="house"
            layout='fill'
          />
        </div>

      </div>
    </div>
  )
}

export default Main
