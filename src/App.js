
import {useState} from 'react';
function App() {

  const [counter, setcounter] = useState(1);
  return (
   <>
      <div className="px-5 sm:px-7 max-w-[1400px] mx-auto flex items-center justify-between py-2 bg-white">
        <div className="cursor-pointer"><img src="/images/logo.svg" className='hidden sm:block' alt="logo" /> <img src="/images/small-logo.svg" className='block w-11 sm:hidden' alt="logo" /></div>
        <button className="text-[18px] font-[400] px-6 py-2 transition bg-[#81F1F3] hover:bg-[#5ed4d6] rounded-lg">Connect Wallet</button>
      </div>


      <div className="flex items-center flex-col lg:flex-row pt-20  pb-16 mb-14 px-5 sm:px-7 justify-center gap-[40px] sm:gap-[80px] bg-[#292F30]">
      
      <div className="text-white flex items-center justify-center flex-col">
        <div className="text-[32px] font-[700 opacity-80 mb-5 text-center">Mint a Genesis Pass Now!</div>
        <div className="text-[18px] font-[400] opacity-80 mb-5 text-center">Passes Minted: 313 / 3,000</div>
        <div className="text-[18px] font-[400] opacity-80 mb-5 text-center">Mint Price: 0.1 ETH</div>



        <div className="flex items-center justify-center gap-3 sm:gap-10 mb-10">
          <div onClick={()=> {counter === 1 ? setcounter(1) : setcounter(counter - 1)}} className="w-[50px] rounded-lg h-[50px] transition bg-[#81F1F3] hover:bg-[#5ed4d6] text-4xl text-black flex cursor-pointer items-center justify-center"><span className="transform -translate-y-[3px]">-</span></div>
          <div className="bg-white border-2 border-[#81F1F3] h-[50px] rounded-lg w-[120px] text-black flex items-center justify-center font-[400] text-[22px]">{counter}</div>
          <div onClick={()=> setcounter(counter + 1)} className="w-[50px] rounded-lg h-[50px] transition bg-[#81F1F3] hover:bg-[#5ed4d6] text-2xl text-black flex cursor-pointer items-center justify-center">+</div>
        </div>


        <div className="flex items-center gap-3 mb-7 ">
          <input type="checkbox" name='agree' id='agree' className='accent-[#81F1F3] cursor-pointer w-5 h-5' />
          <div className='font-[400]'><label htmlFor='agree' className='opacity-80 cursor-pointer'>I agree to the</label> <a href="#" className='text-[#81F1F3]'>Terms & Conditions</a></div>
        </div>

      <button className='w-full py-4 mb-7 rounded-xl transition bg-[#81F1F3] hover:bg-[#5ed4d6] text-2xl text-black'>Mint my Pass</button>


     <div className='text-white text-center opacity-80 w-fit max-w-[500px] mx-auto'>
     Please make sure you are connected to the right network 
(BSC Testnet) and the correct address. 
Please note: Once you make the purchase, you cannot undo this action.
<br /><br /><br/>
We have set the gas limit to 285,000 for the contract to successfully mint your NFT. 
We recommend that you don't lower the gas limit.
     </div>






      </div>

      <div><img src="/images/main.svg" alt="main" /></div>

      </div>






      <div className="bg-white px-5 sm:px-7 max-w-[800px] mx-auto text-center mb-10">
          <div className="text-[32px] font-[700] text-[#35B8BE] mx-auto">Watch this video before minting!</div>

          {/* <iframe className='rounded-xl h-[270px] sm:h-[370px] w-full mt-7 mb-5 mx-auto' src="https://www.youtube.com/embed/K4TOrB7at0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <video src="video.mp4"  className='rounded-xl h-[270px] sm:h-[370px] w-full mt-7 mb-5 mx-auto' controls></video>
          <div className="text-[32px] font-[700] text-[#35B8BE] mx-auto">Genesis Pass Benefits</div>

          <div className="opacity-85 mt-3 mx-auto">Owners of the Genesis NFT will get exclusive access to member benefits in the community. We've structured the member benefits depending on how many Genesis NFTs you hold.</div>
 
          <img src="/images/black-drink.svg" alt="drink" className='mx-auto w-full mt-10 mb-6' />

          <div className="grid grid-cols-1 gap-5 sm:gap-0 sm:grid-cols-2 text-left mb-12">
          <div>
          <div className='text-[22px] font-[700]'>One Genesis NFT</div>
           <ul className='list-disc font-[400] mt-3'>
             <li className='mb-5  ml-5 sm:ml-0'>One genesis can will be claimable</li>
             <li className='mb-5  ml-5 sm:ml-0'>Access to the genesis community</li>
           </ul>
          </div>


          <div>
          <div className='text-[22px] font-[700]'>Three Genesis NFTs</div>
           <ul className='list-disc font-[400] mt-3'>
             <li className='mb-5  ml-5 sm:ml-0'>All of the benefits on the left</li>
             <li className='mb-5  ml-5 sm:ml-0'>We will put percentage of our profit from our first & second profitable year, into a Genesis DAO fund</li>
             <li className='mb-5  ml-5 sm:ml-0'>If you own 3 genesis NFTs, you will be able to vote on where to allocate the DAO funds and take part in the benefit</li>
            <li className=' ml-5 sm:ml-0'>We have more products planned. You will be eligible to try any prototypes/ new products before they are released to the public and have exclusive insights</li>


           </ul>
          </div>


          </div>


          <div className="text-[32px] font-[700] text-[#35B8BE] mx-auto">Seven21 Drinks: On-chain Hydration</div>

          <img src="/images/drinks.svg" alt="drinks"  className='mx-auto w-full mt-10 mb-6'/>

          <button className='text-[20px] text-white bg-[#35B8BE] rounded-lg w-full sm:w-[400px] transition hover:bg-[#289fa5] py-2 flex items-center justify-center mx-auto'>Learn More</button>



      </div>



<div className="bg-[#292F30] w-full">
<div className="px-5 sm:px-7 max-w-[1400px] mx-auto pt-3 pb-2">

<div className="text-white opacity-80 text-[23px] text-center mx-auto mt-3">We’re Social - Check us out</div>

<div className="max-w-[600px] mt-8 mb-16 mx-auto flex flex-wrap gap-7 text-center sm:gap-0 items-center justify-between">
  <a href="#" className='w-14 h-14 rounded-full mx-auto text-center flex items-center justify-center bg-[#FBE690]'><img src="/images/discord.svg" className='w-10' alt="discord" /></a>
  <a href="#" className='w-14 h-14 rounded-full mx-auto text-center flex items-center justify-center bg-[#81F1F3]'><img src="/images/twitter.svg" className='w-10' alt="twitter" /></a>
  <a href="#" className='w-14 h-14 rounded-full mx-auto text-center flex items-center justify-center bg-[#FBE690]'><img src="/images/tiktok.svg" className='w-10' alt="tiktok" /></a>
  <a href="#" className='w-14 h-14 rounded-full mx-auto text-center flex items-center justify-center bg-[#FB90D9]'><img src="/images/instagram.svg" className='w-10' alt="instagram" /></a>

</div>

<div className="flex justify-between flex-col gap-5 lg:gap-0 lg:flex-row mb-2">
<div className="cursor-pointer text-center mx-auto lg:text-left lg:mx-0 mb-3 lg:mb-0"><img src="/images/white-logo.svg" alt="logo" /></div>
<div className='text-[18px] font-[400] text-white opacity-80 text-center'>All rights reserved © Copyright 2022 - A Web3 Hippo Project </div>
<a href="#" className='text-[#81F1F3] text-center'>Terms & Conditions</a>
</div>

</div>
</div>
   </>
  );
}

export default App;
