
import Sidebar from "../../components/Sidebar";

export default function RootLayout({children}) {
  return (
    <div>
        <h1>This is Profile Header</h1>
        <div className="flex">
          <div>
             <Sidebar />
          </div>
        <div>
         {children}
        </div>
          </div>
        <h1> This is Profile Footer </h1> 
        </div>
  )
}
