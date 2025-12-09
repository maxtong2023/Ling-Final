import './App.css';

type Card = {
  title: string;
  body: string;
};

type Source = {
  label: string;
  url: string;
};

const biasExamples: Card[] = [
  {
    title: 'Voice assistants',
    body: 'Early systems like Siri or Alexa struggled with accents outside General American English and certain varieties of English, often mishearing Black or Chicano English. That reflects the data and tuning choices that prioritized some speakers over others.',
  },
  {
    title: 'Content moderation',
    body: 'Toxicity detectors sometimes flag African American English or reclaimed slurs as harmful while letting subtle hate speech slide. Language models learn both community norms and societal biases from the data they see.',
  },
  {
    title: 'Hiring filters',
    body: 'Resume screeners and chatbots can rank candidates lower if their wording, names, or education markers differ from the majority profile in the training data, reinforcing existing discrimination.',
  },
];

const languageAngles: Card[] = [
  {
    title: 'Language is social',
    body: 'Ways of speaking index region, race, gender, and community. When AI learns language, it also picks up social meanings and stereotypes embedded in the data.',
  },
  {
    title: 'Prescriptivism sneaks in',
    body: 'Systems often treat one variety (e.g., “standard” English) as correct. That can label other varieties as errors, echoing old prescriptive attitudes rather than linguistic reality.',
  },
  {
    title: 'Who is the audience?',
    body: 'Design choices assume certain users. If training and testing do not include diverse audiences, AI ends up optimized for some people and frustrating or harmful for others.',
  },
];

const actions: Card[] = [
  {
    title: 'Diversify data and reviewers',
    body: 'Include dialect-rich, multilingual data and pay community reviewers to flag harms. Representation needs to be built, not assumed.',
  },
  {
    title: 'Measure bias directly',
    body: 'Audit models for misrecognition rates, false positives, and stereotype completions across dialects and identities. Publish the numbers.',
  },
  {
    title: 'Offer user control',
    body: 'Let people switch language settings, pick pronouns, or correct the model easily. Small UX choices signal that multiple voices belong.',
  },
  {
    title: 'Slow down high-stakes use',
    body: 'Avoid deploying generative AI where errors amplify discrimination (e.g., policing, immigration, welfare) without safeguards, human oversight, and appeal routes.',
  },
];

const glossary: Card[] = [
  {
    title: 'Bias (in AI)',
    body: 'Systematic patterns where a model treats groups differently. Comes from data, modeling choices, or deployment context.',
  },
  {
    title: 'Dialect',
    body: 'A rule-governed variety of a language. All dialects are valid; “standard” is just the socially powerful one.',
  },
  {
    title: 'Linguistic discrimination',
    body: 'Unfair treatment based on how someone speaks or writes. When AI encodes it, the harm scales quickly.',
  },
  {
    title: 'Prescriptivism',
    body: 'Belief that only one way to speak/write is correct. AI systems can encode this when trained on narrow norms.',
  },
];

const sources: Source[] = [
  {
    label: 'Joy Buolamwini & Timnit Gebru (2018) on biased face tech',
    url: 'https://proceedings.mlr.press/v81/buolamwini18a.html',
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
    <h2>Anyone who uses AI—or builds it</h2>
    <p>
      This site assumes no linguistics background. It links everyday AI experiences to sociolinguistic concepts so people can spot bias and push for fairer tools.
    </p>
  </div>
);

const CardsGrid = ({ title, intro, items }: { title: string; intro?: string; items: Card[] }) => (
  <section className="section">
    <div className="section-header">
      <p className="eyebrow">{title}</p>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
    <div className="grid">
      {items.map((item) => (
        <article key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  </section>
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

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-text">
          <p className="eyebrow">Language in society × AI</p>
          <h1>How AI can amplify language bias</h1>
          <p className="lede">
            Speech and text systems learn from human data—and our data is social. That means AI can reproduce discrimination against dialects, accents, and identities unless we design against it.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#examples">
              See the examples
            </a>
            <a className="button ghost" href="#actions">
              What we can do
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p className="eyebrow">Quick takeaway</p>
          <p>
            Linguistic discrimination is not just in classrooms or job interviews—it now lives in code. Understanding dialect diversity is a safety feature, not an add-on.
          </p>
          <AudienceCallout />
        </div>
      </header>

      <CardsGrid
        title="Concrete examples"
        intro="Real products show how bias shows up in speech, writing, and moderation systems."
        items={biasExamples}
      />

      <CardsGrid
        title="Why linguistics matters"
        intro="Sociolinguistics explains why AI picks up social meanings from language data."
        items={languageAngles}
      />

      <section className="section" id="actions">
        <div className="section-header">
          <p className="eyebrow">Design for inclusion</p>
          <p className="section-intro">Preventing bias means changing data, metrics, and everyday UX decisions.</p>
        </div>
        <div className="grid">
          {actions.map((item) => (
            <article key={item.title} className="card actionable">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="glossary">
        <div className="section-header">
          <p className="eyebrow">Glossary</p>
          <p className="section-intro">Jargon-free definitions to keep the conversation clear.</p>
        </div>
        <div className="grid glossary">
          {glossary.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Sources />

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

