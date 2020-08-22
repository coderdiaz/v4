import classNames from 'classnames';
import IOpenSourceItem from "../interfaces/IOpenSourceItem";

interface IOpenSourceItemProps {
  item: IOpenSourceItem;
}

const OpenSourceItem = ({ item }: IOpenSourceItemProps) => {
  const badgeClasses = classNames(
    'w-3 h-3 rounded-full mr-2',
    item.tech.color,
  );

  return <a href={item.uri} className="px-4 py-2 grid lg:grid-cols-12 gap-1 lg:gap-0 items-center cursor-pointer hover:bg-gray-50 rounded mb-2 transition duration-300 ease-in-out">
    <div className="lg:col-span-3 font-semibold inline-block md:mb-0">
      <span className="inline-flex mr-1">{item.icon}</span> {item.name}
    </div>
    <p className="lg:col-span-7 text-gray-600">{item.description}</p>
    <div className="hidden lg:col-span-2 lg:flex items-center justify-start">
      <div className={badgeClasses} />
      <span className="inline-flex text-base text-gray-600">{item.tech.name}</span>
    </div>
  </a>
};

export default OpenSourceItem;