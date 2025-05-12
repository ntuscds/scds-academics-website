---
sidebar_position: 4
---

import Profile from '@site/src/components/Profile';

# A Guide to Blockchain and Web3

## About the Writer

<Profile
  src="/img/docs/contributors/advait-deshpande.jpg"
  alt="Advait Deshpande"
  name="Advait Deshpande"
  tags={["Business & Computer Science", "batch 2025", "Treehouse Labs", "Altonomy", "StraitsX"]}
  linkedinUrl="https://www.linkedin.com/in/advaittt/"
/>

Hi, I'm Advait and I'm a final year Business & Computer Science major. I'm here to write about being an engineer in the web3 space. So to cut to the chase, yes there are many scams. The trillions of dollars sloshing around in funding attract a lot of bad actors. But that doesn't mean that there isn't real innovation taking place and serious tech being built. You just have to spend longer than 10 seconds reading about it and would need to think critically (this is difficult I know).

So here goes. If you didn't know, *Web3* refers to the third generation of the web focused on peer-to-peer, blockchain-based applications without middlemen. A popular application (and the largest segment of the space) of Web3 technology is Decentralised Finance (DeFi). Largely because of its promise to be able to revolutionize our financial system today, which is marred with the inefficiencies and quirks of yesterday's technology. You can find out more in this [<u>report</u>](https://www.paradigm.xyz/2025/03/tradfi-tomorrow-defi-and-the-rise-of-extensible-finance) on why exactly DeFi is so hot now– tldr, your traditional finance companies (think banks, payment providers, insurance, etc.) are betting on it as the future.

Web3 has also popped off as an [<u>industry</u>](https://www.onchainstate.sg/) in Singapore! Being in Singapore is quite an advantage if you're interested in dipping your toes in this world. There are a lot of companies setting up shop here, and some run graduate programmes too (s/o to OKX Supernova). There's also no shortage of jobs and places to work at, ranging from Startups, to Top-Tier Crypto Exchanges. You can get an idea of what it looks like [<u>here</u>](https://www.onchainstate.sg/industry-map).

## My Journey
I had a rather unorthodox introduction to the space. In 2021, when memecoins first reached mainstream, I had the opportunity to support a mentor in launching a token. I had the full unadulterated front-seat experience of the craziness that accompanies launching something yourself on the blockchain. In that experience, I first learned about writing smart contracts, and working with the various developer tools that came with it. 

With my interest thoroughly piqued, I began learning about the financial innovations being made on smart-contract blockchains. Things like:
- Lending / Borrowing Protocols (e.g. AAVE, Compound)
- Automated Market-Making (e.g. Uniswap, 1inch)
- Prediction Markets (e.g. Polymarket)

If you're interested, I recommend starting with these topics too, as they present particularly interesting problems, and will bring you down the rabbit-hole of the engineering and math it takes to solve them.

This curiosity eventually helped me land my first summer internship at [<u>Treehouse Labs</u>](https://treehouselabs.xyz/). Where I worked as a Product Management Intern. At the time, they were building DeFi portfolio analytics tools, for people to keep track of their profits (mostly losses) across the many apps on the many chains that they used. My mission? To drive the implementation of smart contract wallet indexing. It sounds a bit dry, but it forced me to understand the nuts and bolts of how crypto wallets work, how data is structured and accessed on-chain, and what users actually need from a DeFi product. It was like figuring out the plumbing of the DeFi world – less about building the pipes, more about understanding the flow. Starting with a product perspective provided crucial context before I jumped into hardcore development.

Next, I moved closer to the code at Altonomy (under [<u>SkateFi</u>](https://www.skatefi.org/), formerly Range Protocol). This was a Software Engineering Internship focused on DeFi Liquidity Providers (LPs). I got my hands dirty building frontend components and doing quantitative analysis, specifically looking into 'toxic order flow' – basically, analyzing how LPs on the blockchain can get disadvantaged in certain market conditions. This role threw me right into the mechanics of DeFi protocols like Uniswap V3 – leading me to dive deep into the mathematics that made it possible.

Most recently, I interned at StraitsX. This time, building microservices and tooling for Singapore's MAS-backed stablecoins, like XSGD and XUSD. Working on regulated, real-world financial infrastructure is a different ballgame. It definitely leveled up my backend skills and gave me insight into the complexities of stablecoin design and operation. It was pretty cool to contribute to something making crypto potentially more stable and usable for everyday transactions.

Overall, the big lesson is just that being an engineer in web3 is no different than being an engineer in any industry. To succeed, you need to be innately curious and interested in learning about the quirks and oddities of the space.

Having strong Computer Science fundamentals go a long way too, because they help you see how things work from first principles. An example of this is when you try to understand how Ethereum works (via the Ethereum Virtual Machine), you'll be able to draw parallels to the concepts of Virtual Machines that you'll learn in your CS curriculum. Or when you try to send your first transaction to the blockchain, you'll be no stranger to the concept of Remote Procedure Calls that you'd learn about in Distributed Systems. 

## Where you can start learning
So, how do you actually dive in if you're starting from scratch?
- **Start with the 'Why' and 'What':** Before jumping into code, understand the core concepts. What _is_ a blockchain? Why decentralization? What problems are projects like Ethereum trying to solve? Resources like the original Bitcoin whitepaper, the Ethereum [<u>docs</u>](https://ethereum.org/en/developers/docs/), and introductory articles/videos (Binance Academy, Finematics on YouTube) are great starting points.
- **Get Hands-On (Safely):** Set up a wallet (like MetaMask). Use a test network (like Sepolia for Ethereum) to get free "fake" crypto and interact with simple dApps (Decentralized Applications). This gives you a feel for transactions, gas fees, and the user experience without risking real money.
- **Learn the Stack:**
  - **Smart Contracts:** Solidity is the dominant language for Ethereum and EVM-compatible chains. CryptoZombies is a fun, interactive tutorial. Once you have the basics, explore the OpenZeppelin Contracts library – it provides secure, standard implementations for common patterns. One might argue that it would be beneficial today to start with [<u>Solana</u>](https://solana.com/docs) instead.
  - **Frontend Interaction:** You'll need JavaScript/TypeScript and libraries like Ethers.js or Web3.js to interact with smart contracts from a web interface. There are always new frameworks coming out, do your due diligence here.
  - **Development Environments:** Learn tools like Hardhat or Foundry. They help compile, test, and deploy your smart contracts.
- **Essential Concepts:** Get familiar with terms like Gas, Blocks, Transactions, Public/Private Keys, Consensus Mechanisms (Proof-of-Work vs. Proof-of-Stake), Oracles (like Chainlink), and the basics of DeFi primitives (Swaps, Lending, Staking).
- **Project Ideas:**
  - Build a simple voting dApp.
  - Create your own basic ERC-20 token on a testnet.
  - Try interacting with a DeFi protocol like AAVE or Uniswap programmatically using their SDKs.
  - Contribute to an open-source Web3 project on GitHub.

## Internship Preparation Tips
This would be about the same as preparing for any Software Engineering role. So I'll only add the extra that might help you for engineering roles at web3 companies.
- **Skills to Focus On:**
  - Understanding Blockchain Concepts: Be able to explain how blockchains work, the EVM, gas, transactions, etc., clearly.
  - DeFi Knowledge: For DeFi roles, understand core protocols (AMM, lending), liquidity provision, impermanent loss, etc.
  - Solidity & Smart Contract Development (If the role requires this): This is often the core requirement for blockchain-focused roles. Understanding security best practices is crucial.
- **What Interviewers Look For:**
  - Demonstrated Interest: Show, don't just tell. Have you built projects? Contributed to open source? Written articles? Participated in hackathons? Even interacting with protocols on the mainnet shows initiative.
  - Understanding of Their Product/Protocol: Research the company. Understand what they build, what challenges they face, and how your skills align.
- **Interview Prep:**
  - Stay Updated: Follow key figures and projects on Twitter/X, read blogs (e.g. [<u>Vitaliks musings</u>](https://vitalik.eth.limo/), [<u>Paradigm</u>](https://www.paradigm.xyz/writing), etc.), and join relevant Discord communities. The space moves fast!

Being an engineer in Web3 is challenging but incredibly rewarding. It's a field where curiosity pays off, fundamentals matter, and you get to work on technology that could genuinely reshape parts of our digital and financial worlds. Good luck!
