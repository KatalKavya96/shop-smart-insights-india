
import { FC, useState } from "react";
import { ArrowRight } from "lucide-react";

const QASection: FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer(null);
    
    // In a real implementation, this would make an API call
    // For now we'll simulate an API response with sample answers
    setTimeout(() => {
      setLoading(false);
      
      const sampleAnswers = [
        "Small shops in India face challenges on major e-commerce platforms due to high commission rates (15-30%), complex seller policies, and intense competition from larger retailers with established logistics networks. The digital marketplace, while growing rapidly in India, favors businesses with scale advantages.",
        "Despite India's digital growth, small sellers struggle because platforms like Amazon prioritize larger sellers who can offer quick shipping and bulk discounts. Additionally, the algorithmic search preferences often benefit established brands with larger marketing budgets for sponsored product placements.",
        "To compete effectively, small Indian retailers should consider niche specialization, improved product photography, strategic pricing, and potentially exploring alternative platforms like Meesho or government-supported initiatives that offer more favorable terms for small businesses."
      ];
      
      // Return a random answer from our samples
      const randomAnswer = sampleAnswers[Math.floor(Math.random() * sampleAnswers.length)];
      setAnswer(randomAnswer);
    }, 1500);
  };

  return (
    <div className="bg-card rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Ask a Question</h3>
      <p className="text-muted-foreground mb-6">
        Get instant insights about small shops and e-commerce challenges in India
      </p>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Why do small shops struggle on Amazon in India?"
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <span>{loading ? "Thinking..." : "Ask"}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>
      
      {loading && (
        <div className="animate-pulse p-4 border rounded-lg">
          <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
        </div>
      )}
      
      {answer && (
        <div className="p-4 border rounded-lg bg-secondary/50 animate-fade-in">
          <h4 className="font-medium mb-2">Answer:</h4>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QASection;
