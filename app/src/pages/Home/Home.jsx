import './Home.css'
import AsideRight from "../aside-left/Aside.right"
import AsideLeft from "../Aside.right/Aside"
import Post from "../posts/Post"

const Home = () => {
  return (
    <div className=" h-screen grid grid-cols-12  ">
        <aside className="hidden md:flex md:col-span-2 bg-white">
           <AsideLeft/>
        </aside>
        <section className="overflow-y-scroll  col-span-12 md:col-span-8 h-full bg-blue-200 flex justify-center">
          <Post/>
        </section>
        <aside className="hidden md:flex md:col-span-2 bg-white">
          <AsideRight/>
        </aside>
    </div>
  )
}

export default Home
