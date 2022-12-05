function App() {
	return (
		<div className="min-h-screen flex flex-col text-white">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
				<h1 className="text-2xl md:text-4xl lg:text-6xl uppercase font-black mb-8">
          Your Goto for Digital Asset management and tracking</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">
          A System that helps handle financial transparency in Governance, through blockchain!</p>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 
        lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
					All 37 states including Fct, subsrcibed for state Executive assets management
				</div>

				<form 
					action="#" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your wallet address..."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12
               bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none 
               rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Subscribe Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full 
              text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with our terms and conditions <a target="_blank" href="#" 
            className="hover:opacity-80 duration-150">Regarding blockchain accesibility</a> 
            and <a target="_blank" href="#" className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>

				</form>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Built with &#128545; Love by Umar Faruq</p>

					<div className="flex -mx-6">
						<a href="#" className="mx-3 hover:opacity-80 duration-150">About DigiAsset</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Public Assets and CBDCs</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Contact Us</a>
					</div>
				</div>
			</footer>
		</div>	
	)
}

export default App
 