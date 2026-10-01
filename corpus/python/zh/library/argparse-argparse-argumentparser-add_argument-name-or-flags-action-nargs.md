---
id: "python-zh-function-argparse-argumentparser-add_argument-name-or-flags-action-nargs"
language: "python"
lang: "zh"
category: "function"
name: "ArgumentParser.add_argument(name or flags..., *, [action], [nargs], \\"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/zh-cn/3/library/argparse.html#argparse.ArgumentParser.add_argument(name or flags..., *, [action], [nargs], \\"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.add_argument(name or flags..., *, [action], [nargs], \

Define how a single command-line argument should be parsed.  Each parameter
has its own more detailed description below, but in short they are:

* `name or flags`_ - Either a name or a list of option strings, e.g. `'foo'`
  or `'-f', '--foo'`.

* action_ - The basic type of action to be taken when this argument is
  encountered at the command line.

* nargs_ - The number of command-line arguments that should be consumed.

* const_ - A constant value required by some action_ and nargs_ selections.

* default_ - The value produced if the argument is absent from the
  command line and if it is absent from the namespace object.

* type_ - The type to which the command-line argument should be converted.

* choices_ - A sequence of the allowable values for the argument.

* required_ - Whether or not the command-line option may be omitted
  (optionals only).

* help_ - A brief description of what the argument does.

* metavar_ - A name for the argument in usage messages.

* dest_ - The name of the attribute to be added to the object returned by
  `parse_args`.

* deprecated_ - Whether or not use of the argument is deprecated.

此方法将返回一个代表参数内容的 :class:`Action` 对象。
