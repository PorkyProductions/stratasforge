import { name } from "@/typescript/constants";
import Image from "next/image";
import Link from "next/link";
import PPLogo from '../../public/PPlogo.png'
import Icon from "./icon";

export default () => (
	<>
		<div id="wave">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#004040" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,154.7C672,128,768,96,864,80C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
		</div>
		<div className="text-center font-bold bg-deepTeal text-white text-4xl lg:text-6xl p-8" id="footer">
			&copy; {new Date().getFullYear()} | {name}, LLC <span>
				<Link href={"https://www.facebook.com/profile.php?id=100084564677420"} className="link link-light">
					<Icon name="facebook" />
				</Link>
			</span>
		</div>
		<div className="text-center font-bold bg-deepTeal text-white text-xl lg:text-4xl p-8">
			<span>{name.toUpperCase()}</span> <br /> <span>x</span>
				<div className="flex content-center justify-evenly">
					<Link href={"https://porkyproductions.github.io/"}>
						<Image src={PPLogo} alt="hedgehog" width={500} placeholder="blur" />
					</Link>
				</div>
		</div>
	</>
)