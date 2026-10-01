---
id: "python-en-function-faulthandler-unregister"
language: "python"
lang: "en"
category: "function"
name: "unregister"
signature: "unregister(signum)"
directive: "function"
module: "faulthandler"
source_url: "https://docs.python.org/3/library/faulthandler.html#faulthandler.unregister"
license: "PSF"
updated: "2026-10-01"
---

# unregister

Unregister a user signal: uninstall the handler of the *signum* signal
installed by `register`. Return `True` if the signal was registered,
`False` otherwise.

Not available on Windows.
