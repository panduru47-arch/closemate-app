'use client';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [leadName, setLeadName] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message || !leadName) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          leadName
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setAiResponse(data.response);
      }
    } catch (error) {
      console.error('Error:', error);
      setAiResponse('❌ An error occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center text-white mb-8">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-4xl font-bold mb-4">Closemate AI</h1>
          <p className="text-xl">Autonomous Sales Agent</p>
        </div>

        {/* Test Interface */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">🧪 Test AI Assistant</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm mb-2">Lead Name:</label>
              <input
                type="text"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                placeholder="Ex: John Smith"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
              />
            </div>
            
            <div>
              <label className="block text-white text-sm mb-2">Lead's Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ex: Hi! I'm interested in your services. Can you help me?"
                rows={3}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 resize-none"
              />
            </div>

            <button
              onClick={handleSendMessage}
              disabled={loading || !message || !leadName}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              {loading ? '⏳ Generating response...' : '✨ Generate AI Response'}
            </button>
          </div>
        </div>

        {/* AI Response Display */}
        {aiResponse && (
          <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">🤖 AI Response:</h3>
            <div className="bg-black/20 rounded-lg p-4">
              <p className="text-white whitespace-pre-wrap">{aiResponse}</p>
            </div>
          </div>
        )}

        {/* Features Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">🚀 Coming Soon:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">💬 AI Message Generator</h4>
              <p className="text-sm">Smart responses for every customer</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">📊 Lead Management</h4>
              <p className="text-sm">Organize and track all your leads</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">📧 Email & WhatsApp</h4>
              <p className="text-sm">Automated follow-ups</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">📈 Daily Reports</h4>
              <p className="text-sm">Performance analytics</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/70 text-sm">
          <p>Your autonomous sales assistant for the global market 💙</p>
        </div>
      </div>
    </div>
  );
}
