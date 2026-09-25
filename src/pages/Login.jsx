import bg from './../assets/bg1.jpg'

function Login() {
    return (
        <div className="flex flex-col bg-cover bg-center h-screen w-full justify-center items-center p-50 pr-150 pl-150" 
        style={{ backgroundImage: `url(${bg})`}}>
            <div className="flex w-full max-w-md flex-col bg-gray-900/40 justify-center items-center p-8 gap-y-12 rounded-3xl backdrop-blur-3xl border border-white/25 shadow-2xl">
                <h2 className="text-4xl text-white">Login</h2>bg-gray-300/30
                
                <div className="w-full flex justify-center items-center"> 
                    <input type="text" className="w-full p-4 bg-gray-300/30 rounded-lg text-white" placeholder="Username" />
                </div>
                
                <div className="w-full flex justify-center items-center">
                    <input type="password" className="w-full p-4 bg-gray-300/30 rounded-lg text-white" placeholder="Password" />
                </div>
                
                <div className="w-full flex justify-center items-center">
                    <button type="submit" className="bg-red-500 w-full p-3 rounded-lg text-white cursor-pointer">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;