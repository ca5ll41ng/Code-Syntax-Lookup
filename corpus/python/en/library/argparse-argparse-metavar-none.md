---
id: "python-en-function-argparse-metavar-none"
language: "python"
lang: "en"
category: "function"
name: "metavar=None)"
directive: "class"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.metavar=None)"
license: "PSF"
updated: "2026-10-01"
---

# metavar=None)

`Action` objects are used by an `ArgumentParser` to represent the information
needed to parse a single argument from one or more strings from the
command line. The `Action` class must accept the two positional arguments
plus any keyword arguments passed to `ArgumentParser.add_argument`
except for the `action` itself.

Instances of `Action` (or return value of any callable to the
`action` parameter) should have attributes `dest`,
`option_strings`, `default`, `type`, `required`,
`help`, etc. defined. The easiest way to ensure these attributes
are defined is to call `Action.__init__`.

method:: __call__(parser, namespace, values, option_string=None)

method:: format_usage()
