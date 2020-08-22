import IShot from "../interfaces/IShot";

interface IShots {
  shots: IShot[];
}

const Shots = ({ shots }: IShots) => {
  return <>
    {shots.map(shot => <article className="relative rounded-lg pb-56 lg:pb-75 border border-gray-100 shadow-md transform lg:hover:-translate-y-1 transition-transform duration-300 overflow-hidden" key={shot.id}>
      <a className="inline-block" href={shot.html_url}>
        <img
          className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"
          src={shot.images.two_x}
          aria-label={shot.title} />
      </a>
    </article>)}
  </>;
}

export default Shots;