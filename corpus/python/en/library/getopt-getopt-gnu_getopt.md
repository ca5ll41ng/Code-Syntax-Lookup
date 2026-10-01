---
id: "python-en-function-getopt-gnu_getopt"
language: "python"
lang: "en"
category: "function"
name: "gnu_getopt"
signature: "gnu_getopt(args, shortopts, longopts=[])"
directive: "function"
module: "getopt"
source_url: "https://docs.python.org/3/library/getopt.html#getopt.gnu_getopt"
license: "PSF"
updated: "2026-10-01"
---

# gnu_getopt

This function works like `getopt`, except that GNU style scanning mode is
used by default. This means that option and non-option arguments may be
intermixed. The `getopt` function stops processing options as soon as a
non-option argument is encountered.

If the first character of the option string is `'+'`, or if the environment
variable `POSIXLY_CORRECT` is set, then option processing stops as
soon as a non-option argument is encountered.

If the first character of the option string is `'-'`, non-option arguments
that are followed by options are added to the list of option-and-value pairs
as a pair that has `None` as its first element and the list of non-option
arguments as its second element.
The second element of the `gnu_getopt` result is a list of
program arguments after the last option.

> *Changed in 3.14*: Support for returning intermixed options and non-option arguments in order.
