"use client"

import React, {useState} from 'react'
import Image from 'next/image'
// import createProduct from '../../../service/productService'
import createProductSvg from '../assets/undraw_create_re_57a3.svg'

export const metadata = {
    title: "Add Task : Work Manager"
  }
  
  
const AddTask = () => {

   const [Product, setProduct] = useState({
    productName: "",
    productImg: "",
    price : "",
    description: "",
    status: "",
    categoryId: ""
  });

  const handleCreateProduct =(event)=>{
    event.preventDefault();
    console.log(event.target);

    try {

      const result = createProduct(Product)
      console.log('result', result)

    } catch(error){
      console.log('error', error)

    }
  }

  return (
    <div className=" grid grid-cols-12 justify-center">
      <div className="  col-span-5 col-start-4 shadow-red-600 shadow-lg items-center">
        <div className="w-48 h-56">
          <Image src={createProductSvg} alt=""/>
        </div>
        <h1 className="text-3xl mt-3"> Add Your Product Here </h1>
        
        <form action="#!" onSubmit={handleCreateProduct}>

{/* Product Name */}
          <div className="mt-4">
            <label htmlFor="productName" className="block text-base font-medium mb-2 ">Product Name</label>
            <input type="text" className="w-full p-2.5 rounded text-slate-950 font-medium " id="productName" 
            name="productName" 
            onChange={(event) =>{
              setProduct({
                ...Product,
              productName: event.target.value
              });
            }}
            value={Product.productName}
            />
          </div>

{/* Product Image */}
          <div className="mt-4">
            <label htmlFor="productImg" className="block text-base font-medium mb-2 ">Product Image</label>
            <input type="text" className="w-full p-2.5 rounded text-slate-950 font-medium " id="productImg" 
            name="productImg" 
            onChange={(event) =>{
              setProduct({
                ...Product,
                productImg: event.target.value
              });
            }}
            value={Product.productImg}
            />
          </div>

{/* Product Price  */}
          <div className="mt-4">
            <label htmlFor="price" className="block text-base font-medium mb-2 ">Product Price</label>
            <input type="text" className="w-full p-2.5 rounded text-slate-950 font-medium " id="price" 
            name="price" 
            onChange={(event) =>{
              setProduct({
                ...Product,
                price: event.target.value
              });
            }}
            value={Product.price}
            />
          </div>

{/* description */}
          <div className="mt-4">
            <label htmlFor="description" className="block text-base font-medium mb-2 ">Product Description</label>
            <textarea type="text" className="w-full p-2.5 rounded text-slate-950 font-medium " id="description"
            name="description" 
            onChange={(event) =>{
              setProduct({
                ...Product,
                description: event.target.value
              });
            }}
            value={Product.description}
            />
          </div>

{/* Product Status */}
          <div className="mt-4">
            <label htmlFor="status" className="block text-base font-medium mb-2 ">Product Status</label>
            <select  className="w-full p-2.5 rounded text-slate-950 font-medium " 
            id="status"
            name="status" 
            onChange={(event) =>{
              setProduct({
                ...Product,
                status: event.target.value
              });
            }}
            value={Product.status}
            > 
            <option value="" >
                ---Select Status---
              </option>
            <option value="active">Active</option>
            <option value="inactive">InActive</option>
            </select>
          </div>

{/* Category Id */}
          <div className="mt-4">
            <label htmlFor="categoryId" className="block text-base font-medium mb-2 ">Category Id</label>
            <input type="text" className="w-full p-2.5 rounded text-slate-950 font-medium " id="categoryId" 
            name="categoryId" 
            onChange={(event) =>{
              setProduct({
                ...Product,
                categoryId: event.target.value
              });
            }}
            value={Product.categoryId}
            />
          </div>
          
          {/* Action Button */}
          <div className="mt-4 mb-3 flex justify-center">
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-green-700 "> Create Product</button>
            <button className="bg-red-600 ms-3  py-2 px-3 rounded-lg hover:bg-green-700 "> Clear</button>
          </div>


          {
            JSON.stringify(Product)
          }
        </form>   
    </div> 
    </div>
  )
}

export default AddTask;