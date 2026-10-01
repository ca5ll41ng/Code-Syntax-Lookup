---
id: "python-zh-function-wave-wave_read"
language: "python"
lang: "zh"
category: "function"
name: "Wave_read"
directive: "class"
module: "wave"
source_url: "https://docs.python.org/zh-cn/3/library/wave.html#wave.Wave_read"
license: "PSF"
updated: "2026-10-01"
---

# Wave_read

读取一个 WAV 文件。

由 :func:`.open` 返回的 Wave_read 对象，有以下几种方法:

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
