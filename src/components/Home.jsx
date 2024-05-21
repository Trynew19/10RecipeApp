function Home() {
  return (
    <div style={{backgroundImage: "url(/images/bg2.jpg)", backgroundPosition:"center", backgroundSize:"cover"}} className="w-full h-[90vh] flex items-center justify-center">
      <div className="w-full h-full flex  justify-center items-center  bg-black opacity-85 ">
        <div className="w-1/2  px-5">
          <h1 className="  text-6xl  text-white uppercase font-semibold mb-5">make the best that surprises you</h1>
          <p className="text-white mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, asperiores aperiam. Molestias quis sint est temporibus unde ullam, enim voluptatibus? Consequuntur itaque quas consectetur, voluptatem adipisci repellendus dicta! Iusto, recusandae?</p>
          <button className="py-2 px-6 bg-white rounded-md text-xl text-black">Learn more  &#8594;</button>
        </div>
        <img className="w-1/2  mt-8 " src="/images/home3.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
