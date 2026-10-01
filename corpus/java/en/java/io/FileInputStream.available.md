---
id: "java-en-function-fileinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "FileInputStream.available"
signature: "public int available() throws IOException"
title: "FileInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileInputStream.available

```java
public int available() throws IOException
```

Returns an estimate of the number of remaining bytes that can be read (or
 skipped over) from this input stream without blocking by the next
 invocation of a method for this input stream. Returns 0 when the file
 position is beyond EOF. The next invocation might be the same thread
 or another thread. A single read or skip of this many bytes will not
 block, but may read or skip fewer bytes.

 

 In some cases, a non-blocking read (or skip) may appear to be
 blocked when it is merely slow, for example when reading large
 files over slow networks.

**返回**

- an estimate of the number of remaining bytes that can be read (or skipped over) from this input stream without blocking.

**异常**

- **IOException** — if this file input stream has been closed by calling `close` or an I/O error occurs.
