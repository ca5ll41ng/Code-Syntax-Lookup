---
id: "python-en-function-argparse-argumentparser-add_mutually_exclusive_group"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.add_mutually_exclusive_group"
signature: "ArgumentParser.add_mutually_exclusive_group(required=False)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.add_mutually_exclusive_group"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.add_mutually_exclusive_group

Create a mutually exclusive group. `argparse` will make sure that only
one of the arguments in the mutually exclusive group was present on the
command line::

  >>> parser = argparse.ArgumentParser(prog='PROG')
  >>> group = parser.add_mutually_exclusive_group()
  >>> group.add_argument('--foo', action='store_true')
  >>> group.add_argument('--bar', action='store_false')
  >>> parser.parse_args(['--foo'])
  Namespace(bar=True, foo=True)
  >>> parser.parse_args(['--bar'])
  Namespace(bar=False, foo=False)
  >>> parser.parse_args(['--foo', '--bar'])
  usage: PROG [-h] [--foo | --bar]
  PROG: error: argument --bar: not allowed with argument --foo

The `add_mutually_exclusive_group` method also accepts a *required*
argument, to indicate that at least one of the mutually exclusive arguments
is required::

  >>> parser = argparse.ArgumentParser(prog='PROG')
  >>> group = parser.add_mutually_exclusive_group(required=True)
  >>> group.add_argument('--foo', action='store_true')
  >>> group.add_argument('--bar', action='store_false')
  >>> parser.parse_args([])
  usage: PROG [-h] (--foo | --bar)
  PROG: error: one of the following arguments is required: --foo, --bar

Note that currently mutually exclusive argument groups do not support the
*title* and *description* arguments of
`~ArgumentParser.add_argument_group`. However, a mutually exclusive
group can be added to an argument group that has a title and description.
For example::

  >>> parser = argparse.ArgumentParser(prog='PROG')
  >>> group = parser.add_argument_group('Group title', 'Group description')
  >>> exclusive_group = group.add_mutually_exclusive_group(required=True)
  >>> exclusive_group.add_argument('--foo', help='foo help')
  >>> exclusive_group.add_argument('--bar', help='bar help')
  >>> parser.print_help()
  usage: PROG [-h] (--foo FOO | --bar BAR)

  options:
    -h, --help  show this help message and exit

  Group title:
    Group description

    --foo FOO   foo help
    --bar BAR   bar help

deprecated-removed:: 3.11 3.14
