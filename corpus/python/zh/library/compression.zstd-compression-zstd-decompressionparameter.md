---
id: "python-zh-function-compression-zstd-decompressionparameter"
language: "python"
lang: "zh"
category: "function"
name: "DecompressionParameter"
signature: "DecompressionParameter()"
directive: "class"
module: "compression.zstd"
source_url: "https://docs.python.org/zh-cn/3/library/compression.zstd.html#compression.zstd.DecompressionParameter"
license: "PSF"
updated: "2026-10-01"
---

# DecompressionParameter

An `~enum.IntEnum` containing the advanced decompression parameter
keys that can be used when decompressing data. Parameters are optional; any
omitted parameter will have its value selected automatically.

The `~.bounds` method can be used on any attribute to get the valid
values for that parameter.

例如，将 :attr:`~.window_log_max` 设置为最大大小::

   data = compress(b'Some very long buffer of bytes...')

   _lower, upper = DecompressionParameter.window_log_max.bounds()

   options = {DecompressionParameter.window_log_max: upper}
   decompress(data, options=options)

method:: bounds()

attribute:: window_log_max
