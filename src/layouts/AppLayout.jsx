import SideBar from "../components/ui/SideBar";

/* 
* @info : Props structure
  props = {
    children : ReactElement/s
  }
*/

const AppLayout = (props) => {
  return (
    <div>
      <div className="flex flex-row p-6 h-screen bg-neutral-150">
        {/* Side Nav Bar */}
        <SideBar />
        <div className="w-full">{props.children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
