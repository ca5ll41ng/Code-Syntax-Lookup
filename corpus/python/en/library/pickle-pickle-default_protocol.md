---
id: "python-en-function-pickle-default_protocol"
language: "python"
lang: "en"
category: "function"
name: "DEFAULT_PROTOCOL"
directive: "data"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.DEFAULT_PROTOCOL"
license: "PSF"
updated: "2026-10-01"
---

# DEFAULT_PROTOCOL

An integer, the default `protocol version` used
for pickling.  May be less than `HIGHEST_PROTOCOL`.  Currently the
default protocol is 5, introduced in Python 3.8 and incompatible
with previous versions. This version introduces support for out-of-band
buffers, where PEP 3118-compatible data can be transmitted separately
from the main pickle stream.

> *Changed in 3.0*: The default protocol is 3.

> *Changed in 3.8*: The default protocol is 4.

> *Changed in 3.14*: The default protocol is 5.
