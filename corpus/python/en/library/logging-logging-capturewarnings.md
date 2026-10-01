---
id: "python-en-function-logging-capturewarnings"
language: "python"
lang: "en"
category: "function"
name: "captureWarnings"
signature: "captureWarnings(capture)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.captureWarnings"
license: "PSF"
updated: "2026-10-01"
---

# captureWarnings

This function is used to turn the capture of warnings by logging on and
off.

If *capture* is `True`, warnings issued by the `warnings` module will
be redirected to the logging system. Specifically, a warning will be
formatted using `warnings.formatwarning` and the resulting string
logged to a logger named `'py.warnings'` with a severity of `WARNING`.

If *capture* is `False`, the redirection of warnings to the logging system
will stop, and warnings will be redirected to their original destinations
(i.e. those in effect before `captureWarnings(True)` was called).
