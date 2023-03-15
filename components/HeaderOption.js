function HeaderOption({Icon,title,selected}) {
    return (
        <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer ${selected && "text-blue-500 border-blue-500"}`} >
            <Icon height={"1rem"} className="headericon"/>
            <p className="hidden sm:inline-flex">{title}</p>

        </div>
    )
}

export default HeaderOption
