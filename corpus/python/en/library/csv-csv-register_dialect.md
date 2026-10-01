---
id: "python-en-function-csv-register_dialect"
language: "python"
lang: "en"
category: "function"
name: "register_dialect"
signature: "register_dialect(name, /, dialect='excel', **fmtparams)"
directive: "function"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.register_dialect"
license: "PSF"
updated: "2026-10-01"
---

# register_dialect

Associate *dialect* with *name*.  *name* must be a string. The
dialect can be specified either by passing a sub-class of `Dialect`, or
by *fmtparams* keyword arguments, or both, with keyword arguments overriding
parameters of the dialect. For full details about dialects and formatting
parameters, see section `csv-fmt-params`.
