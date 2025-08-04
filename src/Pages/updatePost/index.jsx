import "./style.css"
import { pic10 } from "../../assets/images"
import addpic from "../../assets/addpic.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import uploadImage from "../../Services/uploadImg";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { singlePostAction } from "../../store/slices/singlePostSlice.js";
import BACKEND_URI from "../../../public/backend/uri.js"
import { updatePostAction } from "../../store/slices/updatePostSlice.js";




function UpdatePost() {
    const [searchParams] = useSearchParams();
    const itemActiveAds = searchParams.get('item');
    const [userData, setUserData] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const dispatch = useDispatch()
    const { _id } = JSON.parse(localStorage.getItem("authUser"))
    const navigate = useNavigate()
    const { data,loading, error } = useSelector((state) => state.singlePostSlice);
    const { updateData,updateLoading, updateError } = useSelector((state) => state.updatePostSlice);

    useEffect(() => {
        if (!itemActiveAds || error) {
            
            navigate("/404Page")
        } else {

            dispatch(singlePostAction({ id: itemActiveAds, userId: _id }))
        }
    }, [error])

    const imageHandler = (elem, index) => {
        if (elem == undefined) {
            return
        }
        const checkImg = elem.type.split("/")[0]
        if (checkImg !== "image") {
            index == 0 ? setImage1(false) : setImage2(false)
            return
        } else {
            const reader = new FileReader();
            if (index == 0) {
                setImage1(elem)

                reader.onloadend = () => {
                    setImage1(reader.result);
                };
                reader.readAsDataURL(elem);
            } else {
                setImage2(elem)

                reader.onloadend = () => {
                    setImage2(reader.result);
                };
                reader.readAsDataURL(elem);
            }
        }
    }


    const title = useRef()
    const description = useRef()
    const price = useRef()
    const brand = useRef()
    const condition = useRef()
    const location = useRef()
    const phoneNo = useRef()
    const imageObj1 = useRef()
    const imageObj2 = useRef()

    const updateHandler = async (e) => {
        e.preventDefault()
        try {

            if (image1 == false || image2 == false) {
                alert("select valid image")
                setIsLoading(false)
                return
            }
            if (
                !title.current.value ||
                !description.current.value ||
                !price.current.value ||
                !brand.current.value ||
                !condition.current.value ||
                !location.current.value ||
                !phoneNo.current.value
            ) {
                alert("required fields are missing!")
                return
            }

            if ((!imageObj1.current.files[0] || !image1) && (!imageObj2.current.files[0] || !image2)) {
                alert("give at least one picture of product")
                return
            }
            console.log(title,
                description,
                price,
                brand,
                condition,
                location,
                phoneNo);
            const objToSend = {
                title: title.current.value,
                description: description.current.value,
                price: price.current.value,
                brand: brand.current.value,
                condition: condition.current.value,
                location: location.current.value,
                phoneNo: phoneNo.current.value,
            }

            if ((imageObj1.current.files[0] || image1) && (imageObj2.current.files[0] || image2)) {

                const imageUrl1 = await uploadImage(imageObj1.current.files[0])
                const imageUrl2 = await uploadImage(imageObj2.current.files[0])
                objToSend.productImgUrl = [imageUrl1, imageUrl2]

            } else if (imageObj2.current.files[0] || image2) {

                const imageUrl = await uploadImage(imageObj2.current.files[0])
                objToSend.productImgUrl = [imageUrl]
            } else if (imageObj1.current.files[0] || image1) {

                const imageUrl = await uploadImage(imageObj1.current.files[0])
                objToSend.productImgUrl = [imageUrl]

            }
          console.log(objToSend);
            // dispatch(updatePostAction({id: itemActiveAds, formData : objToSend}))
            setImage1(null)
            setImage2(null)
            title.current.value = ""
            description.current.value = ""
            price.current.value = ""
            brand.current.value = ""
            condition.current.value = ""
            location.current.value = ""
            phoneNo.current.value = ""
            imageObj1.current.value = null
            imageObj2.current.value = null

        } catch (err) {
            console.log(err.message);
            setIsLoading(false)
        }


    }


    return (
        <>
            {loading ? <div className='flex justify-center items-center h-[100vh]'>< CircularProgress size={"100px"}/></div>
             : 
             (<>
            <nav className='navv bg-light'>
                <div className="topnav">
                    <Link to={"/"}>
                        <ArrowBackIcon />
                    </Link>
                    <div>
                        <img src={pic10} width="40px" alt="" />
                    </div>
                </div>
            </nav>
                <p className="text-center mt-3 font-bold text text-gray-900">UPDATE YOUR AD</p>
                <form onSubmit={updateHandler} className="border-[1px] w-[80%] m-auto rounded border-gray-500 mt-3">
                    <div className="p-[10px] border-gray-500 border-b-[1px]">
                        <h1 className="font-bold text-gray-900">WHAT TYPE CATEGORY</h1>
                        <p className="text-sm">Sell / Products</p>
                    </div>
                    <div className="border-gray-500 border-b-[1px] p-[20px] font-bold flex flex-col gap-5">
                        <h1 className="text-gray-900">UPDATE SOME DETAILS</h1>
                        <div>
                            <p className="text-xs font-thin">Update title</p>
                            <input ref={title} defaultValue={data?.title} type="text" className="w-[100%] border-black font-thin border-[1px] rounded p-[10px] focus: outline-none" />
                            <p className="font-thin text-xs">Mention the key features of your item (e.g. brand, model, age, type)</p>
                        </div>
                        <div>
                            <p className="text-xs font-thin">Description</p>
                            <textarea ref={description} defaultValue={data?.description} name="Description" className=" border-black border-[1px] rounded resize-none w-[100%] h-[130px] font-thin focus: outline-none p-[10px]"></textarea>
                            <p className="font-thin text-xs">Mention the key features of your item (e.g. brand, model, age, type)</p>
                        </div>
                        <div>
                            <p className="text-xs font-thin">Brand</p>
                            <input ref={brand} defaultValue={data?.brand} type="text" className="w-[100%] border-black font-thin border-[1px] rounded p-[10px] focus: outline-none" />
                            <p className="font-thin text-xs">Mention the key features of your item (e.g. brand, model, age, type)</p>
                        </div>
                        <div>
                            <p className="text-xs font-thin">Condition</p>
                            <select ref={condition} defaultValue={data?.condition} className="w-[100%] border-black font-thin border-[1px] rounded p-[10px] focus:outline-none text-xs">
                                <option className="font-thin text-xs" value="" disabled>Product Condition</option>
                                <option className="font-thin text-xs" value="New">New</option>
                                <option className="font-thin text-xs" value="Open box">Open box</option>
                                <option className="font-thin text-xs" value="Used">Used</option>
                                <option className="font-thin text-xs" value="Refurbished">Refurbished</option>
                                <option className="font-thin text-xs" value="For Parts or Not Working">For Parts or Not Working</option>
                            </select>
                            <p className="font-thin text-xs">Mention the key features of your item (e.g. brand, model, age, type)</p>
                        </div>
                    </div>
                    <div className="pt-[10px] pl-[20px] pb-[15px] pr-[20px] border-gray-500 border-b-[1px] flex flex-col gap-3">
                        <h1 className="text-gray-900 font-bold">SET A PRICE</h1>
                        <div>
                            <p className="text-xs font-thin">Price</p>
                            <div className=" border-black w-[100%] rounded border-[1px] p-[10px] flex gap-3 justify-center items-center">
                                <span className="p-[5px] border-r-[1px] border-black font-thin text-xs h-[18px] flex justify-center items-center">Rs</span>
                                <input ref={price} defaultValue={data?.price} type="number" className="w-[95%] font-thin border-none focus: outline-none " />
                            </div>
                        </div>
                    </div>
                    <div className="pt-[10px] pl-[20px] pb-[20px] border-gray-500 border-b-[1px] flex flex-col gap-5 ">
                        <h1>UPLOAD UP 2 PHOTOS</h1>

                        <div>
                            <div className="flex">
                                <label className="w-[13%]">
                                    <input type="file" ref={imageObj1} accept="image/*" onChange={(e) => imageHandler(e.target.files[0], 0)} className="hidden " />
                                    <div className={`w-[98%] p-[5px] h-[80px] ${image1 !== false ? "border-gray-700" : "border-red-700"}  border-[2px] flex justify-center`}>
                                        <div className="w-[50%]  flex items-center justify-center">
                                            <img src={image1 ? image1 : data?.product_img_url[0]} alt="" />
                                        </div>
                                    </div>
                                </label>
                                <label className="w-[13%]">
                                    <input ref={imageObj2} type="file" accept="image/*" onChange={(e) => imageHandler(e.target.files[0], 1)} className="hidden" />
                                    <div className={`w-[98%] p-[5px] h-[80px] ${image2 !== false ? "border-gray-700" : "border-red-700"}  border-[2px] flex justify-center`}>
                                        <div className="w-[50%] flex items-center justify-center">
                                            <img src={image2 ? image2 : data?.product_img_url[1] ? data?.product_img_url[1] :addpic} alt="" />
                                        </div>
                                    </div>
                                </label>

                            </div>


                            <p className="font-thin text-xs mt-[5px]">For the cover picture we recommend using the landscape mode.</p>
                        </div>
                    </div>
                    <div className="pt-[10px] pl-[20px] pr-[20px] border-gray-500 border-b-[1px] pb-[20px] flex flex-col gap-5 ">
                        <h1 className="text-gray-900 font-bold">YOUR AD'S LOCATION</h1>
                        <div>
                            <p className="text-xs font-thin">Loaction</p>
                            <input ref={location} defaultValue={data?.location} type="text" className="w-[100%] border-black font-thin border-[1px] rounded p-[10px] focus: outline-none" />
                        </div>
                    </div>
                    <div className="pt-[10px] pl-[20px] pr-[20px] pb-[20px] border-gray-500 border-b-[1px] flex flex-col gap-5 ">

                        <div>
                            <p className="text-xs font-thin">Mobile Phone Number</p>
                            <div className=" border-black w-[100%] rounded border-[1px] p-[10px] flex gap-3 justify-center items-center">
                                <span className="p-[5px] border-r-[1px] border-black font-thin text-xs h-[18px] flex justify-center items-center">+92</span>
                                <input ref={phoneNo} defaultValue={data?.phone_no} type="number" className="w-[95%] font-thin border-none focus: outline-none " placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div className="p-[20px]">
                        <button disabled={updateLoading} className={`${updateLoading ? "cursor-not-allowed" : "cursor-pointer"} flex pt-[5px] pb-[5px] pr-[15px] pl-[15px] bg-green-800 rounded text-white font-bold`}>{updateLoading ? <CircularProgress size={"1.5rem"} sx={{ color: "#fff" }} /> : "Update now"}</button>
                    </div>

                </form>
                </>)}
        </>
    )
}

export default UpdatePost
