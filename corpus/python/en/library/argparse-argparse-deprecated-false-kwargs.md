---
id: "python-en-function-argparse-deprecated-false-kwargs"
language: "python"
lang: "en"
category: "function"
name: "deprecated=False, **kwargs)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.deprecated=False, **kwargs)"
license: "PSF"
updated: "2026-10-01"
---

# deprecated=False, **kwargs)

Create and return a new `ArgumentParser` object for the
subcommand *name*.

The *name* argument is the name of the sub-command.

The *help* argument provides a short description for this sub-command.

The *aliases* argument allows providing alternative names for this
sub-command. For example::

   >>> parser = argparse.ArgumentParser()
   >>> subparsers = parser.add_subparsers()
   >>> checkout = subparsers.add_parser('checkout', aliases=['co'])
   >>> checkout.add_argument('foo')
   >>> parser.parse_args(['co', 'bar'])
   Namespace(foo='bar')

The *deprecated* argument, if `True`, marks the sub-command as
deprecated and will issue a warning when used. For example::

   >>> parser = argparse.ArgumentParser(prog='chicken.py')
   >>> subparsers = parser.add_subparsers()
   >>> fly = subparsers.add_parser('fly', deprecated=True)
   >>> args = parser.parse_args(['fly'])
   chicken.py: warning: command 'fly' is deprecated
   Namespace()

All other keyword arguments are passed directly to the
`ArgumentParser` constructor.

> *Added in 3.13*: Added the *deprecated* parameter.
