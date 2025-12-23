import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Send, Linkedin, Github, AlertCircle, CheckCircle } from 'lucide-react';

// TODO: PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzERUsdLyEBa9FvtIS-CZz-XCcqCTpPoSpmznb5-ybuRuQipY_rRBvmq75ELzoGqcg/exec';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if URL is configured
    if (GOOGLE_SCRIPT_URL.includes('PASTE_YOUR')) {
      alert("Please configure the Google Script URL in the code first.");
      return;
    }

    setFormState('sending');

    try {
      // We use 'no-cors' mode to send data to Google Scripts without browser security blocks.
      // Note: In 'no-cors', we cannot read the response JSON, but the data will be sent.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormState('sent');
      setFormData({ name: '', email: '', message: '' }); // Clear form

      // Reset button after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-slate-900/50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-5xl font-bold font-display mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-md">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:srbhmishra18@gmail.com" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                srbhmishra18@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/1997-saurabh-mishra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:scale-110 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/srbhmishra18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:scale-110 transition-all"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.namePlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                disabled={formState === 'sending' || formState === 'sent'}
                className={`w-full py-4 rounded-xl font-bold text-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${
                    formState === 'error' 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : formState === 'sent' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-primary text-white hover:bg-blue-600'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    {t.contact.send} <Send size={20} />
                  </>
                )}
                {formState === 'sending' && t.contact.sending}
                {formState === 'sent' && (
                    <>
                        {t.contact.sent} <CheckCircle size={20} />
                    </>
                )}
                {formState === 'error' && (
                    <>
                        Error, Try Again <AlertCircle size={20} />
                    </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;