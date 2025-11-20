export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-4xl font-bold mb-4">Closemate App</h1>
          <p className="text-xl mb-6">AI Sales Agent is READY! 🎉</p>
          
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-semibold mb-2">✅ SUCCESS!</h2>
            <p className="text-sm">Closemate App deployed successfully!</p>
          </div>

          <div className="text-left text-sm bg-black/20 rounded-lg p-4">
            <h3 className="font-semibold mb-2">🚀 Coming Soon:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>AI Message Generator</li>
              <li>Lead Management</li>
              <li>Email & WhatsApp Integration</li>
              <li>Daily Reports</li>
              <li>Calendar Scheduling</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-white/70">
          <p>Your intelligent sales assistant 💙</p>
        </div>
      </div>
    </div>
  )
}
