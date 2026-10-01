---
id: "python-en-function-winsound-messagebeep"
language: "python"
lang: "en"
category: "function"
name: "MessageBeep"
signature: "MessageBeep(type=MB_OK)"
directive: "function"
module: "winsound"
source_url: "https://docs.python.org/3/library/winsound.html#winsound.MessageBeep"
license: "PSF"
updated: "2026-10-01"
---

# MessageBeep

Call the underlying :c`MessageBeep` function from the Platform API.  This
plays a sound as specified in the registry.  The *type* argument specifies which
sound to play; possible values are `-1`, `MB_ICONASTERISK`,
`MB_ICONEXCLAMATION`, `MB_ICONHAND`, `MB_ICONQUESTION`, and `MB_OK`, all
described below.  The value `-1` produces a "simple beep"; this is the final
fallback if a sound cannot be played otherwise.  If the system indicates an
error, `RuntimeError` is raised.
