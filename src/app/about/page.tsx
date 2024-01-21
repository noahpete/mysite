import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "@/components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <main>
      <Header />
      <div className="max-w-[500px] md:max-w-[800px] md:mt-16 m-2 mx-auto items-center ">
        <div className="p-6 w-[96vw] max-w-[485px] translate-x-2 border-black border-[1px] md:max-w-[785px]">
          {/* Picture */}
          <Image
            src="/prof-pic.jpg"
            width={160}
            height={160}
            alt="Headshot"
            style={{
              borderRadius: "5%",
              float: "left",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          />

          {/* Bio */}
          <div className="">
            <p className="text-sm">
              Hi there! My name is Noah Peters and I am a senior studying
              computer science at the University of Michigan. I am particuarly
              interested in low-level optimizations of complex programs such as
              game engines and renderers. Computer graphics, cyber security, and
              computer science theory are all also incredibly fascinating!
              <br></br>
              <br></br>
              As an avid fan of movies and the world of filmmaking, I initially
              got my footing in programming by exploring visual effects. Growing
              up, I would follow online tutorials to generate effects for my own
              short films. The intersection of creativity and methodical,
              programatic thinking drew me to the field of visual effects, and
              eventually helped me discover a love of coding.
              <br></br>
              <br></br>
              Outside of coding, I enjoy catching movies, running jazz sets,
              listening to new music, playing video games, or wandering around
              Wikipedia rabbit holes. Essentially, anything creative or
              scientific&#8212;from art galleries to science museums or jazz
              clubs&#8212;I will enjoy it!
            </p>
          </div>
        </div>

        {/* Education */}
        <div className=" m-2 border-[1px] border-black p-6">
          <h1 className="font-extrabold text-xl">Education</h1>
          <p className="text-bold font-bold">
            University of Michigan: Ann Arbor
          </p>
          <p>B.S. in Computer Science, expected May 2024</p>
        </div>

        {/* Coursework */}
        <div className="m-2 border-[1px] border-black p-6 text-sm md:grid md:grid-cols-2">
          <h1 className="font-extrabold text-xl max-h-8">
            Relevant Coursework
          </h1>

          <div className="">
            <h2 className="mt-4 font-bold md:mt-12">Computer Organization</h2>
            <li>Mini-CPU assembler, simulator, and assembly multiplier</li>
            <li>Pipelined datapath and memory cache simulators</li>
            <li>Assembly-level optimization</li>
          </div>

          <div className="">
            <h2 className="mt-4 md:-mt-[96px] font-bold">Machine Learning</h2>
            <li>
              Applications in data mining, computer vision, speech recognition
            </li>
            <li>
              Support vector machines, convolutional neural networks, clustering
            </li>
            <li>Information theory</li>
          </div>

          <div className="">
            <h2 className="mt-4 font-bold">Computer Security</h2>
            <li>Cryptography theory: AES, Diffie-Hellman, RSA</li>
            <li>Web security: XSS, CSRF, SQLi, UDP/TCP and DNS attacks</li>
            <li>
              Host and app security: buffer overflow, viruses, spyware, botnets
            </li>
          </div>

          <div className="md:-mt-[120px] md:mr-2">
            <h2 className="mt-4 font-bold">Web Systems</h2>
            <li>Flask/React-based Instagram clone</li>
            <li>
              Multi-process, multi-threaded MapReduce server using socket
              programming
            </li>
            <li>Distributed search engine akin to Google</li>
          </div>
        </div>

        {/* Contact */}
        <div className="m-2 border-[1px] border-black p-6 text-sm">
          <h1 className="font-extrabold text-xl mb-2">Contact</h1>
          <h2>phone: (203) 709-1054</h2>
          <h2>email: nope@umich.edu</h2>
        </div>
      </div>
      <Footer />
      <Footer />
    </main>
  );
}
