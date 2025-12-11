import React, { useEffect, useRef, useState } from 'react';
import rachelImg from './images/rachel.jpg';
import './App.css';

type Source = {
  label: string;
  url: string;
};

const sources: Source[] = [
  {
    label: 'Joy Buolamwini & Timnit Gebru (2018) on biased face tech',
    url: 'https://proceedings.mlr.press/v81/buolamwini18a.html',
  },
  {
    label: 'Sap et al. (2019) The Risk of Racial Bias in Hate Speech Detection',
    url: 'https://aclanthology.org/P19-1163/',
  },
  {
    label: 'Blodgett et al. (2020) survey of bias in NLP',
    url: 'https://aclanthology.org/2020.acl-main.485/',
  },
  {
    label: 'Hovy & Spruit (2016) on social impact of NLP',
    url: 'https://aclanthology.org/P16-2096/',
  },
  {
    label: 'Noble (2018) Algorithms of Oppression (book)',
    url: 'https://safiyaunoble.com/algorithms-of-oppression/',
  },
];

const AudienceCallout = () => (
  <div className="callout">
    <p className="eyebrow">Who is this for?</p>
    <h2>Anyone who uses AI or builds it</h2>
    <p>
      This website does not assume any linguistics or machine learning background. Its purpose is to educate people about the potential threat AI serves to marginalized groups through language bias and discrimination.
    </p>
  </div>
);

