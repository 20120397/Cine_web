export type showtimeInterface = {
    id: "6480756e0f9d8b1e1ff3818a",
    movie: {
        _id: "6480701eaaa085da98cc8390",
        title: "The Lion King",
        image: "https://res.cloudinary.com/da2qtf6sw/image/upload/v1686488013/poster/d5hdsquwwsa6qhj8b4jl.jpg",
        language: [
            "English"
        ],
        genre: [
            "Animation",
            "Adventure",
            "Drama"
        ],
        director: "Jon Favreau",
        cast: [
            "Donald Glover",
            "Beyoncé Knowles",
            "Chiwetel Ejiofor",
            "James Earl Jones"
        ],
        description: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        duration: 118,
        rating: 6.9,
       
    },
    dateRange: {
        start: "2023-05-24T17:00:00.000Z",
        end: "2023-06-29T17:00:00.000Z"
    },
  
}

export type movieInterface={
        showtimeId: any
        _id: "6480701eaaa085da98cc8390",
        title: "The Lion King",
        image: "https://res.cloudinary.com/da2qtf6sw/image/upload/v1686488013/poster/d5hdsquwwsa6qhj8b4jl.jpg",
        language: [
            "English"
        ],
        genre: [
            "Animation",
            "Adventure",
            "Drama"
        ],
        director: "Jon Favreau",
        cast: [
            "Donald Glover",
            "Beyoncé Knowles",
            "Chiwetel Ejiofor",
            "James Earl Jones"
        ],
        description: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        duration: 118,
        rating: 6.9,
    
}

export type reservationInterface ={

        reservation: {
            _id: "648a17a5dbe06d9af9b643e5",
            userId: "64897c9ee4fcfe09c32ead48",
            showtimeId: "6489ec98ba4769263484ac62",
            seats: [
                "648a165ddbe06d9af9b643de",
                "648a165ddbe06d9af9b643e0"
            ],
            totalPrice: 100,
            status: "Booked",
            expirationTime: "2023-06-14T19:50:21.071Z",
            createdAt: "2023-06-14T19:40:21.072Z",
            updatedAt: "2023-06-14T19:42:15.887Z",
      
        },
        tickets: [
            {
                movieTitle: "Joker",
                date: "2023-06-15T00:00:00.000Z",
                time: "14:00",
                seatPosition: "B3",
                theatre: "Happy Us Theatre Quận 1"
            },
            {
                movieTitle: "Joker",
                date: "2023-06-15T00:00:00.000Z",
                time: "14:00",
                seatPosition: "B4",
                theatre: "Happy Us Theatre Quận 1"
            }
        ]

}