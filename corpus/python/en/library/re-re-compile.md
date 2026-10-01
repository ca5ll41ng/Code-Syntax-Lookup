---
id: "python-en-function-re-compile"
language: "python"
lang: "en"
category: "function"
name: "compile"
signature: "compile(pattern, flags=0)"
directive: "function"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.compile"
license: "PSF"
updated: "2026-10-01"
---

# compile

Compile a regular expression pattern into a `regular expression object`, which can be used for matching using its
`~Pattern.prefixmatch`,
`~Pattern.search`, and other methods, described below.

The expression's behaviour can be modified by specifying a *flags* value.
Values can be any of the `flags`_ variables, combined using bitwise OR
(the `|` operator).

The sequence ::

   prog = re.compile(pattern)
   result = prog.search(string)

is equivalent to ::

   result = re.search(pattern, string)

but using `re.compile` and saving the resulting regular expression
object for reuse is more efficient when the expression will be used several
times in a single program.

> **Note**
>
> The compiled versions of the most recent patterns passed to
> `re.compile` and the module-level matching functions are cached, so
> programs that use only a few regular expressions at a time needn't worry
> about compiling regular expressions.
>