const Sources = () => (
  <section className="section">
    <div className="section-header">
      <p className="eyebrow">Want to dig deeper?</p>
      <p className="section-intro">These readings and talks ground the examples above in research on language, technology, and society.</p>
    </div>
    <ul className="sources">
      {sources.map((source) => (
        <li key={source.url}>
          <a href={source.url} target="_blank" rel="noreferrer">
            {source.label}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
};

const Reveal = ({ children, className = '', id, delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

function App() {
  const [showRefs, setShowRefs] = useState(false);

  return (
    <div className="page" id="top">
      <header className="hero">
        <Reveal className="hero-text" delay={50}>
          <p className="eyebrow">Ling Final outreach project</p>
          <h1>How AI can amplify language bias and Discrimination</h1>
          <p className="lede">
            AI moderation learns social bias from its data and labels. Without dialect aware design, it can amplify language bias and discrimination, especially for marginalized groups like African American English (AAE).
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#examples">
              See the example
            </a>
            <a className="button ghost" href="#actions">
              Why it matters
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-card" delay={150}>
          <p className="eyebrow">Quick takeaway</p>
          <p>
            Linguistic discrimination is not just in classrooms or job interviews; it now lives in code. Understanding dialect diversity is a safety feature, not an add on.
          </p>
          <AudienceCallout />
        </Reveal>
      </header>

      <Reveal id="reflection">
        <section className="section story">
          <p className="eyebrow">My perspective</p>
          <h2>From COVID HateBERT to a dialect aware lens</h2>
          <div className="story-grid">
            <div className="text-block">
              <h3>What I did</h3>
              <p>
                In 2022, I coauthored a research paper called “COVID HateBERT,” where we trained and researched an AI model to detect hate speech on Twitter during the peak of the COVID 19 pandemic. We assigned tweets benchmark scores to determine how “toxic” they were, but dialect balance was not on our checklist, and we assumed that more data = better.
              </p>
            </div>
            <div className="text-block">
              <h3>What I failed to see then</h3>
              <p>
                What I failed to see at the time was how this AI training could have perpetuated racial stereotypes, especially towards marginalized groups. As we’ll see later, AI models have been notoriously known to misidentify normal AAVE speech as aggressive and to flag AAVE as syntactically incorrect even though the dialect follows a clear structure.
              </p>
            </div>
            <div className="text-block">
              <h3>My takeaways</h3>
              <p>
                After taking linguistics at Northwestern, I have a better understanding of the harmful effects of prescriptivism and language/dialect discrimination. Poorly derived data and code that enforces bias within AI can trickle down to the population. People tend to trust AI, which is why it’s imperative to partake in measures to reduce this effect, whether it be using special bias free training sets for AI, increasing dataset diversity, or introducing manual human overrides to guide AI in the correct direction.
              </p>
            </div>
          </div>
          <div className="paper-callout">
            <p className="eyebrow">Full paper</p>
            <p>
              If you're interested, this is the full paper: <a href="https://songacademic.github.io/files/2021_ICMLA_COVID-HateBERT.pdf" target="_blank" rel="noreferrer">PDF link</a>
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal id="examples">
        <section className="section story deep-dive">
          <div className="section-header">
            <p className="eyebrow">In depth concrete example</p>
            <p className="section-intro">
              The Risk of Racial Bias in Hate Speech Detection (ACL 2019) showed how dialect gets misread as toxicity and why it happens. Video: <a href="https://aclanthology.org/P19-1163.mp4" target="_blank" rel="noreferrer">ACL talk</a>
            </p>
          </div>
          <div className="story-grid">
            <div className="text-block video-block">
              <h3>Watch the talk</h3>
              <video controls preload="metadata" width="100%" poster="">
                <source src="https://aclanthology.org/P19-1163.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-block">
              <h3>What they did</h3>
              <p>
                Tested popular hate speech datasets and classifiers on tweets, many written in African American English (AAE). Using a 59M tweet corpus with demographic alignment signals, they sampled AAE aligned vs. Standard American English (SAE) tweets and ran four major classifiers.
              </p>
              <p>
                Two of the models, TWT HATEBASE and TWT BOOTSTRAP, mirror the Twitter hate speech pipelines we used. They compared outputs on matched content to isolate dialect effects.
              </p>
              <p>
                They hand checked content to control for actual slurs, so differences reflect dialect, not more hate content.
              </p>
            </div>
            <div className="text-block">
              <h3>What they found</h3>
              <p>
                Tweets in AAE were far more likely to be labeled “toxic” than equivalent tweets in “standard” English, even when content lacked slurs. Dialect features (habitual “be,” copula absence, “finna,” “ion,” “talmbout”) became false signals for hate. Models flagged about 6 to 7 percent of AAE tweets as toxic versus about 2 to 3 percent of SAE tweets, a roughly two times bias even after controlling for slur content.
              </p>
              <p>False positives clustered on AAE markers, not on hateful content.</p>
              <p>
                Models learned bias from data: AAE tweets misunderstood by annotators → labeled as more hateful → models treat AAE markers as toxicity → more AAE gets flagged. A feedback loop of mislabeling → model bias → platform penalties.
              </p>
            </div>
            <div className="text-block">
              <h3>Why it matters</h3>
              <p>
                Over flagging AAE means disproportionate takedowns, shadow bans, or account strikes. It encodes linguistic discrimination into automated moderation, scaling harm. Annotator misunderstanding → dataset bias → model bias → platform penalties. On platforms like Twitter/X, that silences Black online communities and activism; the cost is fewer voices in public discourse.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section story" id="actions">
          <div className="section-header">
            <p className="eyebrow">Overall takeaway & why it matters</p>
          </div>
          <div className="inner-story">
            <div className="text-stack">
            <p>
              As the authors of Change the Game said, Black Language is “regularly censored in American society” (Change the Game, n.d., p. 169). It is important to understand as citizens and as linguists that language is very closely tied to identity, history, race, power, and systems, and to censor one way of speaking is to unfairly silence a group’s rich culture and background (Change the Game, n.d.).
            </p>
            <p>
              The same authors mention how Black English is not a mistake and follows structured syntax, one that is “complex and rich” yet constantly “monitored and maligned by the public sphere” (Change the Game, n.d., p. 169). We see that idea being perpetuated even by artificial intelligence through things like hate speech machine learning models and LLMs (Sap et al., 2019).
            </p>
            <p>
              This idea is painfully evident in the Zimmerman trial. In class, we watched jury members give their thoughts on Rachel Jeantel’s testimony. Many people remarked that she felt disinterested, uneducated, or unprofessional simply because of her speech and deviation from Standard American English, a clear example of linguistic discrimination in the legal system (Rickford & King, 2016). Countless nasty comments were left on the testimony on YouTube, including racist and offensive remarks. Rickford and King’s analysis shows that Jeantel’s speech contained systematic AAVE features (zero copula, absence of third singular s, possessive/plural patterns), demonstrating that her language followed a grammar rather than “broken” English (Rickford & King, 2016).
            </p>
            <p>
              We see how AI tends to mimic real world scenarios, where “correct” language and culture are often linked to whiteness. Eberhardt and Freeman (2015) document how white performers like Iggy Azalea can appropriate features of Black Language and be praised for “authenticity,” while Black speakers using the same forms face mockery and penalty.
            </p>
            <p>
              Coalescing the evidence leads to the conclusion that the language is not the problem; the problem is the ideology that treats Standard American English as the only correct form and views other dialects as inferior. With AI becoming more influential, it is crucial to understand how dataset bias can replicate social prejudices: just as jurors misread Jeantel’s speech, automated systems can misclassify African American speech and thereby contribute to censorship, subjugation, and social division (Sap et al., 2019; Rickford & King, 2016).
            </p>
            </div>
            <div className="image-card">
              <img src={rachelImg} alt="Rachel Jeantel speaking during the trial" />
              <p className="caption">Rachel Jeantel’s testimony was systematically misheard; linguists showed her speech followed AAVE grammar.</p>
            </div>
            <div className="text-block video-block">
              <h3>Watch: prejudice against Rachel Jeantel and AAVE</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/qH-vshQf2g0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section list-section" id="references">
          <div className="section-header refs-header">
            <p className="eyebrow">References</p>
            <button
              type="button"
              className="toggle-button"
              aria-expanded={showRefs}
              onClick={() => setShowRefs((prev) => !prev)}
            >
              <span className="arrow">{showRefs ? '▾' : '▸'}</span>
              {showRefs ? 'Hide' : 'Show'}
            </button>
          </div>
          {showRefs && (
            <ul className="simple-list">
              <li>
                Change the Game. (n.d.). <em>Change the Game: Language, Education, and the Cruel Politics of Racism — “Y’all Don’t Hear Us Though: Recognizing the Complexity and Richness of Black Language.”</em>{' '}
                Retrieved from https://politicsoflanguage.voices.wooster.edu/wp-content/uploads/sites/111/2017/12/Change-the-Game.pdf
              </li>
              <li>
                Eberhardt, M., & Freeman, K. (2015). “First things first, I’m the realest”: Linguistic appropriation, white privilege, and the hip hop persona of Iggy Azalea. <em>Journal of Sociolinguistics, 19</em>(3), 303–327. https://doi.org/10.1111/josl.12128
              </li>
              <li>
                Rickford, J. R., & King, S. (2016). Language and linguistics on trial: Hearing Rachel Jeantel (and other vernacular speakers) in the courtroom and beyond. <em>Language, 92</em>(4), 948–988. https://doi.org/10.1353/lan.2016.0078
              </li>
              <li>
                Sap, M., Card, D., Gabriel, S., Choi, Y., & Smith, N. A. (2019). The risk of racial bias in hate speech detection. In <em>Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics</em> (pp. 1668–1678). https://doi.org/10.18653/v1/P19-1163
              </li>
            </ul>
          )}
        </section>
      </Reveal>

      <footer className="footer">
        <div>
          <p className="eyebrow">Take action</p>
          <p>Ask your AI tools: how do they handle dialect diversity, what audits exist, and how can users report harm?</p>
        </div>
        <a className="button ghost" href="#top">
          Back to top
        </a>
      </footer>
    </div>
  );
}

export default App;

