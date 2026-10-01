---
id: "java-en-function-linenumberinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "LineNumberInputStream.available"
signature: "public int available() throws IOException"
title: "LineNumberInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberInputStream.available

```java
public int available() throws IOException
```

Returns the number of bytes that can be read from this input
 stream without blocking.
 

 Note that if the underlying input stream is able to supply
 k input characters without blocking, the
 `LineNumberInputStream` can guarantee only to provide
 k/2 characters without blocking, because the
 k characters from the underlying input stream might
 consist of k/2 pairs of `'\u005Cr'` and
 `'\u005Cn'`, which are converted to just
 k/2 `'\u005Cn'` characters.

**返回**

- the number of bytes that can be read from this input stream without blocking.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterInputStream#in
