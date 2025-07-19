import CategNavBar from "../components/categNavBar"


export default function ModelsLayout({ children }: { children: React.ReactNode }) {
    
    return (

        <div className="flex">
            <CategNavBar/>
            <div className="flex-1 overflow-auto">
                {children}
            </div>
        </div>
    )
}
