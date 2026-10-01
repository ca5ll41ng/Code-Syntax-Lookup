---
id: "python-en-function-optparse-optionparser-add_option"
language: "python"
lang: "en"
category: "function"
name: "OptionParser.add_option"
signature: "OptionParser.add_option(option)"
directive: "method"
module: "optparse"
source_url: "https://docs.python.org/3/library/optparse.html#optparse.OptionParser.add_option"
license: "PSF"
updated: "2026-10-01"
---

# OptionParser.add_option

To define an option with only a short option string::

   parser.add_option("-f", attr=value, ...)

And to define an option with only a long option string::

   parser.add_option("--foo", attr=value, ...)

The keyword arguments define attributes of the new Option object.  The most
important option attribute is `~Option.action`, and it largely
determines which other attributes are relevant or required.  If you pass
irrelevant option attributes, or fail to pass required ones, `optparse`
raises an `OptionError` exception explaining your mistake.

An option's *action* determines what `optparse` does when it encounters
this option on the command-line.  The standard option actions hard-coded into
`optparse` are:

`"store"`
   store this option's argument (default)

`"store_const"`
   store a constant value, pre-set via `Option.const`

`"store_true"`
   store `True`

`"store_false"`
   store `False`

`"append"`
   append this option's argument to a list

`"append_const"`
   append a constant value to a list, pre-set via `Option.const`

`"count"`
   increment a counter by one

`"callback"`
   call a specified function

`"help"`
   print a usage message including all options and the documentation for them

(If you don't supply an action, the default is `"store"`.  For this action,
you may also supply `~Option.type` and `~Option.dest` option
attributes; see `optparse-standard-option-actions`.)
