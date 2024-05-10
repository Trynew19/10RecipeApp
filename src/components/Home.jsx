function Home() {
    return (
      <div style={{backgroundImage: "url(/images/bg2.jpg)", backgroundPosition:"center", backgroundSize:"cover"}} className="w-full h-[90vh] flex items-center justify-center">
        <div className="w-[100%] h-[100%]  bg-black opacity-85  flex  ">
            <div className="left w-1/2  h-full flex flex-col gap-5 justify-center items-start pl-20 ">

             <h1 className="text-6xl text-white uppercase font-semibold">make the best that surprise you </h1>
             <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, asperiores aperiam. Molestias quis sint est temporibus unde ullam, enim voluptatibus? Consequuntur itaque quas consectetur, voluptatem adipisci repellendus dicta! Iusto, recusandae?</p>
              <button className="py-1 px-5 bg-white rounded-md text-2xl text-black ">Learn more  &#8594; </button>

            </div>

            <img className="scale-75 " src="/images/home3.png" alt="" />

        </div>
        
      </div>
    );
  }
  
  export default Home;
  