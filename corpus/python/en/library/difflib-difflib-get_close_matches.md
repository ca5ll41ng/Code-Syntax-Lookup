---
id: "python-en-function-difflib-get_close_matches"
language: "python"
lang: "en"
category: "function"
name: "get_close_matches"
signature: "get_close_matches(word, possibilities, n=3, cutoff=0.6, *, autojunk=True)"
directive: "function"
module: "difflib"
source_url: "https://docs.python.org/3/library/difflib.html#difflib.get_close_matches"
license: "PSF"
updated: "2026-10-01"
---

# get_close_matches

Return a list of the best "good enough" matches.  *word* is a sequence for which
close matches are desired (typically a string), and *possibilities* is a list of
sequences against which to match *word* (typically a list of strings).

Optional argument *n* (default `3`) is the maximum number of close matches to
return; *n* must be greater than `0`.

Optional argument *cutoff* (default `0.6`) is a float in the range [0, 1].
Possibilities that don't score at least that similar to *word* are ignored.

Setting the optional *autojunk* argument to `False` will turn
`automatic junk heuristic` off.

The best (no more than *n*) matches among the possibilities are returned in a
list, sorted by similarity score, most similar first.

   >>> get_close_matches('appel', ['ape', 'apple', 'peach', 'puppy'])
   ['apple', 'ape']
   >>> import keyword
   >>> get_close_matches('wheel', keyword.kwlist)
   ['while']
   >>> get_close_matches('pineapple', keyword.kwlist)
   []
   >>> get_close_matches('accept', keyword.kwlist)
   ['except']

> *Changed in 3.16*: Added keyword-only *autojunk* parameter.
