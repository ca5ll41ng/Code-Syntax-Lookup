---
id: "python-zh-function-lzma-lzma"
language: "python"
lang: "zh"
category: "function"
name: "lzma"
title: "Examples"
directive: "module"
module: "lzma"
source_url: "https://docs.python.org/zh-cn/3/library/lzma.html#module-lzma"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

读取压缩文件::

   import lzma
   with lzma.open("file.xz") as f:
       file_content = f.read()

创建一个压缩文件::

   import lzma
   data = b"Insert Data Here"
   with lzma.open("file.xz", "w") as f:
       f.write(data)

在内存中压缩数据::

   import lzma
   data_in = b"Insert Data Here"
   data_out = lzma.compress(data_in)

增量压缩::

   import lzma
   lzc = lzma.LZMACompressor()
   out1 = lzc.compress(b"Some data\n")
   out2 = lzc.compress(b"Another piece of data\n")
   out3 = lzc.compress(b"Even more data\n")
   out4 = lzc.flush()
   # Concatenate all the partial results:
   result = b"".join([out1, out2, out3, out4])

写入已压缩数据到已打开的文件::

   import lzma
   with open("file.xz", "wb") as f:
       f.write(b"This data will not be compressed\n")
       with lzma.open(f, "w") as lzf:
           lzf.write(b"This *will* be compressed\n")
       f.write(b"Not compressed\n")

使用自定义过滤器链创建一个已压缩文件::

   import lzma
   my_filters = [
       {"id": lzma.FILTER_DELTA, "dist": 5},
       {"id": lzma.FILTER_LZMA2, "preset": 7 | lzma.PRESET_EXTREME},
   ]
   with lzma.open("file.xz", "w", filters=my_filters) as f:
       f.write(b"blah blah blah")
