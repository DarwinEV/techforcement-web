"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useForm } from "react-hook-form"

interface ContactForm {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your business with expert web design and comprehensive business services? Get in touch
              and let's discuss your project.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="h-16 w-16 text-teal-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-300">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-slate-300">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            {...register("name", { required: "Name is required" })}
                            className="bg-slate-700 border-slate-600 text-white mt-1"
                            placeholder="Your full name"
                          />
                          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-slate-300">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                              },
                            })}
                            className="bg-slate-700 border-slate-600 text-white mt-1"
                            placeholder="your@email.com"
                          />
                          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-slate-300">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          className="bg-slate-700 border-slate-600 text-white mt-1"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-slate-300">
                          Service of Interest *
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-slate-700 border-slate-600 text-white mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-slate-600">
                            <SelectItem value="web-design">Web Design & Development</SelectItem>
                            <SelectItem value="seo">SEO & Digital Marketing</SelectItem>
                            <SelectItem value="business-formation">Business Formation</SelectItem>
                            <SelectItem value="google-business">Google Business Profile</SelectItem>
                            <SelectItem value="consulting">Consulting Services</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-slate-300">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          {...register("message", { required: "Message is required" })}
                          className="bg-slate-700 border-slate-600 text-white mt-1 min-h-[120px]"
                          placeholder="Tell us about your project..."
                        />
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-500/20 rounded-lg">
                      <Mail className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-slate-300">hello@techforcement.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-500/20 rounded-lg">
                      <Phone className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-slate-300">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-500/20 rounded-lg">
                      <MapPin className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Service Area</h3>
                      <p className="text-slate-300">All 50 United States</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-500/20 rounded-lg">
                      <Clock className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Business Hours</h3>
                      <p className="text-slate-300">Mon-Fri: 9AM-6PM EST</p>
                      <p className="text-slate-300">Sat-Sun: By appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-teal-600 to-blue-600 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-4">
                    Schedule a free consultation to discuss your project and get a custom quote.
                  </p>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">Schedule Consultation</Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-teal-400 font-semibold mb-1">How long does a typical project take?</h4>
                      <p className="text-slate-300 text-sm">
                        Most websites are completed within 2-4 weeks, depending on complexity and requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-teal-400 font-semibold mb-1">Do you offer ongoing support?</h4>
                      <p className="text-slate-300 text-sm">
                        Yes, we provide maintenance packages and ongoing support for all our clients.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-teal-400 font-semibold mb-1">What's included in your SEO services?</h4>
                      <p className="text-slate-300 text-sm">
                        Our SEO services include keyword research, on-page optimization, local SEO, and monthly
                        reporting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
