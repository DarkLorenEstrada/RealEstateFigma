import Image from 'next/image'

const ImageHolder = ({src,firstText,secondText}) => {
    return (
        <>
            <Image
                src={src}
                alt='nature'
                layout='fill'
            />
            <div className='relative mt-auto top-[50px]'>
                <p className='text-sm md:text-base xl:text-spSize2 text-black z-10'>{firstText}</p>
                <p className='text-[8px] sm:text-xs xl:text-sm text-black z-10'>{secondText}</p>
            </div>
        </>
    );
};

export default ImageHolder;