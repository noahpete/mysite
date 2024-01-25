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
                // borderRadius: "5%",
                float: "left",
                marginRight: "20px",
                boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
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
                scientific&#8212;from art galleries to science
                museums&#8212;I&apos;m interested!
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

            <div className="md:grid grid-cols-2">
              <div className="mt-4">
                <p className="font-bold">Computer Organization</p>
                <li>Mini-CPU assembler, simulator, and assembly multiplier</li>
                <li>Pipelined datapath and memory cache simulators</li>
                <li>Assembly-level optimization</li>
                <li>ARM assembly</li>
              </div>

              <div className="mt-4">
                <p className="font-bold">Machine Learning</p>
                <li>
                  Applications in data mining, computer vision, speech
                  recognition, and natural language processing
                </li>
                <li>SVMs, convolutional neural networks, clustering</li>
                <li>Information theory</li>
              </div>

              <div className="mt-4">
                <p className="font-bold">Computer Security</p>
                <li>Cryptography theory: AES, Diffie-Hellman, RSA</li>
                <li>Web security: XSS, CSRF, SQLi, TLS, DNS attacks</li>
                <li>
                  Host and app security: buffer overflow, viruses, spyware,
                  botnets, digital forensics
                </li>
              </div>

              <div className="mt-4">
                <p className="font-bold">Web Systems</p>
                <li>Flask/React-based Instagram clone</li>
                <li>
                  Multi-process, multi-threaded MapReduce server using socket
                  programming
                </li>
                <li>Distributed search engine akin to Google</li>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div id="card">
            <h1>Experience</h1>

            {/* IA */}
            <h2>University of Michigan: College of Engineering</h2>
            <p className="font-bold">Instructional Aide</p>
            <p>Aug 2023 - Present</p>
            <li>
              Responsible for leading a discussion section consisting of &gt;30
              students, in which we review important concepts from the preceding
              lectures.
            </li>
            <li>
              Regularly meet with course faculty to coordinate topics for the
              week and to develop technical content for the course, including
              exams, course notes, and assignments.
            </li>
            <li>
              Holding weekly office hours and addressing students&apos; online
              questions.
            </li>
            <li>
              Helping students develop strategies and skills required to succeed
              in the course.
            </li>
            <br></br>

            {/* Data Eng */}
            <h2>University of Michigan: Medical School</h2>
            <p className="font-bold">Data Engineer</p>
            <p>Aug 2021 - Oct 2022</p>
            <li>
              Initiated and implemented the design of a data routing program
              written in Python.
            </li>
            <li>
              Increased efficiency of patient data processing by &gt;1000% in an
              ongoing clinical study with 200+ patients.
            </li>
            <li>
              Regularly consulted with researchers during program&apos;s
              development, allowing for the continual expansion of the study
              without compromising data processing.
            </li>
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
