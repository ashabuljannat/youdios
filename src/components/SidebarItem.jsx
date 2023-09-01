const SidebarItem = ({
  name,
  icon,
  type,
  selectedCategory,
  setSelectedCategory,
  setSelectedType,
  setSidebar,
}) => {
  return (
    <div
      className={`text-white text-[14px] cursor-pointer h-10 flex items-center px-3 rounded-lg hover:bg-white/[0.15] mb-2 
      ${selectedCategory === name && "bg-white/[0.15]"} 
        `}
      onClick={() => {
        setSelectedCategory(name);
        type !== "menu" && setSelectedType(type);
        setSidebar(false);
      }}
    >
      <span className="text-[16px] mr-5">{icon}</span>
      {name}
    </div>
  );
};

export default SidebarItem;
