import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/bounded";

export default function About() {
  return (
    <main>
      <Bounded>
        <div>
          <div id="card">
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
                marginBottom: "10px",
              }}
            />

            {/* Bio */}
            <div>
              <p>
                Hi there! My name is Noah Peters and I am a senior studying
                computer science at the University of Michigan. I am particuarly
                interested in low-level optimizations of complex programs such
                as game engines and renderers. Computer graphics, cyber
                security, and computer science theory are all also incredibly
                fascinating!
                <br></br>
                <br></br>
                As an avid fan of movies and the world of filmmaking, I
                initially got my footing in programming by exploring visual
                effects. Growing up, I would follow online tutorials to generate
                effects for my own short films. The intersection of creativity
                and methodical, programatic thinking drew me to the field of
                visual effects, and eventually helped me discover a love of
                coding.
                <br></br>
                <br></br>
                Outside of coding, I enjoy catching movies, running jazz sets,
                listening to new music, playing video games, or wandering around
                Wikipedia rabbit holes. Essentially, anything creative or
                scientific&#8212;from art galleries to science museums&#8212;I'm
                interested!
              </p>
            </div>
          </div>

          {/* Education */}
          <div id="card">
            <h1>Education</h1>
            <p className="font-bold">University of Michigan: Ann Arbor</p>
            <p>
              B.S. in Computer Science, expected{" "}
              <span className="font-bold">May 2024</span>
            </p>
          </div>

          {/* Coursework */}
          <div id="card">
            <h1>Relevant Coursework</h1>

            <div className="md:grid text-sm grid-cols-2">
              <div className="mt-4">
                <h2>Computer Organization</h2>
                <li>Mini-CPU assembler, simulator, and assembly multiplier</li>
                <li>Pipelined datapath and memory cache simulators</li>
                <li>Assembly-level optimization</li>
              </div>

              <div className="mt-4">
                <h2>Machine Learning</h2>
                <li>
                  Applications in data mining, computer vision, speech
                  recognition
                </li>
                <li>
                  Support vector machines, convolutional neural networks,
                  clustering
                </li>
                <li>Information theory</li>
              </div>

              <div className="mt-4">
                <h2>Computer Security</h2>
                <li>Cryptography theory: AES, Diffie-Hellman, RSA</li>
                <li>
                  Web security: XSS, CSRF, SQLi, UDP/TCP forensics, and DNS
                  attacks
                </li>
                <li>
                  Host and app security: buffer overflow, viruses, spyware,
                  botnets, digital forensics
                </li>
              </div>

              <div className="mt-4">
                <h2>Web Systems</h2>
                <li>Flask/React-based Instagram clone</li>
                <li>
                  Multi-process, multi-threaded MapReduce server using socket
                  programming
                </li>
                <li>Distributed search engine akin to Google</li>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="card">
            <h1>Contact</h1>
            <h2 className="font-normal">mobile: (203) 709-1054</h2>
            <a href="mailto: nope@umich.edu">
              <h2 className="font-normal">email: nope@umich.edu</h2>
            </a>
          </div>
        </div>
      </Bounded>
    </main>
  );
}
