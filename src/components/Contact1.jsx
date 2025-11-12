import React from 'react'


export default function Contact(){
return (
<div>
<h1 className="text-2xl font-bold">Contact Us</h1>
<p className="mt-2 text-gray-600">Reach out for enquiries, membership or auctions.</p>


<form className="mt-4 max-w-md">
<label className="block">
<span className="text-sm text-gray-700">Name</span>
<input className="mt-1 block w-full rounded border px-3 py-2" placeholder="Your name" />
</label>
<label className="block mt-3">
<span className="text-sm text-gray-700">Email</span>
<input className="mt-1 block w-full rounded border px-3 py-2" placeholder="you@example.com" />
</label>
<label className="block mt-3">
<span className="text-sm text-gray-700">Message</span>
<textarea className="mt-1 block w-full rounded border px-3 py-2" rows={5} />
</label>
<button type="submit" className="mt-3 px-4 py-2 bg-green-700 text-white rounded">Send</button>
</form>
</div>
)
}