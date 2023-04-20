import React,{useContext,useState,useEffect} from "react";
const dataContext=React.createContext();
export function StateProvider({children}){
    const [data, setData] = useState("");
  const [lineData,setLinedata]=useState('');

  useEffect(() => {
    fetch(
      `https://script.google.com/macros/s/AKfycby_IJz3HIiTiFnlWLPENQd_3I-N454Wo5GW57CI9L79lvRWlU9ZkuAtWqOsNizCzqSW/exec`
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  useEffect(() => {
    fetch(
      `https://sandeepmallina.github.io/mockdata/data.json`
    )
      .then((response) => response.json())
      .then((json) => setLinedata(json));
  }, []);

function getTotalRevenue(){
if(data)
{
  return (Math.floor((data?.data).reduce((prev, curr) => prev + curr.sales, 0))).toLocaleString();

}
else{
  return 0;
}

}
function getTotalTransaction(){
  if(data)
{
  const Ids = (data?.data).map(id => id.order_id);
const uniqueIds = [...new Set(Ids)];
const uniqueIdsCount = uniqueIds.length;
return uniqueIdsCount.toLocaleString();
}
else{
  return 0;
}
  
}
function getAllSubCategories(){
  if(data)
{
  const Items = (data?.data).map(item => item.subcatgories);
const uniqueItems= [...new Set(Items)];
const uniqueItemsCount = uniqueItems.length;
return (uniqueItemsCount*290).toLocaleString();
}
else{
  return 0;
}
  
}
function getCountOfUsers(){
  if(data)
{
  const Names = (data?.data).map(id => id.customer_name);
const uniqueNames = [...new Set(Names)];
const uniqueNamesCount = uniqueNames.length;
return (uniqueNamesCount).toLocaleString();
}
else{
  return 0;
}
  
}

    return (
        <dataContext.Provider value={{getTotalRevenue,getTotalTransaction,getAllSubCategories,getCountOfUsers,lineData}}>
          {children}
        </dataContext.Provider>
      )
}
export const useDataStateValue=()=>useContext(dataContext)
