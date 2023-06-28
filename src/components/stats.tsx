const stats = [
	{ id: 1, name: 'Active customers', value: '44 million' },
	{ id: 2, name: 'Amount of money Porky has', value: '$119 trillion' },
	{ id: 3, name: 'New users every second', value: '46,000' },
  ]
  
  export default function Example() {
	return (
	  <div className="py-24 sm:py-5">
		<hr className=" h-2 border-none bg-black text-black opacity-100 p-0 m-0" ></hr>
		<div className="bg-slate-300 m-0 p-0">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
				<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
					{stats.map((stat) => (
					<div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
						<dt className="text-base leading-7">{stat.name}</dt>
						<dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
						{stat.value}
						</dd>
					</div>
					))}
				</dl>
			</div>
		</div>
	  </div>
	)
  }
  