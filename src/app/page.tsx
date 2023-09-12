import Image from 'next/image'


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          wellcome to &nbsp;
          <code className="font-mono font-bold">Artela playground</code>
        </p> */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none text-white flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* By{' '} */}
            <Image
              src="/logo-artela.png"
              alt="Artela Logo"
              className="dark:invert"
              width={200}
              height={48}
              priority
            />
          </a>
        </div>
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
      <div className="relative flex py-8 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        {/* <h1 className={`mb-3 text-2xl font-semibold`}>Artela Dev Net</h1> */}
        <code className="font-mono font-bold text-5xl text-white">Artela Devnet</code>
      </div>
      {/* <div className="relative flex py-1 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono text-1xl text-white">Artela Developer Portal</code>
      </div> */}

      <div className="relative flex py-1 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono text-1xl text-white">Curated Developer Resources to <span style={{ color: '#0082ff' }}>#BuildOnArtela</span></code>
        {/* <code className="text-blue"></code> */}
      </div>

      <div className="mb-32 grid gap-5 items-stretch text-center py-20 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Intro to Artela{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Artela is an extensible blockchain network enabling developers to build feature-rich dApps.
          </p>
        </a>

        <a
          href="http://docs.artela.network/develop"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Documents{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            All-in-One Artela Developer Portal.
          </p>
        </a>

        <a
          href="http://docs.artela.network/develop/quick-start"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Quick Start{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Start with building your first Aspect on Artela.
          </p>
        </a>

        <a
          href="http://docs.artela.network/develop/"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Testnet Overview{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Overview of Artela Alpha Testnet.
          </p>
        </a>

        <a
          href="http://docs.artela.network/develop/aspect-tools"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Aspect-tools{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Aspect tools for boosting the development of Aspect and smart contract. 
          </p>
        </a>

        <a
          href="http://docs.artela.network/develop/start-a-locol-node"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Run a node{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn how to spin up a node on Artela blockchain.
          </p>
        </a>

        <a
          href="http://docs.artela.network/develop/aspect-examples"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Examples{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Step-by-step examples of building Aspects.
          </p>
        </a>

        <a
          href="https://file.notion.so/f/s/f61f7e7b-c401-4168-ad6d-e35db0537363/Preview_-_Aspect_Programming_Whitepaper.pdf?id=6010f2ef-5967-4b8e-b500-52482a0e2d16&table=block&spaceId=45baf4ea-5aba-4e9d-b5e7-ca59d97ab79a&expirationTimestamp=1694131200000&signature=OXwSB9iIp-wplzI4zyRrZU1GFBRhyeQlP5j5N7SIAm8&downloadName=Preview+-+Aspect+Programming+Whitepaper.pdf"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Whitepaper{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Aspect Programming Whitepaper
          </p>
        </a>

        <a
          href="http://docs.artela.network/develop/asolc-guide"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            ASOLC Guide{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            An enhanced version of SOLC to compile smart contracts 
          </p>
        </a>

        <a
          href="https://medium.com/@artela_network"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Stay updated with the latest research and news about Artela.
          </p>
        </a>

        <a
          href="https://t.me/artela_official"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Community{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Join the community of Artela builders.
          </p>
        </a>

        <a
          href="http://docs.artela.network/develop/resources"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Resources{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Resources for building on Artela Devnet.
          </p>
        </a>
      </div>

      <div className="relative flex py-8 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono font-bold text-5xl text-white">New World with Aspect</code>
      </div>
      
      <div className="border-2 border-white	 w-3/5"></div>
      <div className="mb-32 grid gap-5 items-stretch text-center py-20 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://medium.com/@artela_network/eliminate-reentrancy-attacks-with-on-chain-runtime-protection-6fb1142945a7"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Smart Contract Runtime Protection{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Eliminate reentrancy attacks with on-chain runtime protection
          </p>
        </a>
        
        <a
          href="https://www.youtube.com/watch?v=jkrELgwtykk&t=370s"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Intent Solver On-Chain
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Empowering on-chain functionality for itent-enabled protocols
          </p>
        </a>
       
        <a
          // href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Just-in-time (JIT) Operation
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            On-chain just-in-time operations such as JIT liquidation, JIT LP management, and MEV-capturing AMM.
          </p>
        </a>
        
        <a
          // href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Native Event-Driven Action
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
           Subscribe to real-time specific on-chain events to trigger atomic tasks.
          </p>
        </a>
       
        <a
          // href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Fully OnChain Game
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
           Upgrade game equipment with enhanced programmability
          </p>
        </a>
        
        <a
          // href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          OnChain MicroService
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Public on-chain services with modular upgrades.
          </p>
        </a>
        
        <a
          href="https://t.me/artela_official"
          className="group col-span-3 rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold text-center `}>
          Your Use Case Here
          </h2>
          <p className={`text-sm text-white opacity-90 text-center `}>
            Contribute your research and ideas to the Artela Community. Let’s build the feature-rich dApps together!
          </p>
        </a>
      </div>

      {/* <div className="relative flex py-8 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono font-bold text-5xl text-white">Contribute to Artela</code>
      </div>
      
      <div className="border-2 border-white	 w-3/5"></div>

      <div className="mb-32 grid gap-5 items-stretch text-center py-20 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Improve Documents{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
        
        <a
          href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Build Aspect{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
       
        <a
          href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Tech Share{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div> */}

    </main>
  )
}
