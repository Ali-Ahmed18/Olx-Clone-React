import React, { useState, useEffect } from "react";
import MyNavbar from "../../components/navbar";
import NavbarCategories from "../../components/NavbarCategories";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch, useSelector } from "react-redux";
import { myAdsAction } from "../../store/slices/myAdsSlice";
import { isActiveAction } from "../../store/slices/isActiveSlice";
import { isDeletedAction } from "../../store/slices/deletePostSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const MyAdds = () => {
  const [searchParams] = useSearchParams();
  const itemActiveAds = searchParams.get('filter');
  const { loading, error, data } = useSelector((state) => state.myAdsSlice);
  const dispatch = useDispatch();
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const userId = authUser?._id;
    if (authUser && userId) {
      dispatch(myAdsAction(userId));
    }
  }, []);

  const uptData = (elem) => {
    let filteredData = ""
    if (data && data.length > 0) {
      if(itemActiveAds == "status_ACTIVE"){
        filteredData = elem.filter((item)=>{
          return item.isActive
        })
      }else if(itemActiveAds == "status_inACTIVE"){
        filteredData = elem.filter((item)=>{
          return !item.isActive
        })
      }else{
          filteredData = elem
      }
      const updatedData = filteredData.map(item => ({
        ...item,
        isMenu: false
      }));
      setMyData(updatedData);
      return updatedData;
    }
  }

 
  useEffect(() => {
    uptData(data);
  }, [data,itemActiveAds]);

  const toggleMenu = (index) => {
    setMyData(prevData => {
      const updatedData = prevData.map((item, idx) => ({
        ...item,
        isMenu: idx === index ? !item.isMenu : false
      }));
      return updatedData;
    });
  };



  const del = ({_id,user_id}) => {
   
    dispatch(isDeletedAction({_id,user_id})); 
  };

  return (
    <>
      <MyNavbar />
      <NavbarCategories />
      <div className="px-[30px] py-[10px] flex flex-col gap-3">
        <p className="text-gray-400">Profile</p>
        <h1 className="font-bold text-lg">Manage and view your Ads</h1>
        <div className="border-[1px] border-black w-[30%] p-[10px] rounded">
          <input type="text" className="border-none focus:outline-none w-[100%]" placeholder="Search by Ad title" />
        </div>
        <div className="flex gap-3">
          <button className={`px-[12px] py-[6px] rounded-full  ${itemActiveAds == null ? "border-blue-400 text-blue-500 font-bold bg-blue-100 border-[2px]" : "border-black border-[1px]"}`}  onClick={()=> navigate("/myads")} >View all ({data.length})</button>
          <button className={`px-[12px] py-[6px] rounded-full ${itemActiveAds == "status_ACTIVE" ? "border-blue-400 text-blue-500 font-bold bg-blue-100 border-[2px]" : "border-[1px] border-black"}`} onClick={() => navigate("?filter=status_ACTIVE")}>{`Active Ads (${data.filter((x) => x.isActive).length})`}</button>
          <button className={`px-[12px] py-[6px] rounded-full ${itemActiveAds == "status_inACTIVE" ? "border-blue-400 text-blue-500 font-bold bg-blue-100 border-[2px]" : "border-[1px] border-black"}`} onClick={()=> navigate("?filter=status_inACTIVE")} >{`InActive Ads (${data.filter((x) => !x.isActive).length})`}</button>
          <button className={`px-[12px] py-[6px] rounded-full border-[1px] border-black`}>Pending ads (0)</button>
          <button className={`px-[12px] py-[6px] rounded-full border-[1px] border-black`}>Moderated ads (0)</button>
        </div>
        <h1 className="text-gray-500">Heavy discounts and packages <span className="text-blue-500"> View packages <ChevronRightIcon /></span></h1>
        {myData.map((x, index) => {
          const { created_on, product_img_url, _id, description, price, isActive, user_id } = x;
          const date = new Date(created_on).toString().split(" ").slice(0, 4).join(" ");
          return (
            <div key={_id} className="flex items-center gap-6 py-4 relative">
              <div className="whitespace-nowrap">From: <span className="font-bold">{date}</span></div>
              <div className="flex items-center gap-4">
                <div className="adsWrapper flex items-center gap-2">
                  <div className="w-[100px]">
                    <img className="w-[100%] object-contain" src={product_img_url[0]} alt="productImg" />
                  </div>
                  <h6 className="font-bold w-[400px] line-clamp-1 overflow-hidden">{description}</h6>
                  <p>Rs {price}</p>
                </div>

                <button className={`rounded-full ${isActive ? "bg-[#23E5DB]" : "bg-gray-600 text-white"} font-bold py-1 px-3 cursor-default`}>{isActive ? "Active" : "InActive"}</button>
                <p>This ad is currently live</p>
              </div>
              <div className="absolute top-0 right-0">
                <div className="relative">
                  <span className="cursor-pointer hover:bg-blue-gray-100 rounded-full w-6 h-6 block" onClick={() => toggleMenu(index)}><MoreHorizIcon /></span>
                  {x.isMenu ? (
                    <ul className="absolute top-6 left-[-76px] bg-gray-100 cursor-pointer">
                      <li className="border text-sm hover:bg-blue-gray-50 text-gray-800 py-1 border-b-black px-2" onClick={() => del({_id,user_id})}>Delete</li>
                      <li className="border text-sm hover:bg-blue-gray-50 border-b-black text-gray-800 py-1 px-2 " onClick={() => { dispatch(isActiveAction({ _id, isActive })); toggleMenu(index) }}>{isActive ? "InActivate" : "Active"}</li>
                      <li className="px-2 text-sm hover:bg-blue-gray-50 py-1 text-gray-800" onClick={()=> navigate(`updatepost?item=${_id}`)}>Update</li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyAdds;
