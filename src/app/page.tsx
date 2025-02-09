import ProjectCard from "@/components/ProjectCard";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
	return (
		<div className="">
			{/* Header */}
			<Card className="p-4 mb-8">
				<div className="mb-2 flex">
					<h1 className="text-2xl font-extrabold">Noah Peters</h1>
					<div className="flex ml-auto text-2xl gap-x-2 mt-2 text-gray-400">
						<Link href="nope@umich.edu">
							<MdEmail className="hover:text-black" />
						</Link>
						<Link href="https://github.com/noahpete">
							<FaGithub className="hover:text-black" />
						</Link>
						<Link href="https://www.linkedin.com/in/noah-f-peters/">
							<FaLinkedin className="hover:text-black" />
						</Link>
					</div>
				</div>
				<Image
					src="/me.jpg"
					alt="Noah"
					width={100}
					height={100}
					className="float-left mr-4 mb-2 rounded-sm"
				/>
				<p>
					Hi, my name is Noah—thanks for checking out my site! I'm a recent graduate from
					the University of Michigan with an interest in performant systems, games and
					game engines, machine learning, and visual effects. Outside of programming, I
					enjoy exploring math, playing bass, watching movies, and playing with my dog!
				</p>
			</Card>

			{/* Projects */}
			<div className="mb-8">
				<h1 className="text-xl font-extrabold mb-1">Projects</h1>
				<div className="flex w-full">
					<ProjectCard
						title="<Bingo Game>"
						githubLink=""
						description="Current project! Inspired by Buckshot Roulette and other recent table-top games, this Godot game takes bingo to another level."
					/>
					<ProjectCard
						className="ml-auto"
						title="Game Engine"
						githubLink="https://github.com/noahpete/game_engine"
						description="A C++ based game engine. Currently includes an ECS, custom scripting, a GUI, and numerous other features."
					>
						{/* <Image
							className="mt-2"
							src="/gedemo.gif"
							alt="Game engine demo"
							width={320}
							height={100}
						/> */}
					</ProjectCard>
				</div>

				<div className="flex w-full">
					<ProjectCard
						title="Tip Tracker"
						githubLink="https://github.com/noahpete/tip-tracker"
						description="Web app that tracks tips from serving, providing various analytics and insights."
					/>
					<ProjectCard
						className="ml-auto"
						title="Powerbot"
						githubLink="https://github.com/noahpete/powerbot"
						description="A video-streaming web app designed for music enthusiasts seeking an efficient way to curate music video playlists."
					/>
				</div>

				<div className="flex w-full">
					<ProjectCard
						title="SpiroVR"
						githubLink=""
						description="A VR spirometry test suite that aims to make pulmonary medical tests more engaging. Utilizes a custom Arduino-based spirometer."
					>
						{/* <Image
							className="mt-2"
							src="/spiro.gif"
							alt="SpiroVR demo"
							width={320}
							height={100}
						/> */}
					</ProjectCard>
					<ProjectCard
						className="ml-auto"
						title="A2 Go!"
						githubLink=""
						description="An AR mobile game akin to Pokémon Go, blending real-world geography with virtual game play elements."
					>
						{/* <Image
							className="mt-2"
							src="/a2go.gif"
							alt="SpiroVR demo"
							width={320}
							height={100}
						/> */}
					</ProjectCard>
				</div>

				<div className="flex w-full">
					<ProjectCard
						title="Unreal Exercise"
						githubLink=""
						description="A project exercising my abilities in Unreal Engine, specifically focusing on VR experiences."
					>
						{/* <Image
							className="mt-2"
							src="/ue.gif"
							alt="SpiroVR demo"
							width={320}
							height={100}
						/> */}
					</ProjectCard>
					<ProjectCard
						className="ml-auto"
						title="CNN Image Classifier"
						githubLink=""
						description="Custom deep neural network that successfully differentiates photos of European landmarks with >85% accuracy."
					/>
				</div>
			</div>

			{/* Experience */}
			<div className="mb-8">
				<h1 className="text-xl font-extrabold mb-1">Experience</h1>
				<Card>
					<div>
						<h1 className="text-lg font-bold">
							University of Michigan: College of Engineering
						</h1>
						<h2 className="font-bold">Instructional Aide</h2>
						<p className="text-sm mb-1">Aug 2023 - May 2024</p>
						<ul className="list-disc pl-5">
							<li>
								Communicated complex technical concepts for a class with over 800
								students by planning and leading engaging weekly discussion
								sessions, presenting recaps, working through examples, and
								addressing students&apos; questions.
							</li>
							<li>
								Closely collaborated with course faculty to develop high-quality
								technical content, including exam problems, course notes, and
								assignments, ensuring a comprehensive and challenging learning
								experience.
							</li>
							<li>
								Provided exceptional support through weekly office hours, online
								forum monitoring, and one-on-one guidance, promoting an accessible
								and inclusive learning environment.
							</li>
						</ul>
					</div>
				</Card>
				<Card>
					<div>
						<h1 className="text-lg font-bold">
							University of Michigan: Department of Internal Medicine
						</h1>
						<h2 className="font-bold">Data Engineer</h2>
						<p className="text-sm mb-1">Aug 2021 - Oct 2022</p>
						<ul className="list-disc pl-5">
							<li>
								Initiated and implemented a data routing program using Python,
								greatly increasing the efficiency of patient data processing for an
								ongoing clinical study with over 200 patients.
							</li>
							<li>
								Developed a RESTful API with Spring Boot for patient data access,
								leveraging OOP principles for model design and ensuring data
								persistence with MongoDB, JPA, and Hibernate.
							</li>
							<li>
								Designed a user-friendly GUI using React, TypeScript, and
								TailwindCSS, enabling researchers to intuitively access and analyze
								relevant patient data.
							</li>
						</ul>
					</div>
				</Card>
			</div>

			{/* Coursework */}
			<h1 className="text-xl font-extrabold mb-1">Coursework</h1>
			<div className="flex w-full">
				<ProjectCard title="Computer Organization" githubLink="" description="">
					<ul className="list-disc pl-5">
						<li>Mini-CPU assembler, simulator, and assembly multiplier</li>
						<li>Pipelined datapath and memory cache simulators</li>
						<li>Assembly-level optimization</li>
						<li>ARM assembly</li>
					</ul>
				</ProjectCard>
				<ProjectCard
					className="ml-auto"
					title="Machine Learning"
					githubLink=""
					description=""
				>
					<ul className="list-disc pl-5">
						<li>
							Applications in data mining, computer vision, speech recognition, and
							natural language processing
						</li>
						<li>SVMs, convolutional neural networks, clustering</li>
						<li>Information theory</li>
					</ul>
				</ProjectCard>
			</div>
			<div className="flex w-full">
				<ProjectCard title="Computer Security" githubLink="" description="">
					<ul className="list-disc pl-5">
						<li>Cryptography theory: AES, Diffie-Hellman, RSA</li>
						<li>Web security: XSS, CSRF, SQLi, TLS, DNS attacks</li>
						<li>
							Host and app security: buffer overflow, viruses, spyware, botnets,
							digital forensics
						</li>
					</ul>
				</ProjectCard>
				<ProjectCard className="ml-auto" title="Web Systems" githubLink="" description="">
					<ul className="list-disc pl-5">
						<li>Flask/React-based Instagram clone</li>
						<li>
							Multi-process, multi-threaded MapReduce server using socket programming
						</li>
						<li>Distributed search engine akin to Google</li>
					</ul>
				</ProjectCard>
			</div>
		</div>
	);
}
