"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { sendContactEmail } from "./actions"

export function ContactForm() {
  const [state, action, isPending] = useActionState(sendContactEmail, {
    success: false,
    message: "",
  })

  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8">
        <form action={action} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <Input id="firstName" name="firstName" placeholder="John" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <Input id="lastName" name="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <Input id="subject" name="subject" placeholder="Project Discussion" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <Textarea id="message" name="message" rows={4} placeholder="Tell me about your project..." required />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
          >
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {state && (
          <div
            className={`mt-4 p-4 rounded-lg ${state.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            <p>{state.message}</p>
            {state.success && state.mailtoLink && (
              <div className="mt-2">
                <a href={state.mailtoLink} className="text-blue-600 hover:text-blue-800 underline">
                  Click here to open your email client
                </a>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
