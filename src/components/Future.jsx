import "react"
import { KeyRound, Lock, Cloud, Wallet } from 'lucide-react'; 
const HowItWorksAndFuturePlans = () => {
  return (
    <div className="bg-white px-6 py-16">
      {/* How it Works Section */}
      <div className="text-center mb-20">
        <div className=" ">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-10 md:gap-8 lg:gap-12">

          {/* Zk-Login */}
          <div className="text-center max-w-xs mx-auto group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-blue-600 text-white rounded-xl p-3 inline-block mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
              <KeyRound className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Decentralized Login</h3>
            <p className="text-sm text-gray-600 mt-2">
              Securely log in using zero-knowledge proofs for a private, on-chain
              identity without exposing personal data.
            </p>
          </div>

          {/* Mail Encryption */}
          <div className="text-center max-w-xs mx-auto group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-blue-600 text-white rounded-xl p-3 inline-block mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
              <Lock className="h-8 w-8" /> 
            </div>
            <h3 className="font-semibold text-lg text-gray-800">End-to-End Encryption</h3>
            <p className="text-sm text-gray-600 mt-2">
              Protect your communications with robust, blockchain-secured encryption,
              ensuring absolute privacy for your messages.
            </p>
          </div>

          {/* Decentralized Storage */}
          <div className="text-center max-w-xs mx-auto group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-blue-600 text-white rounded-xl p-3 inline-block mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
              <Cloud className="h-8 w-8" /> 
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Decentralized Storage</h3>
            <p className="text-sm text-gray-600 mt-2">
              Your data is stored securely on a decentralized network like Walrus,
              ensuring censorship resistance and data ownership.
            </p>
          </div>

          {/* Pay to Send Model */}
          <div className="text-center max-w-xs mx-auto group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-blue-600 text-white rounded-xl p-3 inline-block mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
              <Wallet className="h-8 w-8" /> 
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Gas-less Transactions</h3>
            <p className="text-sm text-gray-600 mt-2">
              Experience seamless interactions with a "Pay to Send" model,
              eliminating spam and ensuring network efficiency with minimal gas fees.
            </p>
          </div>

        </div>
      </div>
              </div>

      {/* Future Plans Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">FUTURE PLANS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white h-70 rounded-xl shadow p-6 flex flex-col transition hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4">
              <img
                src={"/images/male.jpg"}
                alt="Video Call"
                className="h-62 w-full object-cover rounded"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Empower Your Organization
            </h3>
            <p className="text-sm text-gray-500">
             Private branded communication branded by blockchain
            </p>
            <div className="flex justify-start mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Explore enterprise suite
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-8 flex flex-col transition hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4">
              <div className="bg-gray-100 rounded h-70 flex items-center justify-center">
                <img
                  src={"/images/small.jpg"}
                  alt="Video Call"
                  className="h-62 w-full object-cover rounded"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Build Your Web3 Community</h3>
            <p className="text-sm text-gray-500">
              Token Gated communication, events and secure collaboration
            </p>
            <div className="flex justify-start mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Start your Community
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col transition hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4">
              <div className="bg-gray-100 rounded h-70 flex items-center justify-center">
                <img
                  src={"/images/creator.png"}
                  alt="creator"
                  className="h-64 w-full object-cover rounded"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg">Tools For Web3 Creators</h3>
            <p className="text-sm text-gray-500">
              Monetize Your Content, Reach Your Audience, own your Platform
            </p>
            <div className="flex justify-start mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Launch your Newsletter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksAndFuturePlans
