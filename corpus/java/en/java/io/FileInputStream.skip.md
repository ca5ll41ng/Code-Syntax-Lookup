---
id: "java-en-function-fileinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "FileInputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "FileInputStream.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileInputStream.skip

```java
public long skip(long n) throws IOException
```

Skips over and discards `n` bytes of data from the
 input stream.

 

The `skip` method may, for a variety of
 reasons, end up skipping over some smaller number of bytes,
 possibly `0`. If `n` is negative, the method
 will try to skip backwards. In case the backing file does not support
 backward skip at its current position, an `IOException` is
 thrown. The actual number of bytes skipped is returned. If it skips
 forwards, it returns a positive value. If it skips backwards, it
 returns a negative value.

 

This method may skip more bytes than what are remaining in the
 backing file. This produces no exception and the number of bytes skipped
 may include some number of bytes that were beyond the EOF of the
 backing file. Attempting to read from the stream after skipping past
 the end will result in -1 indicating the end of the file.

**参数**

- **n** — {@inheritDoc}

**返回**

- the actual number of bytes skipped.

**异常**

- **IOException** — if n is negative, if the stream does not support seek, or if an I/O error occurs.
