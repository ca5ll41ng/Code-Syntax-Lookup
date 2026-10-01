---
id: "java-en-function-jarinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "JarInputStream.read"
signature: "public int read(byte[] b, int off, int len) throws IOException"
title: "JarInputStream.read"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarInputStream.read

```java
public int read(byte[] b, int off, int len) throws IOException
```

Reads from the current JAR entry into an array of bytes, returning the number of
 inflated bytes. If `len` is not zero, the method blocks until some input is
 available; otherwise, no bytes are read and `0` is returned.
 

 If the current entry is compressed and this method returns a nonzero
 integer n then `buf[off]`
 through `buf[off+`n`-1]` contain the uncompressed
 data.  The content of elements `buf[off+`n`]` through
 `buf[off+`len`-1]` is undefined, contrary to the
 specification of the `java.io.InputStream InputStream` superclass,
 so an implementation is free to modify these elements during the inflate
 operation. If this method returns `-1` or throws an exception then
 the content of `buf[off]` through `buf[off+`len`-1]` is undefined.
 

 If verification has been enabled, any invalid signature
 on the current entry will be reported at some point before the
 end of the entry is reached.

**参数**

- **b** — the buffer into which the data is read
- **off** — the start offset in the destination array `b`
- **len** — the maximum number of bytes to read

**返回**

- the actual number of bytes read, or -1 if the end of the entry is reached

**异常**

- **IndexOutOfBoundsException** — If `off` is negative, `len` is negative, or `len` is greater than `b.length - off`
- **ZipException** — if a ZIP file error has occurred
- **IOException** — if an I/O error has occurred
- **SecurityException** — if any of the jar file entries are incorrectly signed.
