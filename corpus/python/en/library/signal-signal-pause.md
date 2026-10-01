---
id: "python-en-function-signal-pause"
language: "python"
lang: "en"
category: "function"
name: "pause"
signature: "pause()"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.pause"
license: "PSF"
updated: "2026-10-01"
---

# pause

Cause the process to sleep until a signal is received; the appropriate handler
will then be called.  Returns nothing.

availability:: Unix.

See also `sigwait`, `sigwaitinfo`, `sigtimedwait` and
`sigpending`.
