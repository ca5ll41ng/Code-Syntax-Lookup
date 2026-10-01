---
id: "python-en-function-argparse-argumentparser-parse_known_args"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.parse_known_args"
signature: "ArgumentParser.parse_known_args(args=None, namespace=None)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.parse_known_args"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.parse_known_args

Sometimes a script only needs to handle a specific set of command-line
arguments, leaving any unrecognized arguments for another script or program.
In these cases, the `~ArgumentParser.parse_known_args` method can be
useful.

This method works similarly to `~ArgumentParser.parse_args`, but it does
not raise an error for extra, unrecognized arguments. Instead, it parses the
known arguments and returns a two item tuple that contains the populated
namespace and the list of any unrecognized arguments.

::

   >>> parser = argparse.ArgumentParser()
   >>> parser.add_argument('--foo', action='store_true')
   >>> parser.add_argument('bar')
   >>> parser.parse_known_args(['--foo', '--badger', 'BAR', 'spam'])
   (Namespace(bar='BAR', foo=True), ['--badger', 'spam'])
