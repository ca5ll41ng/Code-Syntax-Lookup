---
id: "python-en-function-optparse-optionparser-print_usage"
language: "python"
lang: "en"
category: "function"
name: "OptionParser.print_usage"
signature: "OptionParser.print_usage(file=None)"
directive: "method"
module: "optparse"
source_url: "https://docs.python.org/3/library/optparse.html#optparse.OptionParser.print_usage"
license: "PSF"
updated: "2026-10-01"
---

# OptionParser.print_usage

Print the usage message for the current program (`self.usage`) to *file*
(default stdout).  Any occurrence of the string `%prog` in `self.usage`
is replaced with the name of the current program.  Does nothing if
`self.usage` is empty or not defined.
