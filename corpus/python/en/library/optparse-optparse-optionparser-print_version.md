---
id: "python-en-function-optparse-optionparser-print_version"
language: "python"
lang: "en"
category: "function"
name: "OptionParser.print_version"
signature: "OptionParser.print_version(file=None)"
directive: "method"
module: "optparse"
source_url: "https://docs.python.org/3/library/optparse.html#optparse.OptionParser.print_version"
license: "PSF"
updated: "2026-10-01"
---

# OptionParser.print_version

Print the version message for the current program (`self.version`) to
*file* (default stdout).  As with `print_usage`, any occurrence
of `%prog` in `self.version` is replaced with the name of the current
program.  Does nothing if `self.version` is empty or undefined.
