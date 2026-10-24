ITP-0.1 — Internet Transparency Protocol

An open, 5-minute standard for honesty online.

3 headers + 1 JSON file lets any site declare: human-made, organic rank, AI use.

What is it?

Like http://robots.txt, but for transparency. Lets browsers and search engines reward human-made content.

Spec: See http://SPEC.md
File: /.well-known/transparency.json
Headers: X-ITP-Origin, X-ITP-Rank-Signal, X-ITP-AI

Example

    {
      "itp_version": "0.1",
      "publisher": "Andrea Rae Porter",
      "contentorigindefault": "human"
    }

Adopt

Create /.well-known/transparency.json
Add 3 headers to your site
Link to your disclosure pages

License: MIT for code, CC0 for spec text.

Built by Andi Nobdi — open for comment.