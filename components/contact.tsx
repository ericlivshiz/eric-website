'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null,
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to submit form')

      setFormData({ name: '', email: '', message: '' })
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you soon.'
      })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300 border border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300 border border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300 border border-transparent transition-all duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-indigo-400 hover:bg-indigo-500 text-white font-semibold rounded-md transition-colors flex items-center justify-center disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <Send size={18} className="ml-2" />}
          </button>
        </form>
        {submitStatus.type && (
          <div className={`mt-4 p-4 rounded-md ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </div>
    </section>
  )
}
