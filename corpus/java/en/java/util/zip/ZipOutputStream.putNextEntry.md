---
id: "java-en-function-zipoutputstream-putnextentry"
language: "java"
lang: "en"
category: "function"
name: "ZipOutputStream.putNextEntry"
signature: "public void putNextEntry(ZipEntry e) throws IOException"
title: "ZipOutputStream.putNextEntry"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipOutputStream.putNextEntry

```java
public void putNextEntry(ZipEntry e) throws IOException
```

Begins writing a new ZIP file entry and positions the stream to the
 start of the entry data. Closes the current entry if still active.
 

 The default compression method will be used if no compression method
 was specified for the entry. When writing a compressed (DEFLATED)
 entry, and the compressed size has not been explicitly set with the
 `setCompressedSize` method, then the compressed
 size will be set to the actual compressed size after deflation.
 

 The current time will be used if the entry has no set modification time.

 should be used and the size and CRC-32 values should be set to 0:

 {@snippet lang = "java":
     ZipEntry e = new ZipEntry(entryName);
     if (e.isDirectory()) {
         e.setMethod(ZipEntry.STORED);
         e.setSize(0);
         e.setCrc(0);
     }
     stream.putNextEntry(e);
}

 This allows optimal performance when processing directory entries.

**参数**

- **e** — the ZIP entry to be written

**异常**

- **ZipException** — if a ZIP format error has occurred
- **IOException** — if an I/O error has occurred
