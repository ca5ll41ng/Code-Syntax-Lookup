---
id: "python-en-syntax-grammar-grammar"
language: "python"
lang: "en"
category: "syntax"
name: "grammar"
title: "Full Grammar specification"
module: "grammar"
source_url: "https://docs.python.org/3/reference/grammar.html"
license: "PSF"
updated: "2026-10-01"
---

# Full Grammar specification

.. _full-grammar-specification:

**Full Grammar specification**

This is the full Python grammar, derived directly from the grammar
used to generate the CPython parser (see `Grammar/python.gram`).
The version here omits details related to code generation and
error recovery.

The notation used here is the same as in the preceding docs,
and is described in the `notation` section,
except for an extra complication:

* `~` ("cut"): commit to the current alternative; fail the rule
  if the alternative fails to parse

  Python mainly uses cuts for optimizations or improved error
  messages. They often appear to be useless in the listing below.

  .. see gh-143054, and CutValidator in the source, if you want to change this:

  Cuts currently don't appear inside parentheses, brackets, lookaheads
  and similar.
  Their behavior in these contexts is deliberately left unspecified.

literalinclude:: ../../Grammar/python.gram
