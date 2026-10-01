---
id: "java-en-function-gzipinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "GZIPInputStream.read"
signature: "public int read(byte[] buf, int off, int len) throws IOException"
title: "GZIPInputStream.read"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/GZIPInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GZIPInputStream.read

```java
public int read(byte[] buf, int off, int len) throws IOException
```

Reads decompressed data into an array of bytes, returning the number of decompressed
 bytes. If `len` is not zero, the method will block until some input can be
 decompressed; otherwise, no bytes are read and `0` is returned.
 

 If this method returns a nonzero integer n then `buf[off]`
 through `buf[off+`n`-1]` contain the decompressed
 data. The content of elements `buf[off+`n`]` through
 `buf[off+`len`-1]` is undefined, contrary to the
 specification of the `java.io.InputStream InputStream` superclass,
 so an implementation is free to modify these elements during the inflate
 operation. If this method returns `-1` or throws an exception then
 the content of `buf[off]` through `buf[off+`len`-1]` is undefined.

**参数**

- **buf** — the buffer into which the data is read
- **off** — the start offset in the destination array `buf`
- **len** — the maximum number of bytes to read into `buf`

**返回**

- the actual number of bytes decompressed from a GZIP member, or -1 if the end-of-stream is reached

**异常**

- **NullPointerException** — If `buf` is `null`.
- **IndexOutOfBoundsException** — If `off` is negative, `len` is negative, or `len` is greater than `buf.length - off`
- **ZipException** — if the compressed input data is corrupt.
- **IOException** — if the stream is closed or an I/O error has occurred.

**参见**

- ##gzip_file_format GZIP file format
