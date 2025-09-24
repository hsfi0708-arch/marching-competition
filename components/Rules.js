const rules = [
  "All participants must be enrolled students.",
  "Teams should consist of 10-20 members.",
  "Uniforms should reflect school colors (red & white).",
  "Judges’ decisions are final.",
  "No dangerous props allowed.",
  // Add more rules
];

export default function Rules() {
  return (
    <section id="rules" className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Competition Rules</h2>
      <ul className="space-y-4 text-lg animate-fadeIn delay-200">
        {rules.map((rule, idx) => (
          <li key={idx} className="flex items-start">
            <span className="inline-block w-6 h-6 bg-red-400 rounded-full mr-3 text-white text-center font-bold">{idx+1}</span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}