import Navbar from "./Navbar"
const Home = () => {
  return (
    <main >
        <Navbar />
        <div className="w-full h-[550px] mt-[2px] relative flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
            <h1 className="font-body text-5xl text-center z-10 w-[500px]">
                <span className="text-[red]">Hand</span>crafted in small batches using the world's <span className="text-[gold]">finest</span> botanical oils. Welcome to luxury you can actually wear"
            </h1>

            <img src="/blur.jpg"/>
        </div>
    </main>
  )
}

export default Home