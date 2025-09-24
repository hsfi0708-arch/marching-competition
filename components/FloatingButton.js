export default function FloatingButton() {
  return (
    <a
      href="https://forms.gle/your-google-form-id"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 animate-bounce"
      id="evaluation"
    >
      Evaluation Form
    </a>
  );
}