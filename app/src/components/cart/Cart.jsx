import ahmed from "../images/Ahmed.png";
import { useState } from "react";

const Cart = () => {
  const [post,setPost] = useState([
    {
      post_id: 1,
      user: {
        user_id: 101,
        name: "Sarah Johnson",
        profile_picture: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
      },
      content: {
        text: "Just watched an amazing sunset!",
        media: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
          },
        ],
      },
      reactions: {
        likes: 120,
        comments: 15,
        shares: 10,
      },
      comments: [
        {
          comment_id: 201,
          user: {
            user_id: 102,
            name: "Mike Ross",
          },
          text: "Looks stunning!",
          reactions: {
            likes: 10,
          },
        },
      ],
      created_at: "2024-09-09T14:20:00Z",
    },
    {
      post_id: 2,
      user: {
        user_id: 103,
        name: "David Williams",
        profile_picture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      },
      content: {
        text: "Morning run completed!",
        media: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1725628426929-ce12123c03db?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
      },
      reactions: {
        likes: 85,
        comments: 20,
        shares: 5,
      },
      comments: [
        {
          comment_id: 202,
          user: {
            user_id: 104,
            name: "Emily Clark",
          },
          text: "Great job!",
          reactions: {
            likes: 7,
          },
        },
      ],
      created_at: "2024-09-08T09:15:00Z",
    },
    {
      post_id: 3,
      user: {
        user_id: 105,
        name: "Olivia Brown",
        profile_picture:`${ahmed}`,
      },
      content: {
        text: "A lovely day spent with family!",
        media: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
          },
        ],
      },
      reactions: {
        likes: 230,
        comments: 35,
        shares: 20,
      },
      comments: [
        {
          comment_id: 203,
          user: {
            user_id: 106,
            name: "Mark Green",
          },
          text: "Family time is the best!",
          reactions: {
            likes: 15,
          },
        },
      ],
      created_at: "2024-09-07T18:30:00Z",
    },
    {
      post_id: 4,
      user: {
        user_id: 107,
        name: "Sophia Garcia",
        profile_picture: `${ahmed}`,
      },
      content: {
        text: "Hiking through the mountains today!",
        media: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
          },
        ],
      },
      reactions: {
        likes: 140,
        comments: 18,
        shares: 12,
      },
      comments: [
        {
          comment_id: 204,
          user: {
            user_id: 108,
            name: "Anna Smith",
          },
          text: "Wow! What a view!",
          reactions: {
            likes: 9,
          },
        },
      ],
      created_at: "2024-09-06T12:10:00Z",
    },
    {
      post_id: 5,
      user: {
        user_id: 109,
        name: "James Evans",
        profile_picture: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
      },
      content: {
        text: "Loving this new book!",
        media: [
          {
            type: "image",
            url: "https://plus.unsplash.com/premium_photo-1724873638050-6643b159fd5e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
      },
      reactions: {
        likes: 95,
        comments: 8,
        shares: 2,
      },
      comments: [
        {
          comment_id: 205,
          user: {
            user_id: 110,
            name: "Lucas Thompson",
          },
          text: "Need to check it out!",
          reactions: {
            likes: 4,
          },
        },
      ],
      created_at: "2024-09-05T14:05:00Z",
    },
    {
      post_id: 6,
      user: {
        user_id: 111,
        name: "Lily Martinez",
        profile_picture: `${ahmed}`,
      },
      content: {
        text: "Can't believe how beautiful this park is!",
        media: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          },
        ],
      },
      reactions: {
        likes: 180,
        comments: 22,
        shares: 9,
      },
      comments: [
        {
          comment_id: 206,
          user: {
            user_id: 112,
            name: "Ella Scott",
          },
          text: "It's gorgeous!",
          reactions: {
            likes: 11,
          },
        },
      ],
      created_at: "2024-09-04T16:25:00Z",
    },
    {
      post_id: 7,
      user: {
        user_id: 113,
        name: "Michael Wilson",
        profile_picture: "https://images.unsplash.com/photo-1530577197743-7adf14294584",
      },
      content: {
        text: "Enjoying some coffee in the morning!",
        media: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1512070679279-8988d32161be",
          },
        ],
      },
      reactions: {
        likes: 65,
        comments: 10,
        shares: 4,
      },
      comments: [
        {
          comment_id: 207,
          user: {
            user_id: 114,
            name: "Grace Harris",
          },
          text: "Looks cozy!",
          reactions: {
            likes: 5,
          },
        },
      ],
      created_at: "2024-09-03T07:50:00Z",
    },
    {
      post_id: 8,
      user: {
        user_id: 115,
        name: "Charlotte Lee",
        profile_picture: `${ahmed}`,
      },
      content: {
        text: "Picnic at the park!",
        media: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
          },
        ],
      },
      reactions: {
        likes: 110,
        comments: 12,
        shares: 6,
      },
      comments: [
        {
          comment_id: 208,
          user: {
            user_id: 116,
            name: "Henry Robinson",
          },
          text: "Such a fun day!",
          reactions: {
            likes: 6,
          },
        },
      ],
      created_at: "2024-09-02T11:30:00Z",
    },
    {
      post_id: 9,
      user: {
        user_id: 117,
        name: "Jackson White",
        profile_picture: `${ahmed}`,
      },
      content: {
        text: "Learning to bake something new!",
        media: [
          {
            type: "image",
            url: "https://plus.unsplash.com/premium_photo-1724695601433-baa720dca28a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
      },
      reactions: {
        likes: 70,
        comments: 7,
        shares: 2,
      },
      comments: [
        {
          comment_id: 209,
          user: {
            user_id: 118,
            name: "Zoe Baker",
          },
          text: "Yum, that looks delicious!",
          reactions: {
            likes: 4,
          },
        },
      ],
      created_at: "2024-09-01T15:45:00Z",
    }]);
   function deletePost(post_id){
    setPost(post.filter((item) => item.post_id !== post_id));
    
   }
  return (
    <>
      {post.length > 0 ? post.map((item) => (
        <div key={item.post_id} className="cart mb-4 bg-white p-3 rounded-md  ">
          <div className="header flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img
                src={item.user.profile_picture}
                className="w-9 rounded-full border-2 border-blue-600 aspect-square "
                alt={item.user.name}
              />
              <h1 className="font-bold text-lg">{item.user.name}</h1>
            </div>
            <div className="flex gap-3">
              <i className="fa-solid fa-ellipsis"></i>
              <i  onClick={()=>{deletePost(item.post_id)}} className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <section className="pt-4 flex flex-col gap-3">
            <p className="text-lg font-serif">{item.content.text}</p>
            {item.content.media.length > 0 && (
              <img
                src={item.content.media[0].url}
                alt="post media"
                className="w-full"
              />
            )}
            <div className="reactions flex justify-between">
              <div className="flex items-center gap-2">
                <span className="Shares">Shares {item.reactions.shares}</span>
                <span className="Comments">Comments {item.reactions.comments}</span>
              </div>
              <div className="flex items-center">
                <span className="Likes">Likes {item.reactions.likes}</span>
                <span>❤</span>
                <span>👍</span>
                <span>😂</span>
              </div>
            </div>
            <div className="react flex justify-evenly">
              <span>Like <i className="fa-regular fa-thumbs-up"></i></span>
              <span>Comment <i className="fa-regular fa-comment"></i></span>
              <span>Send <i className="fa-regular fa-paper-plane"></i></span>
              <span>Share <i className="fa-solid fa-share"></i></span>
            </div>
          </section>
        </div>
      )) : ""}
    </>
  );
};

export default Cart;
