import React from "react";

function useLocalStorage(itemName, initialValue){
    const [error, seterror] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
  
    React.useEffect(() => {
      setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem(itemName, initialValue)
          parsedItem = []
        }else {
          parsedItem = JSON.parse(localStorageItem)
      
          setItem(parsedItem)
          setLoading(false)
        } 
      } catch(error) {
          seterror(error)
      }
      }, 1000)
    })
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
      } catch(error){
        seterror(error)
      }
    }
  
    return{item, saveItem, loading, error}
  }

  export {useLocalStorage}