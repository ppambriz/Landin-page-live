import { Button } from "./Button"

export const Form = () => {
  return (
    <div className="text-center py-10 px-6 bg-navy-850 rouded-[9px] w-[336px] mx-auto absolute top-[-200px] left-0 right-0">

        <h2 className="font-bold mb-4 text-[1.25rem]">Get early access today</h2>

        <p className="text-sm mb-8">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

        <form className="flex flex-col  gap-6" action="">
            <input 
            className="bg-white rounded-3xl placeholder:text-gray-400 text-center h-12" 
            placeholder="email@example.com"
            type="email" />
            <Button text="Get Started For Free" />
        </form>
    </div>
  )
}
