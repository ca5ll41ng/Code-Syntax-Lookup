---
id: "java-en-function-zipentry-getcompressedsize"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.getCompressedSize"
signature: "public long getCompressedSize()"
title: "ZipEntry.getCompressedSize"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.getCompressedSize

```java
public long getCompressedSize()
```

Returns the size of the compressed entry data.

 

 In the case of a stored entry, the compressed size will be the same
 as the uncompressed size of the entry.

**返回**

- the size of the compressed entry data, or -1 if not known

**参见**

- #setCompressedSize(long)
