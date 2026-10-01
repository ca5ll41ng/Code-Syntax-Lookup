---
id: "java-en-function-zipinputstream-skipnbytes"
language: "java"
lang: "en"
category: "function"
name: "ZipInputStream.skipNBytes"
signature: "public void skipNBytes(long n) throws IOException"
title: "ZipInputStream.skipNBytes"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipInputStream.skipNBytes

```java
public void skipNBytes(long n) throws IOException
```

Skips over and discards exactly `n` bytes of data from this input
 stream for the current ZIP entry.
 If `n` is zero, then no bytes are skipped.
 If `n` is negative, then no bytes are skipped.
 Subclasses may handle the negative value differently.

 

 This method blocks until the requested number of bytes has been
 skipped, end of file is reached, or an exception is thrown.

 

 If end of stream is reached before the stream is at the desired
 position, then an `EOFException` is thrown.

 

 If an I/O error occurs, then the input stream may be
 in an inconsistent state. It is strongly recommended that the
 stream be promptly closed if an I/O error occurs.

> *Since 12*
