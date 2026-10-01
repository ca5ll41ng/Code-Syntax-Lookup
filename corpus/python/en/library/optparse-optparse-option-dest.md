---
id: "python-en-function-optparse-option-dest"
language: "python"
lang: "en"
category: "function"
name: "Option.dest"
directive: "attribute"
module: "optparse"
source_url: "https://docs.python.org/3/library/optparse.html#optparse.Option.dest"
license: "PSF"
updated: "2026-10-01"
---

# Option.dest

(default: derived from option strings)

If the option's action implies writing or modifying a value somewhere, this
tells `optparse` where to write it: `~Option.dest` names an
attribute of the `options` object that `optparse` builds as it parses
the command line.
