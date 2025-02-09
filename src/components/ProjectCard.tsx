import React from "react";
import { Card } from "./ui/card";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";

type Props = {
	title: string;
	githubLink: Url;
	description: string;
	className?: string;
};

export default function ProjectCard({
	children,
	title,
	githubLink,
	description,
	className,
}: Props & { children?: React.ReactNode }) {
	return (
		<Card className={cn("w-[49%]", className)}>
			<div className="flex">
				<h1 className="text-lg font-bold">{title}</h1>
				{githubLink && (
					<Link href={githubLink} className="ml-auto mt-2">
						<FaGithub className="text-gray-400 hover:text-black" />
					</Link>
				)}
			</div>
			<p>{description}</p>
			{children}
		</Card>
	);
}
