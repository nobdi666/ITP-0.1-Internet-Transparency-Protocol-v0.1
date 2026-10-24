ITP-0.1 Specification - Internet Transparency Protocol

Version: 0.1
Status: Draft
License: Spec is CC0 Public Domain, Code is MIT

Overview

ITP-0.1 is a tiny open standard to make the web more honest. It lets any website declare in a machine-readable way:

Is content made by a human?
Is ranking organic or sponsored?
Was AI used?

No tracking. No central authority. 5 minutes to adopt.

The Two Parts

A. HTTP Headers (for every page)

Web servers SHOULD send:

X-ITP-Origin: human
X-ITP-Rank-Signal: organic
X-ITP-AI: 0

B. Well-Known JSON (for whole domain)

Location MUST be: /.well-known/transparency.json

Example file:

    {
      "itp_version": "0.1",
      "publisher": "Andrea Rae Porter",
      "contentorigindefault": "human",
      "rankingdisclosureurl": "https://example.com/how-we-rank"
    }

Fields

itp_version: required, "0.1"
publisher: required
contentorigindefault: human, ai-assisted, ai-generated, mixed
aitoolsused: optional
last_updated: optional date YYYY-MM-DD

Adoption

Any crawler can GET /.well-known/transparency.json and read the headers.

Feedback via GitHub Issues. PRs welcome.

---

That's it. If you paste exactly that into http://SPEC.md it will work perfectly.

Want me to do the same clean paste for your http://README.md next?