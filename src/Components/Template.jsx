import '../index.css'
export default function Template({heading,subheading,subheading_blue}){
    return(
        <div className='text-richblack-25'>
            <div className='text-3xl text-white mb-6'>{heading}</div>
            <div className='text-xl'>{subheading}</div>
            <div className='text-blue-400 italic text-xl mb-6'>{subheading_blue}</div>
        </div>
    )
}