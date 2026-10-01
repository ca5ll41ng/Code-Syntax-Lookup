---
id: "python-en-function-optparse-optionparser-set_defaults"
language: "python"
lang: "en"
category: "function"
name: "OptionParser.set_defaults"
signature: "OptionParser.set_defaults(dest=value, ...)"
directive: "method"
module: "optparse"
source_url: "https://docs.python.org/3/library/optparse.html#optparse.OptionParser.set_defaults"
license: "PSF"
updated: "2026-10-01"
---

# OptionParser.set_defaults

Set default values for several option destinations at once.  Using
`set_defaults` is the preferred way to set default values for options,
since multiple options can share the same destination.  For example, if
several "mode" options all set the same destination, any one of them can set
the default, and the last one wins::

   parser.add_option("--advanced", action="store_const",
                     dest="mode", const="advanced",
                     default="novice")    # overridden below
   parser.add_option("--novice", action="store_const",
                     dest="mode", const="novice",
                     default="advanced")  # overrides above setting

To avoid this confusion, use `set_defaults`::

   parser.set_defaults(mode="advanced")
   parser.add_option("--advanced", action="store_const",
                     dest="mode", const="advanced")
   parser.add_option("--novice", action="store_const",
                     dest="mode", const="novice")
