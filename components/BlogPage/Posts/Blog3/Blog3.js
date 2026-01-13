import { BaseComponent } from "../../../../app/BaseComponent.js";
import { AppController } from "../../../../app/AppController.js";

export class Blog3 extends BaseComponent {
  #container = null;

  constructor() {
    super();
    this.loadCSS("BlogPost3", "components/BlogPage/Posts/Blog2/Blog3.css");
  }

  render() {
    if (this.#container) {
      return this.#container;
    }

    this.#container = document.createElement("div");
    this.#container.classList.add("blog-post-container");

    this.#setupContainerContent();

    return this.#container;
  }

  #setupContainerContent() {
    const appController = AppController.getInstance();

    this.#container.innerHTML = `
      <button class="back-button">← Back</button>
      <div class="blog-content">
        <h1>How Did a Single Paper Influence the Entire U.S Market?</h1>
        <p>Published: December 21st, 2025</p>
        <p>
The paper titled “Attention is All You Need” published in 2017 made way for the new wave of text generation models. It was the breakthrough needed to give us the popular tools today like ChatGPT, Gemini, and Claude. But just how did a single paper allow for such seemingly exponential improvement?




Image of the Transformer architecture.

This paper from 2017 “Attention is All You Need” has ignited a technological shift so large that the companies building off of its ideas now make up nearly HALF of the S&P 500’s market capitalization. 

But why is this? How could one paper have made such an impact, especially with the added context that the core technology behind this paper has been around since the early 2010s? What exactly changed?






The Problem: Sequential Processing

Before present day LLMs that sit behind names like ChatGPT, Gemini or Claude, we had text generation models built from technology called Recurrent Neural Networks (RNNs), Long Short-Term Memory networks (LSTMs) and Gated Recurrent Units (GRUs), we will cover these here in a moment, but all of these shared a key feature, or now defined as a restriction—sequential processing.

All of these models handled text one word at a time, updating themselves as it moved through an input sequence. They powered early chatbots, machine translation systems, and speech generation tools. But this design created two problems. First, it made training these models very slow. Second, the “memory” these models had of past words faded fast, making it nearly impossible to maintain coherence over long prompts. As a result, these models would often repeat themselves, forgetting earlier context, and struggled to produce any meaningful long-form text.


The figure depicts how the hidden state updates with each word.

More thoroughly defined, Recurrent Neural Networks read in one word at a time, as we said, and tried to keep track of what they were seeing in a single instance, in the form of a “memory” representation. During training, the model learned patterns about what tends to come next. At inference time, it uses only the current memory representation to guess the next word. So it is sort of like scribing a conversation on a sticky note, where you write each word in the center and keep overwriting the last. Soon enough, you cannot tell what was said earlier or even recently, and you lose meaning quickly.

In training, Recurrent Neural Networks would see millions of examples of conversations and learn to predict what the next word would be. Then, in actual use cases like a deployed chatbot, if you entered something it had seen before or similar, it would see that pattern and output what it was rewarded to give during training.

To try to improve these problems, Long Short-Term Memory networks were introduced. These models would use a sort of logic gate; for every new word, it would process and determine if it would change the “memory” or not, based on its importance to the current conversation. It would also look back on what was recently said and determine whether to forget it. To go back to the sticky note, if we only wrote down the important stuff, and erased what was said earlier that is no longer contributing to the current discussion, we can see more context further back than before, but eventually you run into the same problem of a confused “memory”.


The figure breaks down different aspects of the  Long Short-Term Memory network.



The Breakthrough: Attention

Now that we understand where earlier models struggled, we can introduce the breakthrough that changed everything: attention. Although attention was not a new concept, it had been introduced first in 2014. It was used alongside a Recurrent Neural Network, which still limited its abilities. But this paper showed that you don’t need the Recurrent Neural Network anymore, just attention; hence the paper's name. At a high level, attention is quite simple to understand, yet it completely changed how generative models work.

Instead of processing words one at a time and updating a fading memory, attention allows the model to look at all words at once. No longer are we bound by sequential reading and processing; every word can examine every other word and decide how important each one is for understanding the meaning of a sentence.


The figure outlines the input  ‘What Is Your Name, my Name Is Devin’, and looks at the word ‘What’, drawing connections to the input, including itself, on how important each word is to it.

Continuing with our sticky note analogy, a Recurrent Neural Network would keep writing over the previous word, making the memory quickly diminish. Attention now assigns a sticky note to each individual word. Each note is a clear representation (to the model at least) of the context of the given input at that particular word. In the figure above, we see that the word ‘What’ has lines that correlate to importance. In the figure, “Name” has the highest importance relative to “What,” and this relationship is computed for every word in the sequence. These attention-based meanings can then be used for next-word prediction. By examining the final word, “sticky note,” the model can infer the most likely next output, since that word holds the full contextual information of the input through the attention mechanism.


This also removes the bottleneck of sequential processing and replaces it with a system where relationships between words are computed in parallel. The model doesn't try to cram the entire sentence into a single memory representation anymore; it simply refers back to the exact words it needs. This makes it far easier to maintain context across long writings and captures patterns that older models repeatedly lost. Because everything can be processed simultaneously, training becomes much faster and more efficient than with any previous architectures.



Inside the Transformer Architecture

However, even though attention was the main aspect of change here, the paper covers much more in its Transformer architecture. First attention is used again, but in something called multi-head attention. This simply means that the model looks at not only one aspect of its importance in a sentence, but several ways. For example, one ‘head’ may focus on grammatical meaning, another on long-distance connections, and another on small patterns like style. By adding these perspectives, the model builds a richer understanding than a single view could. Transformers also add something called positional encoding, which simply tells the model the order of words in a sentence. Beforehand, this didn’t matter as we were going sequentially, but now with parallel processing of words, we still need to know where words fell in place, because that has high importance.

After we calculate word attention, the model passes these refined versions of each word’s meaning through its feed-forward neural networks; these are small layers that help refine each word’s meaning after attention. The transformer stacks many of these layers on top of each other, allowing later layers to build progressively deeper and more abstract understanding. Early layers may pick up simple patterns, like what words refer to the same thing, while deeper layers may see themes, implied meanings, or structure.

A core part of the Transformer that the paper spends significant time describing is its overall encoder-decoder structure, which organizes how the model reads an input and then generates an output. This architecture was common in earlier translation models, but the Transformer was the first to implement it entirely with attention mechanisms instead of recurrent networks. While we won’t cover this here, this article does a great job outlining each and every part of the entire proposed Transformer architecture and providing visuals for it.




Why It Trained So Much Faster

Another important contribution of the Transformer, emphasized throughout the paper, is how efficiently it can be trained. In other model architectures like Recurrent Neural Networks, they had to process every word step-by-step, which meant training required long, slow passes over huge datasets. 

The Transformer breaks this limitation entirely. Because it looks at all words in parallel, it can use modern GPUs far more effectively. The paper highlights this by comparing training times: models that once required weeks of training could now be trained in a few days. Their largest model trained for English-French transition finished in just 3.5 days on 8 GPUs, which at the time was remarkably fast given its performance. To give a sense of scale, Google’s top translation systems at the time required at least 1-2 weeks on dozens of GPUs. The Transformer achieved better performance in one weekend with far fewer machines. The authors make the point that the base Transformer model beats all previously published Recurrent Neural Network systems while using only a fraction of the training cost. This efficiency is one of the reasons the architecture scaled so far and eventually made enormous models like GPT-3 possible.

Parallelization also meant researchers could explore larger model sizes with more layers, more attention heads, and bigger internal dimensions without waiting unreasonable amounts of time. The paper’s section on model variations demonstrated that increasing model size generally improved performance, another early indication of the scaling capabilities that would define modern LLMs. The Transformer wasn’t just a new model; it was a model that finally benefited from being scaled, something older architectures struggled with.


The Results

The results in the paper showed how powerful this design was. On major translation benchmarks, the Transformer achieved state-of-the-art performance while training far faster and more efficiently than previous models. Even the base model outperformed complex, expensive Recurrent Neural Network systems. The architecture also generalized beyond translation; it performed strongly on grammar parsing tasks, even with minimal task-specific fine-tuning.

In short, the Transformer solved the core limitation of earlier neural networks: slow sequential computation and weak memory. Instead of trying to write on one sticky note until the ink blurred, the Transformer allowed us to start giving every word its own note. That simple shift removed the bottlenecks that held back an entire generation of AI models.

Everything that follows, GPT-2, GPT-3, ChatGPT, Gemini, Llama, Claude etc. traces back to the architecture introduced here, in this paper. These models now power the companies that make up nearly half of the S&P 500’s market capitalization.


        </p>
      </div>
    `;

    // Add event listener to the back button
    const backButton = this.#container.querySelector(".back-button");
    backButton.addEventListener("click", () => {
      console.log("Navigating back to Blog Page");
      appController.navigate("blogPage"); // Navigate back to BlogPage
    });
  }
}
