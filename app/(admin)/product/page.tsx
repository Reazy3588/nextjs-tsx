"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "./style.module.css";
import { useState } from 'react';
import { BAS_URL } from '@/lib/constants';

// type ProductPostType = {
//     title: string,
//     price: number,
//     description: string,
//     category: string,
//     image: string , 
// }

const initialValues = {

   title: "",
    price: 0,
    description: "",
    category: "",
    Productimage: "", 
    fileProduct: null,

}

const productPost = {
  title: initialValues.title,
  price: initialValues.price,
  description: initialValues.description,
  category: initialValues.category,
  Productimage: initialValues.Productimage,
}

const FILE_SIZE = 1024 * 1024 * 5 //5MB
const SUPPORT_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/gif",
];


const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  price: Yup.number().positive("Must be positive").required("Price is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  fileProduct: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported format", (value: any) => {
      if (!value) return true;
      return SUPPORT_FORMATS.includes(value.type);
    })
    .test("fileSize", "File Size is too large", (value: any) => {
      if (!value) return true;
      return value.size <= FILE_SIZE;
    }),
});

export default function Product  () { 
const handleUploadFile = async (
  file: File,
  title: string,
  typefile: "category" | "product"
) => {
  const formData = new FormData();
  formData.append("name", title);
  formData.append("image", file);

  const res = await fetch(`${BAS_URL}/upload/${typefile}`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.image;
};

  return (
    <main className={`${styles.container}`}>
    <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={async (values) => {
    
  const productPost = {
    title: values.title,
    price: values.price,
    description: values.description,
    category: values.category,
    image: "https://i.pravatar.cc", // FakeStore needs URL only
  };

  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productPost),
  });

  const data = await res.json();
  console.log("Created:", data);
}}

>

          {({setFieldValue}) => 
          <Form>
          <h1 className={`${styles.title}`}>Create Product</h1>
          {/* Product Name  */}
          <div className='mb-2'>
            <label className='flex flex-col items-center mb-5' htmlFor='productname'>
              Product Name 
            </label>
            <Field
            type = "text"
            name= "title"
            id="title"
            className={`${styles.input}`} ></Field>
            <ErrorMessage
            name="title"
            component="div"
            className={`${styles.error}`}
            />
          </div>
          {/* Description */}
          <div className='mb-2'>
            <label className='flex flex-col items-center mb-5' htmlFor='description'>
              Descrtption 
            </label>
            <Field
            type = "text"
            name= "description"
            id="description"
            component="textarea"
            className={`${styles.input}`} ></Field>
            <ErrorMessage
            name="description"
            component="div"
            className={`${styles.error}`}
            />
          </div>
          {/* Product Price */}
           <div className='mb-2'>
            <label className='flex flex-col items-center mb-5' htmlFor='description'>
              Product Price 
            </label>
            <Field
            type = "number"
            name= "price"
            id="price"
            // component=""
            className={`${styles.input}`} ></Field>
            <ErrorMessage
            name="price"
            component="div"
            className={`${styles.error}`}
            />
          </div>
          {/* Category */}
           <div className='mb-2'>
            <label className='flex flex-col items-center mb-5' htmlFor='category'>
               category
            </label>
            <Field
            type = "text"
            name= "category"
            id="category"
            // component=""
            className={`${styles.input}`} ></Field>
            <ErrorMessage
            name="category"
            component="div"
            className={`${styles.error}`}
            />
          </div>
          {/* Image */}
          <div className='flex flex-col items-center justify-center w-full'> 
              {/* Label */}
              <label className='mb-2 text-center' htmlFor='fileProduct'>
                  Image
              </label>

              {/* File Input Field */}
              <div className="flex justify-center w-full">
                  <Field
                      type="file"
                      name="fileProduct"
                      id="fileProduct"
                      setFieldValue={setFieldValue}
                      component={CustomInput}
                      className={`${styles.input}`} 
                  />
              </div>

              {/* Error Message */}
              <ErrorMessage
                  name="fileProduct"
                  component="div"
                  className={`${styles.error} text-red-500 mt-1`}/>
          </div>
          {/* button */}
          <button type="submit" className={styles.button}>Submit</button>
        </Form>
        }
      </Formik>
    </main>
  )
}

const CustomInput= ({field, form, setFieldValue}: any) => {
const [imagePreview, setImagePreview] = useState('');
  console.log(field)
const handleIploadeFile = (e: any) => {
const file = e.target.files[0];
const localUrl = URL.createObjectURL(file);
console.log(localUrl)
setImagePreview(localUrl);
setFieldValue(field.name, file)
};
  return (
    <div>
      <input onChange={(e) => handleIploadeFile(e)} type='file'/>
      {imagePreview && <img className=' rounded-sm w-26 h-23 ' src={imagePreview} alt='preview'/>}
    </div>
  )
};


