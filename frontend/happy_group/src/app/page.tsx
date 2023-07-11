"use client"
import Banner from '@/components/Banner/Banner'
import Nowshowing from '@/components/Nowshowing/Nowshowing'
import Upcoming from '@/components/Upcoming/Upcoming'
import { useEffect } from 'react'
// import { useRouter } from 'next/router'



import AdminAPI from "@/app/api/test"
import Filmcomment from '@/components/filmcomment/filmcomment'
import { useState } from 'react'

type movieInterface = {
    _id: string,
    duration: number,
    title: string,
    image: string,
    language: [],
    genre : [],
    director: string,
    cast : [],
    // releaseDate: string,
    rating: number,
    description: string,
}

export default function Home() {

//    const [movies, setMovies] =useState([]);
//     const fetchMovies = async  () => {
//         const res=await movieAPI.getAllMovies();
//         setMovies(res.data);
        
 
//     }
//     useEffect(()=> {
//         fetchMovies();
//     },[])
//     console.log("moviesss: ",movies)
    const [movie, setMovie] =useState([]);
    const fetchMovie = async  () => {
        const res=await AdminAPI.getAllShowtime();
        // const res1 = await AdminAPI.getAllShowtime("644e1fcf4fed9fdaf2ff74a5")
        // console.log("show time specific: ", res1.data)
        console.log("showtime: ",res.data)
        // console.log("movie: ",typeof(res.data))
    }
    useEffect(()=> {
        fetchMovie();
    },[])
   

  return (
      <>

      <Banner/>
      <Nowshowing/>
      <Upcoming/>
      <Filmcomment/>
      {/* <Idfilm/> */}
      </>
  
  

  )
}
