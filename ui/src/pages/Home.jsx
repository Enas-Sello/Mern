import { useEffect, useState } from "react"
import Card from "../components/Card"
import Hero from "../components/Hero"
import Slide from "../components/Slide"
import Trusted from "../components/Trusted"
import { cards, features1, features2, projects } from "../data/MockData"
import Features from "../components/Features"
import ProjectCard from "../components/ProjectCard"
import { useQuery } from "react-query"
import axios from "axios"

function getSlidesToShow() {
  const windowWidth = window.innerWidth

  if (windowWidth >= 1200) {
    return 4 // Large screen
  } else if (windowWidth >= 768) {
    return 3 // Medium screen
  } else if (windowWidth >= 568) {
    return 2 // Medium screen
  } else {
    return 1 // Small screen, show one slide
  }
}

const Home = () => {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow())

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const fetchData = () => {
    return axios.get("http://localhost:8800/api/gig/allGigs", {
      withCredentials: true,
    })
  }
  const { isLoading, error, data:allGigs } = useQuery("user", fetchData)
  if (isLoading) return <h2>loading</h2>
  if (error) return "An error has occurred: " + error.message
  if (!isLoading) console.log("allGigs", allGigs)

  return (
    <>
      <Hero />
      <Trusted />
      <Slide slidesToShow={slidesToShow} arrowsScroll={slidesToShow}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Slide>
      <Features features={features2} />
      <Slide slidesToShow={slidesToShow} arrowsScroll={slidesToShow}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
      <Features features={features1} section={true} />
    </>
  )
}

export default Home
