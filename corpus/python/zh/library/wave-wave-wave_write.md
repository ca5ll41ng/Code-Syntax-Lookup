---
id: "python-zh-function-wave-wave_write"
language: "python"
lang: "zh"
category: "function"
name: "Wave_write"
directive: "class"
module: "wave"
source_url: "https://docs.python.org/zh-cn/3/library/wave.html#wave.Wave_write"
license: "PSF"
updated: "2026-10-01"
---

# Wave_write

写入一个 WAV 文件。

Wave_write 对象，由 :func:`.open` 返回。

For seekable output streams, the `wave` header will automatically be updated
to reflect the number of frames actually written.  For unseekable streams, the
*nframes* value must be accurate when the first frame data is written.  An
accurate *nframes* value can be achieved either by calling
`setnframes` or `setparams` with the number
of frames that will be written before `close` is called and
then using `writeframesraw` to write the frame data, or by
calling `writeframes` with all of the frame data to be
written.  In the latter case `writeframes` will calculate
the number of frames in the data and set *nframes* accordingly before writing
the frame data.

> *Changed in 3.4*: Added support for unseekable files.

Wave_write 对象具有以下方法:

method:: close()

method:: setnchannels(n)

method:: getnchannels()

method:: setsampwidth(n)

method:: getsampwidth()

method:: setframerate(n)

method:: getframerate()

method:: setnframes(n)

method:: getnframes()

method:: setcomptype(type, name)

method:: getcomptype()

method:: getcompname()

method:: setformat(format)

method:: getformat()

method:: setparams(tuple)

method:: getparams()

method:: tell()

method:: writeframesraw(data)

method:: writeframes(data)
