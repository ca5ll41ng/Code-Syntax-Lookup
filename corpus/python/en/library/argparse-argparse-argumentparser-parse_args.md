---
id: "python-en-function-argparse-argumentparser-parse_args"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.parse_args"
signature: "ArgumentParser.parse_args(args=None, namespace=None)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.parse_args"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.parse_args

Convert argument strings to objects and assign them as attributes of the
namespace.  Return the populated namespace.

Previous calls to `add_argument` determine exactly what objects are
created and how they are assigned. See the documentation for
`add_argument` for details.

* args_ - List of strings to parse.  The default is taken from
  `sys.argv`.

* namespace_ - An object to take the attributes.  The default is a new empty
  `Namespace` object.
