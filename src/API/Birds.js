const Birds = [
    {
        id: "1",
        name: "African Grey Parrot",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FAfrican-Grey-Parrot%2Fimage1.jpg?alt=media&token=a328f306-82e6-4c02-be2a-c6e3ab4507c3',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FAfrican-Grey-Parrot%2Fimage2.jpg?alt=media&token=5aab580c-d2cb-472b-a992-3be168f6cc4e',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FAfrican-Grey-Parrot%2Fimage3.jpg?alt=media&token=a207843f-2f6d-4387-8af8-b6a12a9fd244',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FAfrican-Grey-Parrot%2FVideo1.mp4?alt=media&token=c28cbaba-7ec4-4a77-8c04-0ee3882b4570',
        age: "3 Months",
        lifeExpectancy: "40 - 60 Years",
        gender: "Male",
        genderIcon: "ios-male",
        description: "The African Grey Parrot, known for its exceptional intelligence and captivating beauty, is a true marvel of the avian world. With its elegant form and striking plumage, it is a creature that embodies both grace and charm.",
        price: "6000"
    },
    {
        id: "2",
        name: "Amazon Parrot",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FAmazon-Parrot%2Fimage1.jpg?alt=media&token=5c2c7bb4-58c6-417f-9f1e-3804bc96c7f3',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FAmazon-Parrot%2Fimage2.jpg?alt=media&token=4b51fb02-cf63-4f1d-b6f4-d6c07212e981',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FAmazon-Parrot%2Fimage3.jpg?alt=media&token=bd151267-89e7-4a69-b07d-452014b535b5',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FAmazon-Parrot%2FVideo1.mp4?alt=media&token=ec9656a9-a2aa-4d8a-9972-d2f6c9d11e51',
        age: "5 Months",
        lifeExpectancy: "40 - 60 Years",
        gender: "Female",
        genderIcon: "ios-female",
        description: "The Amazon Parrot, also known as the Yellow-headed Amazon, is a charming and intelligent bird that captures the hearts of bird enthusiasts around the world. With its vibrant plumage and playful personality, it brings joy and companionship to those who have the pleasure of keeping it as a pet.",
        price: "6500"
    },
    {
        id: "3",
        name: "Budgerigar",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FBudgerigar%2Fimage1.jpg?alt=media&token=36a193d2-b685-4cd1-a5bb-0e78c61794a7',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FBudgerigar%2Fimage2.jpg?alt=media&token=cdcf1241-3fb5-46d4-99bf-18dfde19c587',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FBudgerigar%2Fimage3.jpg?alt=media&token=24435e78-a8d5-46cd-ab89-425fe631f4ec',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FBudgerigar%2FVideo1.mp4?alt=media&token=5f23cfca-756c-4027-a2dc-fe12a131a420',
        age: "5 Months",
        lifeExpectancy: "7 - 15 Years",
        gender: "Female",
        genderIcon: "ios-female",
        description: "The Budgerigar, commonly known as the Budgie or Parakeet, is a small and colorful bird that has captured the hearts of bird lovers worldwide. With its cheerful personality and beautiful plumage, the Budgerigar has become one of the most popular pet birds.",
        price: "8000"
    },
    {
        id: "4",
        name: "Cockatiel",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FCockatiel%2Fimage1.jpg?alt=media&token=deac742a-53eb-4db7-82b9-87fe69cbdead',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FCockatiel%2Fimage2.jpg?alt=media&token=c670e8cd-318f-4eb2-8c90-486ed41b57da',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FCockatiel%2Fimage3.jpg?alt=media&token=bac6af21-376b-4df2-926a-fc155adbd65a',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FCockatiel%2FVideo1.mp4?alt=media&token=b442c583-e1f9-45d9-ac7d-d42a30211757',
        gender: "Female",
        age: "6 Months",
        lifeExpectancy: "40 - 60 Years",
        Budgerigar: "16 - 25 Years",
        genderIcon: "ios-female",
        description: "The Cockatiel is a popular pet bird known for its charming personality, striking appearance, and unique crest on its head. Native to Australia, these small parrots have captured the hearts of bird enthusiasts with their playful nature and ability to form strong bonds with their human companions.",
        price: "10000"
    },
    {
        id: "5",
        name: "Cockatoo",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FCockatoo%2Fimage1.jpg?alt=media&token=bb8daf93-0cf4-4d10-b4e4-ff81ebf0effd',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FCockatoo%2Fimage2.jpg?alt=media&token=5b5ac9f5-606d-4a74-81fb-4b33969a3e72',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FCockatoo%2Fimage3.jpg?alt=media&token=efec1aaa-07af-428e-b533-248156676d9f',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FCockatoo%2FVideo1.mp4?alt=media&token=2c061f16-dd74-4db1-a29c-7c2ddb593c6c',
        gender: "Male",
        age: "1 Year",
        lifeExpectancy: "40 - 60 Years",
        genderIcon: "ios-male",
        description: "The Cockatoo is a majestic and highly intelligent bird known for its striking appearance, charismatic personality, and impressive crest of feathers on its head. These large parrots are native to various regions around the world, including Australia, Indonesia, and the Philippines.",
        price: "14000"
    },
    {
        id: "6",
        name: "Conure",
        image1: 'https://storage.googleapis.com/awesomebirds-e54c0.appspot.com/BirdsImages/Conure/image1.jpg?GoogleAccessId=service-860547902332@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1688631791&Signature=VMZG0p2U1LDRn5jRXH5h2m%2BuYOa7cN%2Bmu%2Bb6%2BX/8D3nCR8ZIjU57YDtZBaZcYK5Pe0W3rwr3zM/c%2BKhdOUfnWXe4ZmpldlbnQDWs5px61lU7IqgLVA70hb6WfsOaG9ZyBBGCvIHwzfLSzJ52trYUig1tEYoozENRkcTkXOVzbPTaG0tCeKCz1uCoVfVbpdWp8%2ByIADaQX963mqE11UZgUx0qLNujz2/HTtj0sfTlb7ymrRp2PNe5arqFDXAv/uEcMsSyeEzRXVdyNzNl6x5LvYMbEb%2BNI3SX3M/MScT%2B%2By7j6a7Argt9ERbH8cxzVkckBXAaEXNGlQMvCvQUIUaDTA%3D%3D',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FConure%2Fimage2.jpg?alt=media&token=cb12ad40-c956-4140-bbfe-0bf026c15851',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FConure%2Fimage3.jpg?alt=media&token=1e5598c8-d8b0-449c-8a99-ae5055b5d473',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FConure%2FVideo1.mp4?alt=media&token=5afd9319-67be-4d42-a6ab-ef818b677a33',
        gender: "Male",
        age: "8 Months",
        lifeExpectancy: "20 - 30 Years",
        genderIcon: "ios-male",
        description: "The Conure is a small to medium-sized parrot known for its vibrant colors, lively personality, and playful nature. These delightful birds are native to Central and South America and belong to the family of New World parrots.",
        price: "14000"
    },
    {
        id: "7",
        name: "Eclectus Parrot",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FEclectus-Parrot%2Fimage1.jpg?alt=media&token=9c27a1e9-b648-4cbe-878d-a1be04fd5db9',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FEclectus-Parrot%2Fimage2.jpg?alt=media&token=a660c4bc-3ea5-42f8-baa0-3c42072b83bc',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FEclectus-Parrot%2Fimage3.jpg?alt=media&token=3934410b-9ac9-4f87-9ba7-351f957a86ed',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FEclectus-Parrot%2FVideo1.mp4?alt=media&token=b80816ef-b3f4-4fd0-b0cd-3249d0502722',
        gender: "Male",
        age: "1.4 Years",
        lifeExpectancy: "20 - 30 Years",
        genderIcon: "ios-male",
        description: "The Eclectus Parrot is a striking and unique species known for its stunning appearance and distinct sexual dimorphism. Native to the rainforests of Papua New Guinea, Indonesia, and the Solomon Islands, the Eclectus Parrot is highly sought after as a pet bird for its beauty and charming personality.",
        price: "14000"
    },
    {
        id: "8",
        name: "Lovebirds",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FLovebirds%2Fimage1.jpg?alt=media&token=64fc342f-9c59-4f9c-8e39-1c362b5baeed',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FLovebirds%2Fimage2.jpg?alt=media&token=14ed2d60-c552-426b-8183-0cb42f70ce41',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FLovebirds%2Fimage3.jpg?alt=media&token=5b2c6265-d037-4552-a6d4-b2e1c3325ad8',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FLovebirds%2FVideo1.mp4?alt=media&token=ec3c4225-6a60-445a-a968-618c885f8773',
        gender: "Female",
        age: "2 Months",
        lifeExpectancy: "10 - 12 Years",
        genderIcon: "ios-female",
        description: "Lovebirds are small, colorful parrots that have stolen the hearts of bird enthusiasts worldwide with their affectionate nature and charming personalities. These delightful birds are known for their strong pair bonding and their loving interactions with their mates, earning them the name Lovebirds.",
        price: "14000"
    },
    {
        id: "9",
        name: "Macaw",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FMacaw%2Fimage1.jpg?alt=media&token=cd608b3b-61dd-4384-bb7f-bd96b234fd4f',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FMacaw%2Fimage2.jpg?alt=media&token=e35ebc1d-be78-4ee0-af03-040e3ee98e4b',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FMacaw%2Fimage3.jpg?alt=media&token=5adab701-1153-43e7-8678-88d0dc5effb2',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FMacaw%2FVideo1.mp4?alt=media&token=7044d5e8-9f6b-40d4-b844-5b5af57aade6',
        gender: "Male",
        age: "9 Months",
        lifeExpectancy: "30 - 50 Years",
        genderIcon: "ios-male",
        description: "The Macaw is a majestic and colorful species of parrot that captivates the hearts of bird enthusiasts worldwide. With their vibrant plumage, impressive size, and charismatic personalities, Macaws are often considered the epitome of exotic birds.",
        price: "14000"
    },
    {
        id: "10",
        name: "Parakeet",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FParakeet%2Fimage1.jpg?alt=media&token=be7b5f37-7038-45ce-ab81-bc3c132cacb8',
        image2: 'https://storage.googleapis.com/awesomebirds-e54c0.appspot.com/BirdsImages/Parakeet/image2.jpg?GoogleAccessId=service-860547902332@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1688632549&Signature=Q7xpOv5uPjlKNdUoT%2BwtJhLSciqPHLHEBvvlL7UsxXQL7AFmehqaglSvvZhmmSGn1MpkzTdUOd9bH1RDFi9WRI7Xt4FZkY6k8QN5iN%2BAFdzAT7QbxHWCfEYI2VJ8jLVDeOx%2BjXXogu%2BdiL0hbDowdPZFwhVQKLj7Ip0U8GHr/EbfX7rysPAuYVa1z1gTo8zr9NkzOkv88G37kT5e4l5gRyQ8vpmo/rICKDScZmOUab8OiXkT9brvKxQpVh06G%2BXqejcuLtlZ/ZbEz/IQr4QkKGe1PyiTk2OY3xF8v5jRHrZvLrXlIX8AaBO8S/BLX543GP2iwqIAM4AA/WeBrUtSow%3D%3D',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FParakeet%2Fimage3.jpg?alt=media&token=6a7824f5-2bd5-436b-936c-63c8a5756d92',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FParakeet%2FVideo1.mp4?alt=media&token=00d6096e-528d-4e01-83c9-d1b0db270208',
        gender: "Female",
        age: "1 Month",
        lifeExpectancy: "7 - 15 Years",
        genderIcon: "ios-female",
        description: "Parakeets, also known as budgerigars or budgies, are small and charismatic parrots that have captured the hearts of bird enthusiasts around the world. These colorful and intelligent birds are popular pets due to their playful nature, ability to mimic sounds, and their relatively low-maintenance care requirements.",
        price: "14000"
    },
    {
        id: "11",
        name: "Quaker Parrot",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FQuaker-Parrot%2Fimage1.jpg?alt=media&token=93a0bcad-1000-48d9-ace9-daee9e77e18d',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FQuaker-Parrot%2Fimage2.webp?alt=media&token=81f81121-4ea0-4e09-98a3-f20456722eab',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FQuaker-Parrot%2Fimage3.jpg?alt=media&token=eb460baa-81e2-4a0c-81a7-1b5213f7f7df',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FQuaker-Parrot%2FVideo1.mp4?alt=media&token=6c82cd8a-e0b1-4c43-882f-73441da6649a',
        gender: "Male",
        age: "3 Months",
        lifeExpectancy: "20 - 30 Years",
        genderIcon: "ios-male",
        description: "Quaker Parrots, also known as Monk Parakeets or Quaker Parakeets, are charismatic and highly intelligent birds that have gained popularity as pets. Native to South America, particularly Argentina and Brazil, Quaker Parrots have distinctive features and captivating personalities that make them fascinating companions.",
        price: "14000"
    },
    {
        id: "12",
        name: "Quaker Parrot",
        image1: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FQuaker-Parrot%2Fimage1.jpg?alt=media&token=93a0bcad-1000-48d9-ace9-daee9e77e18d',
        image2: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FQuaker-Parrot%2Fimage2.webp?alt=media&token=81f81121-4ea0-4e09-98a3-f20456722eab',
        image3: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FQuaker-Parrot%2Fimage3.jpg?alt=media&token=eb460baa-81e2-4a0c-81a7-1b5213f7f7df',
        video: 'https://firebasestorage.googleapis.com/v0/b/awesomebirds-e54c0.appspot.com/o/BirdsImages%2FQuaker-Parrot%2FVideo1.mp4?alt=media&token=6c82cd8a-e0b1-4c43-882f-73441da6649a',
        gender: "Male",
        age: "3 Months",
        lifeExpectancy: "20 - 30 Years",
        genderIcon: "ios-male",
        description: "Quaker Parrots, also known as Monk Parakeets or Quaker Parakeets, are charismatic and highly intelligent birds that have gained popularity as pets. Native to South America, particularly Argentina and Brazil, Quaker Parrots have distinctive features and captivating personalities that make them fascinating companions.",
        price: "14000"
    },
]
  

export default Birds