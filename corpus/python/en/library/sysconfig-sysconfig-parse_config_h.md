---
id: "python-en-function-sysconfig-parse_config_h"
language: "python"
lang: "en"
category: "function"
name: "parse_config_h"
signature: "parse_config_h(fp[, vars])"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/3/library/sysconfig.html#sysconfig.parse_config_h"
license: "PSF"
updated: "2026-10-01"
---

# parse_config_h

Parse a `config.h`\-style file.

*fp* is a file-like object pointing to the `config.h`\-like file.

A dictionary containing name/value pairs is returned.  If an optional
dictionary is passed in as the second argument, it is used instead of a new
dictionary, and updated with the values read in the file.
