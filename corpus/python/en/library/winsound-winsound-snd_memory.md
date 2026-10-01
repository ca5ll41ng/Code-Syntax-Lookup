---
id: "python-en-function-winsound-snd_memory"
language: "python"
lang: "en"
category: "function"
name: "SND_MEMORY"
directive: "data"
module: "winsound"
source_url: "https://docs.python.org/3/library/winsound.html#winsound.SND_MEMORY"
license: "PSF"
updated: "2026-10-01"
---

# SND_MEMORY

The *sound* parameter to `PlaySound` is a memory image of a WAV file, as a
`bytes-like object`.

> **Note**
>
> This module does not support playing from a memory image asynchronously, so a
> combination of this flag and `SND_ASYNC` will raise `RuntimeError`.
>
