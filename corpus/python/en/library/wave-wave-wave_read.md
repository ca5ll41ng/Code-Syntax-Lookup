---
id: "python-en-function-wave-wave_read"
language: "python"
lang: "en"
category: "function"
name: "Wave_read"
directive: "class"
module: "wave"
source_url: "https://docs.python.org/3/library/wave.html#wave.Wave_read"
license: "PSF"
updated: "2026-10-01"
---

# Wave_read

Read a WAV file.

Wave_read objects, as returned by `.open`, have the following methods:

method:: close()

method:: getnchannels()

method:: getsampwidth()

method:: getframerate()

method:: getnframes()

method:: getformat()

method:: getcomptype()

method:: getcompname()

method:: getparams()

method:: readframes(n)

method:: rewind()

The following two methods define a term "position" which is compatible between
them, and is otherwise implementation dependent.

method:: setpos(pos)

method:: tell()
