---
id: "python-en-function-os-sysconf"
language: "python"
lang: "en"
category: "function"
name: "sysconf"
signature: "sysconf(name, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.sysconf"
license: "PSF"
updated: "2026-10-01"
---

# sysconf

Return integer-valued system configuration values. If the configuration value
specified by *name* isn't defined, `-1` is returned.  The comments regarding
the *name* parameter for `confstr` apply here as well; the dictionary that
provides information on the known names is given by `sysconf_names`.

availability:: Unix.
