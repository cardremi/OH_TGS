import React, {useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../Component/CustomButton';
import ProductItem from './ProductItem'
export default function Parent() {

  const [products,setProducts] = useState([])
//   const [name, setName] = useState('John_Wick');
// //   const changeName = (ganti) => {
// //     setName(ganti);
//   }; dimasukkan kedalam
const addCart = (product) =>
{
    const temp = [...products]
    temp.push (product)
    setProducts(temp)
}
useEffect(() => {
    console.log('HAlo haaa')
    return () => {
        console.log('Selamat tinggal Masa laluuuuu .....aku kan melangkah')
    }
}, [])

const dftrProduct= ['Indomie kuah','Mie sedap Goreng cinca','lontong Sachect','Sampo ']


  return (
    <View>
        <Text>{`Jumlah Item Dipilih : ${products.length}`}</Text>
      {
          dftrProduct.map((p,index)=>{
              return (
                  <ProductItem product={p} key={index.toString()} addToCart={addCart}/>
                  
              )
          })
      }
    </View>
  );
}
