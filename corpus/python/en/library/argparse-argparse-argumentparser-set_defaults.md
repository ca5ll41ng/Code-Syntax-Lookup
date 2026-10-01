---
id: "python-en-function-argparse-argumentparser-set_defaults"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.set_defaults"
signature: "ArgumentParser.set_defaults(**kwargs)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.set_defaults"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.set_defaults

Most of the time, the attributes of the object returned by `parse_args`
will be fully determined by inspecting the command-line arguments and the argument
actions.  `set_defaults` allows some additional
attributes that are determined without any inspection of the command line to
be added::

  >>> parser = argparse.ArgumentParser()
  >>> parser.add_argument('foo', type=int)
  >>> parser.set_defaults(bar=42, baz='badger')
  >>> parser.parse_args(['736'])
  Namespace(bar=42, baz='badger', foo=736)

Note that defaults can be set at both the parser level using `set_defaults`
and at the argument level using `add_argument`. If both are called for the
same argument, the last default set for an argument is used::

  >>> parser = argparse.ArgumentParser()
  >>> parser.add_argument('--foo', default='bar')
  >>> parser.set_defaults(foo='spam')
  >>> parser.parse_args([])
  Namespace(foo='spam')

Parser-level defaults can be particularly useful when working with multiple
parsers.  See the `~ArgumentParser.add_subparsers` method for an
example of this type.
