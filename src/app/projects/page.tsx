import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bounded from "@/components/bounded";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

export default function Projects() {
  return (
    <main className="">
      <Bounded>
        {/* Game Engine */}
        <Accordion id="card">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>Game Engine</h1>: Low-level custom game engine (C++, SDL, Lua)
            <FaGithub className="mr-4 ml-auto text-2xl transition-all duration-150 text-gray-400 cursor-default" />
          </AccordionSummary>
          <AccordionDetails>
            A custom game engine designed with modularity and feature expansion in mind. The entirety
            of the engine itself is written in C++, utilizing libraries such as glm and rapidjson.
            Additionally, SDL was used to render graphics and mix audio. The engine builds for Windows,
            Mac, and Linux.
            <br></br>
            <br></br>
            Furthermore, a full integration of the Lua language allows users to write and implement their
            own scripts for the engine to run during gametime. This permits a feature-rich component-based
            scripting system.
          </AccordionDetails>
        </Accordion>

        {/* MySite */}
        <Accordion id="card">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>My Site</h1>: My personal website (TypeScript, JavaScript)
            <Link
              href="https://github.com/noahpete/mysite"
              className="mr-4 ml-auto text-2xl transition-all duration-150 hover:scale-125"
            >
              <FaGithub />
            </Link>
          </AccordionSummary>
          <AccordionDetails>
            My personal website you are currently on! I&apos;ve gone thorugh
            several iterations of the website, trying different styles and
            unique features. However, I ended up pursuing a succinct theme for
            my website. The models on the splash page are the same models found
            in the MinimalDefault.fbx scene found in the default Unreal Engine
            scene, paying homage to my love for visual effects.
          </AccordionDetails>
        </Accordion>

        {/* Powerbot */}
        <Accordion id="card" style={{ borderRadius: "0%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>Powerbot</h1>: Chorus identifier and music video aggregator
            (Python, JavaScript)
            <Link
              href="https://github.com/noahpete/powerbot"
              className="mr-4 ml-auto text-2xl transition-all duration-150 hover:scale-125"
            >
              <FaGithub />
            </Link>
          </AccordionSummary>
          <AccordionDetails>
            Powerbot is a web application designed for music enthusiasts seeking
            an efficient way to curate playlists and stream music videos. The
            app integrates with Spotify, Genius, and YouTube APIs to identify,
            locate, and stream songs&apos; choruses. Users can input a list of
            song titles, and Powerbot automates the identification and queuing
            of choruses in each song. It then links the user to the
            corresponding music videos of each song, starting at each chorus.
            <br></br>
            <br></br>
            The frontend was achieved using standard React and Material UI
            components. On the backend, a Python program was designed to extract
            songs&apos; choruses and locate them in provided lyrics, with the
            results being delievered via an API implemented using Django REST
            framework. The web app was previously deployed on an AWS EC2
            instance, while AWS S3 was used for storage.
          </AccordionDetails>
        </Accordion>

        {/* Unreal VR Scene */}
        <Accordion id="card" style={{ borderRadius: "0%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>Unreal Exercise</h1>: A demonstration of a variety of Unreal functions.
            (Unreal Engine)
            <FaGithub className="mr-4 ml-auto text-2xl transition-all duration-150 text-gray-400 cursor-default" />
          </AccordionSummary>
          <AccordionDetails>
            <div className="float-left m-4">
              <Image
                src={"/p1_examples.gif"}
                width={400}
                height={100}
                alt="Unreal demonstration"
              />
            </div>
            A project exercising my abilities in Unreal Engine, specifically
            implementing features for a VR experience. The scene is an artist&apos;s
            rendition of a computer lab located in the University of Michigan&apos;s
            Bob and Betty Beyster Building. This was a project for the course 
            Extended Reality and Society, and it required us to utilize a 
            variety of features Unreal Engine offers. Further, we were tasked with
            using Jira for project management.
            <br></br>
            <br></br>
            Some of the tasks included basic engine usage such as custom textures
            and materials, modeling, blueprints, and library usage. Features gradually grew
            in complexity, as I then implemented interactive props, lighting, 
            and NPCs that react to player actions. More advanced features such
            as particle systems, post processing effects, custom controller events,
            widgets, and global lighting effects were also explored.
            <br></br>
            <br></br>
            We were then tasked with planning and implementing a custom feature
            of our own design. I implemented a custom menu in which the user is
            prompted with two choices: to either pay for their downloadable music
            or to attempt to pirate the music. The player&apos;s decision determines
            their fate.
          </AccordionDetails>
        </Accordion>

        {/* Unity */}
        <Accordion id="card" style={{ borderRadius: "0%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>A2 Go</h1>: A Unity AR project akin to Pokemon Go.
            (Unity)
            <FaGithub className="mr-4 ml-auto text-2xl transition-all duration-150 text-gray-400 cursor-default" />
          </AccordionSummary>
          <AccordionDetails>
            <div className="float-left m-4">
              <Image
                src={"/p2_examples.gif"}
                width={400}
                height={100}
                alt="Unity demonstration"
              />
            </div>
            A2 Go! is an augmented reality mobile game that gets players out exploring the city of Ann Arbor.
            Like Pokemon Go, it blends real-world geography with virtual gameplay elements. Players traverse
            an overhead map view to navigate the city streets, with the goal of planting virtual seeds at
            real-world locations using AR camera views. This was all accomplished using Mapbox and Unity&apos;s XR
            toolkit.
            <br></br>
            <br></br>
            While sharing the real-world exploration premise of Pokemon Go, A2 Go! has its own distinct setting,
            characters, and resource collection systems centered around botany and urban forestry rather than
            catching creatures. But like its inspirational predecessor, it aims to get players physically moving
            about their surroundings in an engaging blend of reality and fantasy.
          </AccordionDetails>
        </Accordion>

        {/* Assembler */}
        <Accordion id="card">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>Little Computer 2000</h1>: Assembler, linker, and machine code
            simulator (C)
            <FaGithub className="mr-4 ml-auto text-2xl transition-all duration-150 text-gray-400 cursor-default" />
          </AccordionSummary>
          <AccordionDetails>
            An assembler that translates assembly (akin to ARM) into machine
            code. It proceeds to simulate an ISA, executing the machine code.
            The assembler was then adapted to consolidate multiple assembly
            files into object files that were then processed. To do this, a
            linker was designed and used to generate a single executable. This
            was a project for EECS 370: Computer Organization.
          </AccordionDetails>
        </Accordion>

        {/* Shaders */}
        <Accordion id="card">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>Shaders</h1>: Low-level shader renderer (C++)
            <FaGithub className="mr-4 ml-auto text-2xl transition-all duration-150 text-gray-400 cursor-default" />
          </AccordionSummary>
          <AccordionDetails>
            My current project&#8212;more details soon!
          </AccordionDetails>
        </Accordion>

        
      </Bounded>
    </main>
  );
}

const PowerbotDetails = () => {
  return (
    <div className="">
      <p>Powerbot is </p>
    </div>
  );
};
