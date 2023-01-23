import { ChevronRightIcon } from '@heroicons/react/24/outline'


const SideNav = () => {
    return ( <aside id='sideNav' className="absolute right-0 z-10 w-64" aria-label="Sidebar">
    <div className="h-[90vh] px-3 py-8 overflow-y-auto rounded bg-gray-50">
       <ul className="space-y-2">
          <li>
             <a href="#" className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200">
                <span className="ml-3 font-semibold">New and Featured</span>
                <ChevronRightIcon className="w-5 text-gray-900 "/>

             </a>
          </li>
          <li>
             <a href="#" className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200 s">
                <span className="ml-3 font-semibold">Men</span>
                <ChevronRightIcon className="w-5 text-gray-900 "/>

             </a>
          </li>
          <li>
             <a href="#" className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200 s">
                <span className="ml-3 font-semibold">Women</span>
                <ChevronRightIcon className="w-5 text-gray-900 "/>

             </a>
          </li>
          <li>
             <a href="#" className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200 s">
                <span className="ml-3 font-semibold">Kids</span>
                <ChevronRightIcon className="w-5 text-gray-900 "/>

             </a>
          </li>
          <li>
             <a href="#" className="flex items-center justify-between p-2 text-lg font-normal text-gray-900 rounded-lg hover:bg-gray-200 s">
                <span className="ml-3 font-semibold">Sale</span>
                <ChevronRightIcon className="w-5 text-gray-900 "/>

             </a>
          </li>
 
         
          
      
       </ul>
    </div>
 </aside> );
}
 
export default SideNav;