---
id: "python-en-function-optparse-optionparser-remove_option"
language: "python"
lang: "en"
category: "function"
name: "OptionParser.remove_option"
signature: "OptionParser.remove_option(opt_str)"
directive: "method"
module: "optparse"
source_url: "https://docs.python.org/3/library/optparse.html#optparse.OptionParser.remove_option"
license: "PSF"
updated: "2026-10-01"
---

# OptionParser.remove_option

If the `OptionParser` has an option corresponding to *opt_str*, that
option is removed.  If that option provided any other option strings, all of
those option strings become invalid. If *opt_str* does not occur in any
option belonging to this `OptionParser`, raises `ValueError`.
