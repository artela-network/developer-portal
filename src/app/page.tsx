import Image from 'next/image'


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-auto sm:flex-auto">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          wellcome to &nbsp;
          <code className="font-mono font-bold">Artela playground</code>
        </p> */}
        <div className="lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none text-white flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://artela.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* By{' '} */}
            <Image
              src="/logo-artela.png"
              alt="Artela Logo"
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
        <code className="font-mono font-bold text-5xl text-white text-center">Artela Devnet</code>
      </div>
      {/* <div className="relative flex py-1 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono text-1xl text-white">Artela Developer Portal</code>
      </div> */}

      <div className="relative flex py-1 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono text-1xl text-white text-center">Curated Developer Resources to <span style={{ color: '#0082ff' }}>#BuildOnArtela</span></code>
        {/* <code className="text-blue"></code> */}
      </div>

      <div className="mb-32 grid gap-5 items-stretch w-[90vw] max-w-screen-xl justify-center text-center py-20 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-400"
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
          href="https://docs.artela.network/develop"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-400"
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
          href="https://github.com/artela-network/aspect-whitepaper/blob/main/latex/build/whitepaper.pdf"
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
          href="https://docs.artela.network/develop"
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
            Start with building your first dApp on Artela.
          </p>
        </a>

        <a
          href="https://docs.artela.network/develop/node/access-testnet"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Join Our Devnet{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Spin up your own node and join our devnet!
          </p>
        </a>



        <a
          href="https://docs.artela.network/develop/client/evm-compatible-apis"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Clients APIs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Clients and APIs supported on Artela. 
          </p>
        </a>

        
        <a
          href="https://docs.artela.network/develop/node/full-node-setup"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Setup Your Own Nodes{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Setup your own node for a local development env!
          </p>
        </a>

        <a
          href="https://docs.artela.network/develop/core-concepts/foundational"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Core Concepts{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Basic knowledge for building on Artela.
          </p>
        </a>
        
        <a
          href="https://docs.artela.network/develop/guides/reentrancy-guard"
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
            Step-by-step guide of building Aspects examples.
          </p>
        </a>

        

        <a
          href="https://medium.com/@artela_network"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-gray-400"
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
          href="https://discord.com/invite/artela"
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
          href="https://docs.artela.network/develop/resources/faucet"
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
            Resources for building on Artela Testnet.
          </p>
        </a>
      </div>

      <div className="relative flex py-8 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono font-bold text-5xl text-white text-center">New World with Aspect</code>
      </div>

      <div className="border-2 border-white	 w-3/5"></div>
      <div className="mb-32 grid gap-5 items-stretch text-center py-20 w-[90vw] max-w-screen-xl justify-center grid-cols-1 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://medium.com/@artela_network/eliminate-reentrancy-attacks-with-on-chain-runtime-protection-6fb1142945a7"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Smart Contract Runtime Protection{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Eliminate reentrancy attacks with on-chain runtime protection
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=jkrELgwtykk&t=370s"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          On-Chain Intent-Centric Protocols{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Empowering on-chain functionality for intent-centric protocols
          </p>
        </a>

        <a
          // href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Just-in-time (JIT) Operation
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            On-chain just-in-time operations such as JIT liquidation, JIT LP management, and MEV-capturing AMM.
          </p>
        </a>

        <a
          // href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Native Event-Driven Action
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
           Subscribe to real-time specific on-chain events to trigger atomic tasks.
          </p>
        </a>

        <a
          // href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Fully On-Chain Game
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
           Upgrade game equipment with enhanced programmability
          </p>
        </a>

        <a
          // href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          On-Chain MicroService
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Public on-chain services with modular upgrades.
          </p>
        </a>

        {/* <a

          href="https://t.me/artela_official"
          className="group rounded-lg border lg:col-span-3 border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold text-center `}>
          Your Use Case Here{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`text-sm text-white opacity-90 text-center`}>
            Contribute your research and ideas to the Artela Community. Let’s build the feature-rich dApps together!
          </p>
        </a> */}
      </div>

      <div className="relative flex py-8 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono font-bold text-5xl text-white text-center">Contrib to Artela</code>
      </div>

      <div className="border-2 border-white	 w-3/5"></div>
      <div className="mb-32 grid gap-5 items-stretch text-center py-20 w-[90vw] max-w-screen-xl justify-center grid-cols-1 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
            className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Work on an open issue{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Work we've identified that needs doing.
          </p>
        </a>

        <a
            className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Contribute an idea{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Help us continue to improve Artela.
          </p>
        </a>

        <a
            className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Fix a bug{' '}
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Let us know the bug and get ready for bounty!
          </p>
        </a>

        <a
            className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Improve documentation
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Create a PR if you see a mistake or find room for improvement.
          </p>
        </a>

        <a
            // href="http://docs.artela.network/main"
            className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Co-research
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Contribute a blog or show your proposal for co-research.
          </p>
        </a>

        <a
            // href="http://docs.artela.network/main"
            className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Contribute an Aspect UseCase
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Contribute an Aspect usecase to example repo.
          </p>
        </a>

        <a
            href="https://github.com/artela-network/contribute-to-artela"
            className="group rounded-lg border border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Kickstart Contributions{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm text-white opacity-90`}>
            Let’s build the feature-rich dApps together!
          </p>
        </a>

        {/* <a

          href="https://t.me/artela_official"
          className="group rounded-lg border lg:col-span-3 border-transparent px-5 pt-8 pb-20 w-full h-auto min-h-0 lg:min-h-400 lg:h-200 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold text-center `}>
          Your Use Case Here{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`text-sm text-white opacity-90 text-center`}>
            Contribute your research and ideas to the Artela Community. Let’s build the feature-rich dApps together!
          </p>
        </a> */}
      </div>


      
{/* 
      <div className="relative flex py-8 place-items-center before:absolute before:h-[300px] before:w-[480px]">
        <code className="font-mono font-bold text-5xl text-white">Contribute to Artela</code>
      </div>

      <div className="border-2 border-white	 w-3/5"></div>

      <div className="mb-32 grid gap-5 items-stretch text-center py-20 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
            Work on an open issue{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Work we've identified that needs doing.
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Contribute an idea{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Help us continue to improve Artela.
          </p>
        </a>

        <a
          href="http://docs.artela.network/main"
          className="group rounded-lg border border-transparent px-5 pt-8 pb-20 min-h-400 h-200 transition-colors  hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-white text-2xl font-semibold`}>
          Fix a bug{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white opacity-90`}>
            Let us know the bug and get ready for bounty!
          </p>
        </a>
      </div> */}

    </main>
  )
}
