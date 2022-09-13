import Image from "next/image";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-1 p-3 hover:bg-gray-200
    rounded-xl cursor-pointer">
        {src && (
            <Image 
                className="rounded-full"
                src={src}
                width={30}
                height={30}
                layout="fixed"
            />
        )}
        {Icon && (
            <Icon className="h-6 w-6 text-blue-500" />
        )}
        <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}

export default SidebarRow