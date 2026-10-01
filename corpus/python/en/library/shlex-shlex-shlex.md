---
id: "python-en-function-shlex-shlex"
language: "python"
lang: "en"
category: "function"
name: "shlex"
title: "Parsing Rules"
directive: "module"
module: "shlex"
source_url: "https://docs.python.org/3/library/shlex.html#module-shlex"
license: "PSF"
updated: "2026-10-01"
---

# Parsing Rules

.. _shlex-parsing-rules:

**Parsing Rules**

When operating in non-POSIX mode, `~shlex.shlex` will try to obey the
following rules.

* Quote characters are not recognized within words (`Do"Not"Separate` is
  parsed as the single word `Do"Not"Separate`);

* Escape characters are not recognized;

* Enclosing characters in quotes preserve the literal value of all characters
  within the quotes;

* Closing quotes separate words (`"Do"Separate` is parsed as `"Do"` and
  `Separate`);

* If `~shlex.whitespace_split` is `False`, any character not
  declared to be a word character, whitespace, or a quote will be returned as
  a single-character token. If it is `True`, `~shlex.shlex` will only
  split words in whitespaces;

* EOF is signaled with an empty string (`''`);

* It's not possible to parse empty strings, even if quoted.

When operating in POSIX mode, `~shlex.shlex` will try to obey the
following parsing rules.

* Quotes are stripped out, and do not separate words (`"Do"Not"Separate"` is
  parsed as the single word `DoNotSeparate`);

* Non-quoted escape characters (e.g. `'\'`) preserve the literal value of the
  next character that follows;

* Enclosing characters in quotes which are not part of
  `~shlex.escapedquotes` (e.g. `"'"`) preserve the literal value
  of all characters within the quotes;

* Enclosing characters in quotes which are part of
  `~shlex.escapedquotes` (e.g. `'"'`) preserves the literal value
  of all characters within the quotes, with the exception of the characters
  mentioned in `~shlex.escape`.  The escape characters retain their
  special meaning only when followed by the quote in use, or the escape
  character itself. Otherwise the escape character will be considered a
  normal character.

* EOF is signaled with a `None` value;

* Quoted empty strings (`''`) are allowed.

.. _improved-shell-compatibility:

**Improved Compatibility with Shells**

> *Added in 3.6*

The `shlex` class provides compatibility with the parsing performed by
common Unix shells like `bash`, `dash`, and `sh`.  To take advantage of
this compatibility, specify the `punctuation_chars` argument in the
constructor.  This defaults to `False`, which preserves pre-3.6 behaviour.
However, if it is set to `True`, then parsing of the characters `();<>|&`
is changed: any run of these characters is returned as a single token.  While
this is short of a full parser for shells (which would be out of scope for the
standard library, given the multiplicity of shells out there), it does allow
you to perform processing of command lines more easily than you could
otherwise.  To illustrate, you can see the difference in the following snippet:

```python
:options: +NORMALIZE_WHITESPACE

>>> import shlex
>>> text = "a && b; c && d || e; f >'abc'; (def \"ghi\")"
>>> s = shlex.shlex(text, posix=True)
>>> s.whitespace_split = True
>>> list(s)
['a', '&&', 'b;', 'c', '&&', 'd', '||', 'e;', 'f', '>abc;', '(def', 'ghi)']
>>> s = shlex.shlex(text, posix=True, punctuation_chars=True)
>>> s.whitespace_split = True
>>> list(s)
['a', '&&', 'b', ';', 'c', '&&', 'd', '||', 'e', ';', 'f', '>', 'abc', ';',
'(', 'def', 'ghi', ')']
```

Of course, tokens will be returned which are not valid for shells, and you'll
need to implement your own error checks on the returned tokens.

Instead of passing `True` as the value for the punctuation_chars parameter,
you can pass a string with specific characters, which will be used to determine
which characters constitute punctuation. For example::

   >>> import shlex
   >>> s = shlex.shlex("a && b  c", punctuation_chars="")
   >>> list(s)
   ['a', '&', '&', 'b', '|', 'c']

> **Note**
>
> attribute is augmented with the characters `~-./*?=`.  That is because these
> characters can appear in file names (including wildcards) and command-line
> arguments (e.g. `--color=auto`). Hence::
>
>    >>> import shlex
>    >>> s = shlex.shlex('~/a && b-c --color=auto  d *.py?',
>    ...                 punctuation_chars=True)
>    >>> list(s)
>    ['~/a', '&&', 'b-c', '--color=auto', '', 'd', '*.py?']
>
> However, to match the shell as closely as possible, it is recommended to
> always use `posix` and `~shlex.whitespace_split` when using
> `~shlex.punctuation_chars`, which will negate
> `~shlex.wordchars` entirely.
>

For best effect, `punctuation_chars` should be set in conjunction with
`posix=True`. (Note that `posix=False` is the default for
`~shlex.shlex`.)
