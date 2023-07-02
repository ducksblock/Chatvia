interface Props {
  name: string;
  image: string;
}

const Avatar = ({ name, image }: Props) => {
  return (
    <a href="#" className="group block flex-shrink-0">
      <div className="flex flex-col items-center">
        <div>
          <img
            className="object-cover inline-block h-9 w-9 rounded-full"
            src={image}
          />
        </div>
        <div className="mt-1 flex flex-col">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {name}
          </p>
          <p className="text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100  group-hover:text-gray-700 duration-200">
            View profile
          </p>
        </div>
      </div>
    </a>
  );
};

export default Avatar;
