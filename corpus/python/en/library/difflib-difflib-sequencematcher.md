---
id: "python-en-function-difflib-sequencematcher"
language: "python"
lang: "en"
category: "function"
name: "SequenceMatcher"
signature: "SequenceMatcher(isjunk=None, a='', b='', autojunk=True)"
directive: "class"
module: "difflib"
source_url: "https://docs.python.org/3/library/difflib.html#difflib.SequenceMatcher"
license: "PSF"
updated: "2026-10-01"
---

# SequenceMatcher

Optional argument *isjunk* must be `None` (the default) or a one-argument
function that takes a sequence element and returns true if and only if the
element is "junk" and should be ignored. Passing `None` for *isjunk* is
equivalent to passing `lambda x: False`; in other words, no elements are ignored.
For example, pass::

   lambda x: x in " \t"

if you're comparing lines as sequences of characters, and don't want to synch up
on blanks or hard tabs.

The optional arguments *a* and *b* are sequences to be compared; both default to
empty strings.  The elements of both sequences must be `hashable`.

The optional argument *autojunk* can be used to disable the automatic junk
heuristic.

> *Changed in 3.2*: Added the *autojunk* parameter.

SequenceMatcher objects get three data attributes: *bjunk* is the
set of elements of *b* for which *isjunk* is `True`; *bpopular* is the set of
non-junk elements considered popular by the heuristic (if it is not
disabled); *b2j* is a dict mapping the remaining elements of *b* to a list
of positions where they occur. All three are reset whenever *b* is reset
with `set_seqs` or `set_seq2`.

> *Added in 3.2*: The *bjunk* and *bpopular* attributes.

`SequenceMatcher` objects have the following methods:

method:: set_seqs(a, b)

`SequenceMatcher` computes and caches detailed information about the
second sequence, so if you want to compare one sequence against many
sequences, use `set_seq2` to set the commonly used sequence once and
call `set_seq1` repeatedly, once for each of the other sequences.

method:: set_seq1(a)

method:: set_seq2(b)

method:: find_longest_match(alo=0, ahi=None, blo=0, bhi=None)

method:: get_matching_blocks()

method:: get_opcodes()

method:: get_grouped_opcodes(n=3)

method:: ratio()

method:: quick_ratio()

method:: real_quick_ratio()
