import AppAnimate from "@xebia/core/AppAnimate";
import AppComponentCard from "@xebia/core/AppComponentCard";
import IntlMessages from "@xebia/utility/IntlMessages";
import MyTaskTable from "./myTaskTable/myTaskTable";
const MyTask=()=>{
  return <>
     <AppAnimate animation='transition.slideUpIn' delay={200}>
  <AppComponentCard
                title={<IntlMessages id='tasks.myTasks' />}
                component={MyTaskTable}
                noScrollbar
                description=''
              />
              </AppAnimate>
              </>
}
export default MyTask