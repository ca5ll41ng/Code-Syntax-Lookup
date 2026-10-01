---
id: "python-en-function-argparse-argumentparser-convert_arg_line_to_args"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.convert_arg_line_to_args"
signature: "ArgumentParser.convert_arg_line_to_args(arg_line)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.convert_arg_line_to_args"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.convert_arg_line_to_args

Arguments that are read from a file (see the *fromfile_prefix_chars*
keyword argument to the `ArgumentParser` constructor) are read one
argument per line. `convert_arg_line_to_args` can be overridden for
fancier reading.

This method takes a single argument *arg_line* which is a string read from
the argument file.  It returns a list of arguments parsed from this string.
The method is called once per line read from the argument file, in order.

A useful override of this method is one that treats each space-separated word
as an argument.  The following example demonstrates how to do this::

 class MyArgumentParser(argparse.ArgumentParser):
     def convert_arg_line_to_args(self, arg_line):
         return arg_line.split()

Note that with this override an argument can no longer contain spaces, since
each space-separated word becomes a separate argument.
