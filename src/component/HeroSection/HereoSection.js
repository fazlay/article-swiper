import React from 'react'

const HereoSection = () => {
    return (
        <div  className='text-left pl-16 py-8'
        style={{
            backgroundImage:
              "url( 'https://images.pexels.com/photos/9513973/pexels-photo-9513973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' )",
            backgroundBlendMode: "multiply",
          }}>
            <h1 className='text-slate-200'>By Robin Hrdner</h1>
            <h1 className='text-6xl text-slate-100 font-extrabold'>What is Black Lives Matter?</h1>
            <p className='text-4xl text-slate-100 font-light mr-16'>
            Black Lives Matter is a phrase, and notably a hashtag, used to highlight racism, discrimination and inequality experienced by black people.

           </p>
            <button className="rounded-full bg-slate-100 hover:bg-slate-400 hover:text-white  px-4 py-2  my-16">READ MORE </button>
        </div>
    )
}

export default HereoSection
