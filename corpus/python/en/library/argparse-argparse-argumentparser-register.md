---
id: "python-en-function-argparse-argumentparser-register"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.register"
signature: "ArgumentParser.register(registry_name, value, object)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.register"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.register

Sometimes it's desirable to use a custom string in error messages to provide
more user-friendly output. In these cases, `register` can be used to
register custom actions or types with a parser and allow you to reference the
type by their registered name instead of their callable name.

The `register` method accepts three arguments - a *registry_name*,
specifying the internal registry where the object will be stored (e.g.,
`action`, `type`), *value*, which is the key under which the object will
be registered, and object, the callable to be registered.

The following example shows how to register a custom type with a parser::

   >>> import argparse
   >>> parser = argparse.ArgumentParser()
   >>> parser.register('type', 'hexadecimal integer', lambda s: int(s, 16))
   >>> parser.add_argument('--foo', type='hexadecimal integer')
   _StoreAction(option_strings=['--foo'], dest='foo', nargs=None, const=None, default=None, type='hexadecimal integer', choices=None, required=False, help=None, metavar=None, deprecated=False)
   >>> parser.parse_args(['--foo', '0xFA'])
   Namespace(foo=250)
   >>> parser.parse_args(['--foo', '1.2'])
   usage: PROG [-h] [--foo FOO]
   PROG: error: argument --foo: invalid 'hexadecimal integer' value: '1.2'
