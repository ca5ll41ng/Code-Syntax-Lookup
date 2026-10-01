---
id: "python-en-function-winsound-playsound"
language: "python"
lang: "en"
category: "function"
name: "PlaySound"
signature: "PlaySound(sound, flags)"
directive: "function"
module: "winsound"
source_url: "https://docs.python.org/3/library/winsound.html#winsound.PlaySound"
license: "PSF"
updated: "2026-10-01"
---

# PlaySound

Call the underlying :c`PlaySound` function from the Platform API.  The
*sound* parameter may be a filename, a system sound alias, audio data as a
`bytes-like object`, or `None`.  Its
interpretation depends on the value of *flags*, which can be a bitwise ORed
combination of the constants described below. If the *sound* parameter is
`None`, any currently playing waveform sound is stopped. If the system
indicates an error, `RuntimeError` is raised.
