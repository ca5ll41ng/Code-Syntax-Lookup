---
id: "python-zh-function-argparse-dest-required"
language: "python"
lang: "zh"
category: "function"
name: "[dest], [required], \\"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/zh-cn/3/library/argparse.html#argparse.[dest], [required], \\"
license: "PSF"
updated: "2026-10-01"
---

# [dest], [required], \

Many programs split up their functionality into a number of subcommands,
for example, the `svn` program can invoke subcommands like `svn
checkout`, `svn update`, and `svn commit`.  Splitting up functionality
this way can be a particularly good idea when a program performs several
different functions which require different kinds of command-line arguments.
`ArgumentParser` supports the creation of such subcommands with the
`add_subparsers` method.  The `add_subparsers` method is normally
called with no arguments and returns a special action object.  This object
has a single method, `~_SubParsersAction.add_parser`, which takes a
command name and any `ArgumentParser` constructor arguments, and
returns an `ArgumentParser` object that can be modified as usual.

形参的描述

* *title* - title for the sub-parser group in help output; by default
  "subcommands" if description is provided, otherwise uses title for
  positional arguments

* *description* - description for the sub-parser group in help output, by
  default `None`

* *prog* - usage information that will be displayed with subcommand help,
  by default the name of the program and any positional arguments before the
  subparser argument

* *parser_class* - class which will be used to create sub-parser instances, by
  default the class of the current parser (e.g. `ArgumentParser`)

* action_ - the basic type of action to be taken when this argument is
  encountered at the command line

* dest_ - name of the attribute under which subcommand name will be
  stored; by default `None` and no value is stored

* required_ - Whether or not a subcommand must be provided, by default
  `False` (added in 3.7)

* help_ - help for sub-parser group in help output, by default `None`

* metavar_ - string presenting available subcommands in help; by default it
  is `None` and presents subcommands in form {cmd1, cmd2, ..}

一些使用示例::

  >>> # create the top-level parser
  >>> parser = argparse.ArgumentParser(prog='PROG')
  >>> parser.add_argument('--foo', action='store_true', help='foo help')
  >>> subparsers = parser.add_subparsers(help='subcommand help')
  >>>
  >>> # create the parser for the "a" command
  >>> parser_a = subparsers.add_parser('a', help='a help')
  >>> parser_a.add_argument('bar', type=int, help='bar help')
  >>>
  >>> # create the parser for the "b" command
  >>> parser_b = subparsers.add_parser('b', help='b help')
  >>> parser_b.add_argument('--baz', choices=('X', 'Y', 'Z'), help='baz help')
  >>>
  >>> # parse some argument lists
  >>> parser.parse_args(['a', '12'])
  Namespace(bar=12, foo=False)
  >>> parser.parse_args(['--foo', 'b', '--baz', 'Z'])
  Namespace(baz='Z', foo=True)

Note that the object returned by `~ArgumentParser.parse_args` will only contain
attributes for the main parser and the subparser that was selected by the
command line (and not any other subparsers).  So in the example above, when
the `a` command is specified, only the `foo` and `bar` attributes are
present, and when the `b` command is specified, only the `foo` and
`baz` attributes are present.

If a subparser defines an argument with the same `dest` as the parent
parser, the two share a single namespace attribute, so the parent's value
won't be retained. Users should give them  distinct `dest` values to
keep both.

Similarly, when a help message is requested from a subparser, only the help
for that particular parser will be printed.  The help message will not
include parent parser or sibling parser messages.  (A help message for each
subparser command, however, can be given by supplying the `help=` argument
to `~_SubParsersAction.add_parser` as above.)

::

  >>> parser.parse_args(['--help'])
  usage: PROG [-h] [--foo] {a,b} ...

  positional arguments:
    {a,b}   subcommand help
      a     a help
      b     b help

  options:
    -h, --help  show this help message and exit
    --foo   foo help

  >>> parser.parse_args(['a', '--help'])
  usage: PROG a [-h] bar

  positional arguments:
    bar     bar help

  options:
    -h, --help  show this help message and exit

  >>> parser.parse_args(['b', '--help'])
  usage: PROG b [-h] [--baz {X,Y,Z}]

  options:
    -h, --help     show this help message and exit
    --baz {X,Y,Z}  baz help

The `~ArgumentParser.add_subparsers` method also supports `title` and `description`
keyword arguments.  When either is present, the subparser's commands will
appear in their own group in the help output.  For example::

  >>> parser = argparse.ArgumentParser()
  >>> subparsers = parser.add_subparsers(title='subcommands',
  ...                                    description='valid subcommands',
  ...                                    help='additional help')
  >>> subparsers.add_parser('foo')
  >>> subparsers.add_parser('bar')
  >>> parser.parse_args(['-h'])
  usage:  [-h] {foo,bar} ...

  options:
    -h, --help  show this help message and exit

  subcommands:
    valid subcommands

    {foo,bar}   additional help

One particularly effective way of handling subcommands is to combine the use
of the `~ArgumentParser.add_subparsers` method with calls to `~ArgumentParser.set_defaults` so
that each subparser knows which Python function it should execute.  For
example::

  >>> # subcommand functions
  >>> def foo(args):
  ...     print(args.x * args.y)
  ...
  >>> def bar(args):
  ...     print('((%s))' % args.z)
  ...
  >>> # create the top-level parser
  >>> parser = argparse.ArgumentParser()
  >>> subparsers = parser.add_subparsers(required=True)
  >>>
  >>> # create the parser for the "foo" command
  >>> parser_foo = subparsers.add_parser('foo')
  >>> parser_foo.add_argument('-x', type=int, default=1)
  >>> parser_foo.add_argument('y', type=float)
  >>> parser_foo.set_defaults(func=foo)
  >>>
  >>> # create the parser for the "bar" command
  >>> parser_bar = subparsers.add_parser('bar')
  >>> parser_bar.add_argument('z')
  >>> parser_bar.set_defaults(func=bar)
  >>>
  >>> # parse the args and call whatever function was selected
  >>> args = parser.parse_args('foo 1 -x 2'.split())
  >>> args.func(args)
  2.0
  >>>
  >>> # parse the args and call whatever function was selected
  >>> args = parser.parse_args('bar XYZYX'.split())
  >>> args.func(args)
  ((XYZYX))

This way, you can let `~ArgumentParser.parse_args` do the job of calling the
appropriate function after argument parsing is complete.  Associating
functions with actions like this is typically the easiest way to handle the
different actions for each of your subparsers.  However, if it is necessary
to check the name of the subparser that was invoked, the `dest` keyword
argument to the `~ArgumentParser.add_subparsers` call will work::

  >>> parser = argparse.ArgumentParser()
  >>> subparsers = parser.add_subparsers(dest='subparser_name')
  >>> subparser1 = subparsers.add_parser('1')
  >>> subparser1.add_argument('-x')
  >>> subparser2 = subparsers.add_parser('2')
  >>> subparser2.add_argument('y')
  >>> parser.parse_args(['2', 'frobble'])
  Namespace(subparser_name='2', y='frobble')

> *Changed in 3.7*: New *required* keyword-only parameter.

> *Changed in 3.14*: Subparser's *prog* is no longer affected by a custom usage message in the main parser.
