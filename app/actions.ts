"use server"

export async function sendContactEmail(prevState: any, formData: FormData) {
  try {
    // Check if formData exists
    if (!formData) {
      return {
        success: false,
        message: "Form data is missing. Please try again.",
      }
    }

    const firstName = formData.get("firstName")?.toString() || ""
    const lastName = formData.get("lastName")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const subject = formData.get("subject")?.toString() || ""
    const message = formData.get("message")?.toString() || ""

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Portfolio Website

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `.trim()

    // Log the submission (for debugging)
    console.log("Contact form submitted:", {
      firstName,
      lastName,
      email,
      subject,
      message: message.substring(0, 100) + "...",
    })

    // Create mailto link for fallback
    const mailtoLink = `mailto:smohsin223@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${subject}`,
    )}&body=${encodeURIComponent(emailContent)}`

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
      mailtoLink,
    }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact me directly.",
    }
  }
}
