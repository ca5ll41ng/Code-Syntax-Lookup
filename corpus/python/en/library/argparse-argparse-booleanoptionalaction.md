---
id: "python-en-function-argparse-booleanoptionalaction"
language: "python"
lang: "en"
category: "function"
name: "BooleanOptionalAction"
directive: "class"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.BooleanOptionalAction"
license: "PSF"
updated: "2026-10-01"
---

# BooleanOptionalAction

A subclass of `Action` for handling boolean flags with positive
and negative options. Adding a single argument such as `--foo` automatically
creates both `--foo` and `--no-foo` options, storing `True` and `False`
respectively::

    >>> import argparse
    >>> parser = argparse.ArgumentParser()
    >>> parser.add_argument('--foo', action=argparse.BooleanOptionalAction)
    >>> parser.parse_args(['--no-foo'])
    Namespace(foo=False)

Single-dash long options are also supported.
For example, negative option `-nofoo` is automatically added for
positive option `-foo`.
But no additional options are added for short options such as `-f`.

> *Added in 3.9*

> *Changed in 3.15*: Added support for single-dash options.  Added support for alternate prefix_chars_.
