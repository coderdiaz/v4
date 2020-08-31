interface IFigureProps {
  src: string;
  alt: string;
}

const Figure = ({ src, alt }: IFigureProps) => {
  return <figure className="md:-mx-10 lg:-mx-16 relative">
    <img className="w-full h-full object-cover" src={src} alt={alt} />
  </figure>
}

export default Figure;