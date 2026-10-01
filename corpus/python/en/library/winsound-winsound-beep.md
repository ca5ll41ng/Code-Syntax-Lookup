---
id: "python-en-function-winsound-beep"
language: "python"
lang: "en"
category: "function"
name: "Beep"
signature: "Beep(frequency, duration)"
directive: "function"
module: "winsound"
source_url: "https://docs.python.org/3/library/winsound.html#winsound.Beep"
license: "PSF"
updated: "2026-10-01"
---

# Beep

Beep the PC's speaker. The *frequency* parameter specifies frequency, in hertz,
of the sound, and must be in the range 37 through 32,767. The *duration*
parameter specifies the number of milliseconds the sound should last.  If the
system is not able to beep the speaker, `RuntimeError` is raised.
