---
id: "python-en-function-poplib-pop3-dele"
language: "python"
lang: "en"
category: "function"
name: "POP3.dele"
signature: "POP3.dele(which)"
directive: "method"
module: "poplib"
source_url: "https://docs.python.org/3/library/poplib.html#poplib.POP3.dele"
license: "PSF"
updated: "2026-10-01"
---

# POP3.dele

Flag message number *which* for deletion.  On most servers deletions are not
actually performed until QUIT (the major exception is Eudora QPOP, which
deliberately violates the RFCs by doing pending deletes on any disconnect).
