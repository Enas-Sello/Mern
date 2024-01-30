import { FaStar } from "react-icons/fa6"
import { FiClock } from "react-icons/fi"
import { GiPirateFlag, GiRecycle } from "react-icons/gi"
import { IoCheckmarkSharp } from "react-icons/io5"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { Slider } from "infinite-react-carousel"

const Gig = () =>
{
  

  
  return (
    <section className="p-10 flex flex-col gap-5">
      <span>Liverr {">"} Graphics & Design</span>
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-6  lg:col-span-4 flex flex-col gap-6">
          <h1 className=" text-3xl font-semibold ">
            I will create ai generated art for you
          </h1>
          {/* info */}
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="text-lg text-gray-500">Anna Bell</span>
            <div className="flex justify-center text-amber-400 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          {/* slider */}
          <Slider slidesToShow={1} arrowsScroll={1}>
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          {/* about */}
          <div className="flex flex-col gap-3 mt-10">
            <h4 className=" text-2xl font-medium">About This Gig</h4>
            <p className="text-gray-500 text-sm">
              I use an AI program to create images based on text prompts. This
              means I can help you to create a vision you have through a textual
              description of your scene without requiring any reference images.
              Some things I've found it often excels at are: Character portraits
              (E.g. a picture to go with your DnD character) Landscapes (E.g.
              wallpapers, illustrations to compliment a story) Logos (E.g.
              Esports team, business, profile picture) You can be as vague or as
              descriptive as you want. Being more vague will allow the AI to be
              more creative which can sometimes result in some amazing images.
              You can also be incredibly precise if you have a clear image of
              what you want in mind. All of the images I create are original and
              will be found nowhere else. If you have any questions you're more
              than welcome to send me a message.
            </p>
          </div>
          {/* seller */}
          <div className=" flex flex-col gap-2 mt-10">
            <h4 className=" text-2xl font-medium">About The seller</h4>
            <div className="flex items-center gap-2">
              <img
                className="w-20 h-20 rounded-2xl object-cover"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              {/* info */}
              <div className="flex flex-col gap-1">
                <span className="font-medium">Anna Bell</span>
                <div className="flex text-amber-400 gap-1 mb-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <button className="text-center py-1 px-2 border-2 rounded-md font-medium hover:bg-green-600 hover:text-white hover:border-transparent">
                  Contact me
                </button>
              </div>
            </div>
            {/* box  */}
            <div className=" border p-3 flex flex-col gap-3">
              <div className="grid grid-rows-3 grid-flow-col gap-4 ">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
            {/* reviews  */}
            <div className="flex flex-col gap-3 mt-10">
              <h3 className=" font-medium text-2xl">reviews</h3>
              {/* info */}
              {/* review */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div>
                    <span className="font-medium">Anna Bell</span>
                    <div className="flex gap-1 items-center text-sm text-gray-600">
                      <GiPirateFlag className=" text-teal-600" />
                      united States
                    </div>
                  </div>
                </div>
                <div className="flex text-amber-400 gap-1 mb-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using on Fiverr. Communication
                  was amazing, each and every day he sent me images that I was
                  free to request changes to. They listened, understood, and
                  delivered above and beyond my expectations. I absolutely
                  recommend this gig, and know already that Ill be using it
                  again very very soon
                </p>
                <div className="flex font-medium items-center gap-2">
                  <span>Helpful?</span>
                  <AiOutlineLike className="hover:text-green-600" />
                  <span>Yes</span>
                  <AiOutlineDislike className="hover:text-green-600" />
                  <span>No</span>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div>
                    <span className="font-medium">Anna Bell</span>
                    <div className="flex gap-1 items-center text-sm text-gray-600">
                      <GiPirateFlag className=" text-teal-600" />
                      united States
                    </div>
                  </div>
                </div>
                <div className="flex text-amber-400 gap-1 mb-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using on Fiverr. Communication
                  was amazing, each and every day he sent me images that I was
                  free to request changes to. They listened, understood, and
                  delivered above and beyond my expectations. I absolutely
                  recommend this gig, and know already that Ill be using it
                  again very very soon
                </p>
                <div className="flex font-medium items-center gap-2">
                  <span>Helpful?</span>
                  <AiOutlineLike className="hover:text-green-600" />
                  <span>Yes</span>
                  <AiOutlineDislike className="hover:text-green-600" />
                  <span>No</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        {/* buy section */}
        <div className=" col-span-6  lg:col-span-2 ">
          <div className=" border-2 rounded-sm p-3 flex flex-col gap-3 sticky top-36">
            <div className="flex justify-between">
              <h3 className=" text-2xl font-semibold ">1 AI generated image</h3>
              <h2 className=" text-xl font-normal ">$ 59.99</h2>
            </div>
            <p className=" text-gray-500">
              I will create a unique high quality AI generated image based on a
              description that you give me
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <FiClock />
                <span className="font-normal">2 Days Delivery</span>
              </div>
              <div className="flex gap-2 items-center">
                <GiRecycle />
                <span className="font-normal">3 Revisions</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <IoCheckmarkSharp className="text-green-600 mt-1" />
                <span>Additional design</span>
              </div>
              <div className="flex gap-2 items-center">
                <IoCheckmarkSharp className="text-green-600 mt-1" />
                <span>Prompt writing</span>
              </div>
              <div className="flex gap-2 items-center">
                <IoCheckmarkSharp className="text-green-600 mt-1" />
                <span>Artwork delivery</span>
              </div>
              <div className="flex gap-2 items-center">
                <IoCheckmarkSharp className="text-green-600 mt-1" />
                <span>Image upscaling</span>
              </div>
            </div>
            <button className=" bg-green-600 py-2 px-4  rounded text-white font-medium">
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gig
