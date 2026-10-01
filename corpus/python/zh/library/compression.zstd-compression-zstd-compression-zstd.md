---
id: "python-zh-function-compression-zstd-compression-zstd"
language: "python"
lang: "zh"
category: "function"
name: "compression.zstd"
title: "Examples"
directive: "module"
module: "compression.zstd"
source_url: "https://docs.python.org/zh-cn/3/library/compression.zstd.html#module-compression.zstd"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

读取压缩文件：

```python

from compression import zstd

with zstd.open("file.zst") as f:
    file_content = f.read()
```

创建压缩文件：

```python

from compression import zstd

data = b"Insert Data Here"
with zstd.open("file.zst", "w") as f:
    f.write(data)
```

在内存中压缩数据：

```python

from compression import zstd

data_in = b"Insert Data Here"
data_out = zstd.compress(data_in)
```

增量压缩：

```python

from compression import zstd

comp = zstd.ZstdCompressor()
out1 = comp.compress(b"Some data\n")
out2 = comp.compress(b"Another piece of data\n")
out3 = comp.compress(b"Even more data\n")
out4 = comp.flush()
# Concatenate all the partial results:
result = b"".join([out1, out2, out3, out4])
```

写入已压缩数据到一个已打开的文件：

```python

from compression import zstd

with open("myfile", "wb") as f:
    f.write(b"This data will not be compressed\n")
    with zstd.open(f, "w") as zstf:
        zstf.write(b"This *will* be compressed\n")
    f.write(b"Not compressed\n")
```

使用压缩参数创建压缩文件：

```python

from compression import zstd

options = {
   zstd.CompressionParameter.checksum_flag: 1
}
with zstd.open("file.zst", "w", options=options) as f:
    f.write(b"Mind if I squeeze in?")
```
