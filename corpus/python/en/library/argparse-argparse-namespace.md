---
id: "python-en-function-argparse-namespace"
language: "python"
lang: "en"
category: "function"
name: "Namespace"
directive: "class"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.Namespace"
license: "PSF"
updated: "2026-10-01"
---

# Namespace

Simple class used by default by `~ArgumentParser.parse_args` to create
an object holding attributes and return it.

`Namespace` objects support `copy.replace`,
which returns a copy of the object with the specified attributes replaced.

> *Changed in next*: Added support for :func:`copy.replace`.

This class is deliberately simple, just an `object` subclass with a
readable string representation. If you prefer to have dict-like view of the
attributes, you can use the standard Python idiom, `vars`::

   >>> parser = argparse.ArgumentParser()
   >>> parser.add_argument('--foo')
   >>> args = parser.parse_args(['--foo', 'BAR'])
   >>> vars(args)
   {'foo': 'BAR'}

It may also be useful to have an `ArgumentParser` assign attributes to an
already existing object, rather than a new `Namespace` object.  This can
be achieved by specifying the `namespace=` keyword argument::

   >>> class C:
   ...     pass
   ...
   >>> c = C()
   >>> parser = argparse.ArgumentParser()
   >>> parser.add_argument('--foo')
   >>> parser.parse_args(args=['--foo', 'BAR'], namespace=c)
   >>> c.foo
   'BAR'
