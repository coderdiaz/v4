import IOpenSourceItem from "../interfaces/IOpenSourceItem";

interface IOpenSourceItemProps {
  item: IOpenSourceItem;
}

const OpenSourceItem = ({ item }: IOpenSourceItemProps) => {
  return <a href={item.uri} className="px-4 py-2 flex flex-col md:flex-row items-start md:justify-between md:items-center cursor-pointer hover:bg-gray-50 dark-hover:bg-dark-700 rounded mb-2 transition duration-300 ease-in-out">
    <div className="font-semibold inline-block dark:text-gray-200 mb-1 md:mb-0">
      <span className="inline-flex mr-1">{item.icon}</span> {item.name}
    </div>
    <p className="lg:w-125 text-gray-600 dark:text-gray-600">{item.description}</p>
  </a>
};

export default OpenSourceItem;