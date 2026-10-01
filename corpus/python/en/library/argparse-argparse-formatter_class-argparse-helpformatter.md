---
id: "python-en-function-argparse-formatter_class-argparse-helpformatter"
language: "python"
lang: "en"
category: "function"
name: "formatter_class=argparse.HelpFormatter, \\"
directive: "class"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.formatter_class=argparse.HelpFormatter, \\"
license: "PSF"
updated: "2026-10-01"
---

# formatter_class=argparse.HelpFormatter, \

Create a new `ArgumentParser` object. All parameters should be passed
as keyword arguments. Each parameter has its own more detailed description
below, but in short they are:

* prog_ - The name of the program (default: generated from the `__main__`
  module attributes and `sys.argv[0]`)

* usage_ - The string describing the program usage (default: generated from
  arguments added to parser)

* description_ - Text to display before the argument help
  (by default, no text)

* epilog_ - Text to display after the argument help (by default, no text)

* parents_ - A list of `ArgumentParser` objects whose arguments should
  also be included

* formatter_class_ - A class for customizing the help output

* prefix_chars_ - The set of characters that prefix optional arguments
  (default: '-')

* fromfile_prefix_chars_ - The set of characters that prefix files from
  which additional arguments should be read (default: `None`)

* argument_default_ - The global default value for arguments
  (default: `None`)

* conflict_handler_ - The strategy for resolving conflicting optionals
  (usually unnecessary)

* add_help_ - Add a `-h/--help` option to the parser (default: `True`)

* allow_abbrev_ - Allows long options to be abbreviated if the
  abbreviation is unambiguous (default: `True`)

* exit_on_error_ - Determines whether or not `ArgumentParser` exits with
  error info when an error occurs. (default: `True`)

* suggest_on_error_ - Enables suggestions for mistyped argument choices
  and subparser names (default: `True`)

* color_ - Allow color output (default: `True`)

> *Changed in 3.5*: *allow_abbrev* parameter was added.

> *Changed in 3.8*: In previous versions, *allow_abbrev* also disabled grouping of short flags such as ``-vv`` to mean ``-v -v``.

> *Changed in 3.9*: *exit_on_error* parameter was added.

> *Changed in 3.14*: *suggest_on_error* and *color* parameters were added.

> *Changed in 3.15*: *suggest_on_error* default changed to ``True``.
