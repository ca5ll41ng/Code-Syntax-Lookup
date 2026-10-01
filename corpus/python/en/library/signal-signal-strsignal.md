---
id: "python-en-function-signal-strsignal"
language: "python"
lang: "en"
category: "function"
name: "strsignal"
signature: "strsignal(signalnum)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.strsignal"
license: "PSF"
updated: "2026-10-01"
---

# strsignal

Returns the description of signal *signalnum*, such as "Interrupt"
for `SIGINT`. Returns `None` if *signalnum* has no
description. Raises `ValueError` if *signalnum* is invalid.

> *Added in 3.8*
