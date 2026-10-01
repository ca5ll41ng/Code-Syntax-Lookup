---
id: "python-en-function-argparse-argumentparser-add_argument_group-title-none-description-none"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.add_argument_group(title=None, description=None, *, \\"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.add_argument_group(title=None, description=None, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.add_argument_group(title=None, description=None, *, \

By default, `ArgumentParser` groups command-line arguments into
"positional arguments" and "options" when displaying help
messages. When there is a better conceptual grouping of arguments than this
default one, appropriate groups can be created using the
`add_argument_group` method::

  >>> parser = argparse.ArgumentParser(prog='PROG', add_help=False)
  >>> group = parser.add_argument_group('group')
  >>> group.add_argument('--foo', help='foo help')
  >>> group.add_argument('bar', help='bar help')
  >>> parser.print_help()
  usage: PROG [--foo FOO] bar

  group:
    bar    bar help
    --foo FOO  foo help

The `add_argument_group` method returns an argument group object which
has an `~ArgumentParser.add_argument` method just like a regular
`ArgumentParser`.  When an argument is added to the group, the parser
treats it just like a normal argument, but displays the argument in a
separate group for help messages.  The `add_argument_group` method
accepts *title* and *description* arguments which can be used to
customize this display::

  >>> parser = argparse.ArgumentParser(prog='PROG', add_help=False)
  >>> group1 = parser.add_argument_group('group1', 'group1 description')
  >>> group1.add_argument('foo', help='foo help')
  >>> group2 = parser.add_argument_group('group2', 'group2 description')
  >>> group2.add_argument('--bar', help='bar help')
  >>> parser.print_help()
  usage: PROG [--bar BAR] foo

  group1:
    group1 description

    foo    foo help

  group2:
    group2 description

    --bar BAR  bar help

The optional, keyword-only parameters argument_default_ and conflict_handler_
allow for finer-grained control of the behavior of the argument group. These
parameters have the same meaning as in the `ArgumentParser` constructor,
but apply specifically to the argument group rather than the entire parser.

Note that any arguments not in your user-defined groups will end up back
in the usual "positional arguments" and "optional arguments" sections.

Within each argument group, arguments are displayed in help output in the
order in which they are added.

deprecated-removed:: 3.11 3.14

> *Deprecated since 3.14*: Passing prefix_chars_ to :meth:`add_argument_group` is now deprecated.
