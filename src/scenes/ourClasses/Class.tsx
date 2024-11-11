type Props = {
    name: string;
    description?: string;
    image: string;
  };

  const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal  text-center text-white
    opacity-0 transition duration-500 hover:backdrop-brightness-50 hover:backdrop-blur-sm hover:opacity-100`;
    return (
      <li className="relative mx-5 inline-block h-[300px]  w-[450px]">
        <p className='flex items-center text-center justify-center text-zinc-200/20 px-6 '>← <span className='px-6'> → </span></p>
        <div className={overlayStyles}>
          <p className="text-2xl  ">{name}</p>
          <p className="mt-5 backdrop-blur-lg">{description}</p>
        </div>
        <img alt={`${image}`} src={image} />
      </li>
    );
  };

  export default Class;
