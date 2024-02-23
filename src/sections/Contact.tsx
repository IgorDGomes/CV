import { PaperPlaneIcon } from "@radix-ui/react-icons";
import emailjs from "@emailjs/browser"

export function Contact() {
    return (
        <div id="contact" className="flex flex-col justify-center items-center py-10 max-w-[1000px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Contact me</h2>
            <form 
                className="flex flex-col items-center justify-center w-full sm:grid sm:grid-cols-2 gap-x-10 gap-y-5 py-16" 
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    const form = event.target as HTMLFormElement;
                    const serviceId = import.meta.env.VITE_SERVICE_ID || '';
                    const templateId = import.meta.env.VITE_TEMPLATE_ID || '';
                    const publicKey = import.meta.env.VITE_PUBLIC_KEY || '';

                    emailjs.sendForm(serviceId, templateId, form, publicKey)
                    }
                }
            >
                <div className="flex flex-col w-[90%] sm:w-full">
                    <label 
                        htmlFor="name" 
                        className="text-lg font-medium"
                    >
                        Your Name:
                    </label>
                    <input 
                        type="text" 
                        name="user_name" 
                        id="name" 
                        className="rounded-md px-5 py-2"
                        required
                    />
                </div>

                <div className="flex flex-col w-[90%] sm:w-full">
                    <label 
                        htmlFor="email-form" 
                        className="text-lg font-medium"
                    >
                        Your Email:
                    </label>
                    <input 
                        type="email" 
                        name="user_email" 
                        id="email-form" 
                        className="rounded-md px-5 py-2" 
                        required
                    />
                </div>

                <div className="flex flex-col w-[90%] sm:w-full col-span-2">
                    <label 
                        htmlFor="message" 
                        className="text-lg font-medium"
                    >
                        Your Message:
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        className="rounded-md px-5 py-2 min-h-[100px]"
                        required
                    />
                </div>
                <div className="flex w-[90%] sm:w-full items-center justify-center col-span-2">
                    <button 
                        className="flex gap-2 items-center py-2 px-3 rounded-lg text-white bg-sky-800/70 hover:bg-sky-800/90"
                        type="submit"
                    >
                        Send Message <PaperPlaneIcon className="size-5" /> 
                    </button>
                </div>
            </form>
        </div>
    )
}