import { AiOutlineGithub, AiOutlineGlobal, AiOutlineLinkedin } from "react-icons/ai"
import Wrapper from "./Wrapper"

function Footer() {
  return (
    <div className="bg-gray-200">
        <Wrapper>
            <div className="flex flex-col lg:flex-row py-12 justify-between gap-5">
                <div className="lg:w-2/5">
                    <div className="w-40 lg:h-40 sm:float-left sm:flex justify-center items-center">
                        <img src="/logo.png" alt="" className="w-32 h-24" />
                    </div>
                    <div className="lg:tracking-wide">This web app is built with React, Typescript, and Redux. It uses the <a href="https://newsapi.org/" className="text-gray-600 underline">news API</a> to get new articles all over the world. The main purpose of building this app was to exercise myself on the technologies I mentioned above. If you liked the app, I'd appreciate you leaving me a star on <a href="https://github.com/jacob-js/w-news-v2" className="text-gray-600 underline">GitHub</a> 😊</div>
                </div>
                <div className="flex flex-col sm:items-center">
                    <div className="">Made with love by Merci Jacob</div>
                    <div className="flex text-2xl gap-2 text-gray-600">
                        <a href="https://jacobdeveloper.com/"><AiOutlineGlobal /></a>
                        <a href="https://github.com/jacob-js"><AiOutlineGithub /></a>
                        <a href="https://www.linkedin.com/in/jacobdeveloper/"><AiOutlineLinkedin /></a>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Footer