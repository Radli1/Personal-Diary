///import {ref, Ref} from "@vue/reactivity";   
import axios from "axios"
import { defineStore } from "@pinia/nuxt"

export const useTitleStore =  defineStore ("useTitlesApi", {
    state:() => ({
      paginatedArray: []
      }),
    
    setup() {
      const rowsPerPage = 20
      const currentPage = 1
      
      async() => {
            try {
            const id = 0;
            const result = await axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            params: {
              id:[(rowsPerPage*currentPage-1),(rowsPerPage*currentPage)]
            }
            }),
            paginatedArray = result.data;
            return paginatedArray; 
            } catch (err) {
            console.log(err);
          }
        },
      
          async () => {
            try {
            const data = await axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts/',
            }),
            numberOfPages = Math.ceil((data.length || 0) / rowsPerPage);
            return numberOfPages;
            } catch {
              console.log(err)
            }
          }
            // return {
            // paginatedArray,
            // numberOfPages, 
            //};
           
      }
      
})
