import React, { useState } from 'react'

import { motion } from "framer-motion";

import { MdOutlineSubtitles, MdDelete } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";

import Loader from "./Loader";
import { categories } from '../utils/data';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../firebase.config";
import { getAllFurnitureItems, saveItem } from "../utils/firebaseFunctions";
import { actionType } from './context/reducer';
import { useStateValue } from './context/StateProvider';


const CreateContainer = () => {

  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ furnitureItems }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading!");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully!");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully!");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields must be filled!");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
    
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded successfully!");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading!");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  };

  const fetchData = async () => {
    await getAllFurnitureItems().then(data => {
      dispatch({
        type: actionType.SET_FURNITURE_ITEMS,
        furnitureItems: data,
      })
    })
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-gray-400 rounded-lg p-4 
      flex flex-col items-center justify-center'>
        {
          fields && (
            <motion.p 
            initial={{opacity : 0 }}
            animate={{opacity : 1 }}
            exit={{opacity : 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg 
            ${alertStatus === "danger" ? "bg-red-500 text-red-900" : "bg-emerald-400 text-emerald-800"}`}>
              {msg}
            </motion.p>
          )
        }

        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdOutlineSubtitles className='text-xl text-violet-300'/>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} 
            placeholder="Type title..." className='w-full h-full text-lg bg-transparent outline-none border-none'/>
        </div>

        <div className='w-full'>
          <select onChange={(e) => setCategory(e.target.value)} className="outline-none w-full text-base border-b-2 border-gray-400 p-2 rounded-md cursor-pointer">
            <option value="other" className='"bg-white'>
              Select Category
            </option>
            {categories && 
              categories.map((item) => (
              <option
                key={item.id}
                className="text-base border-0 outline-none bg-white text-gray-600"
                value={item.urlParamName}>
                  {item.name}
              </option>
             ))}
          </select>
        </div>
                <div className='group flex justify-center items-center flex-col
                border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg'>
                  {isLoading ? <Loader /> : <>
                    {!imageAsset ? <>
                      <label className='w-full h-full flex flex-col items-center justify-center'>
                        <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                          <AiOutlineCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                          <p className='text-gray-500 text-3xl'>Click here to upload a picture!</p>
                        </div>
                        <input type="file" name="uploadimage" accept="image/*" 
                        onChange={uploadImage} className="w-0 h-0" />
                      </label>
                    </> : <>
                      <div className='relative h-full'>
                        <img src={imageAsset} alt="uploaded image" className='w-full h-full object-cover' />
                        <button type="button" className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 
                        text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-out'
                        onClick={deleteImage}
                        ><MdDelete className='text-white' />
                        </button>
                      </div>
                    </>}
                  </>}
                </div>
                <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                    <BiDollar className='text-gray-700 text-2xl'/>
                    <input 
                    type="text" 
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}  
                    placeholder="Type price..." 
                    className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400'/>
                </div>

              <div className='flex items-center w-full p-2'>
                <button type='button' className='ml-0 md:ml-auto w-full md:w-auto 
                border-none outline-none bg-violet-300 px-12 py-2 rounded-lg text-lg text-white' 
                onClick={saveDetails}>Save</button>
              </div>  
        </div>
      </div>
  )
}

export default CreateContainer
