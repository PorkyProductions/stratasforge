import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
	<>
		<div className="bg-theme-primary text-white p-20 grid grid-cols-1 lg:grid-cols-2">
			<h1 className='font-bold text-8xl text-center px-4'>Helping gamers get their STLs printed.</h1>
			<div className="rounded-md px-36">
				{props.children}
			</div>
		</div>
	</>
)