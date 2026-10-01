---
id: "java-en-function-inflater-inflater"
language: "java"
lang: "en"
category: "function"
name: "Inflater.Inflater"
signature: "public Inflater(boolean nowrap)"
title: "Inflater.Inflater"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Inflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inflater.Inflater

```java
public Inflater(boolean nowrap)
```

Creates a new decompressor. If the parameter 'nowrap' is true then
 the ZLIB header and checksum fields will not be used. This provides
 compatibility with the compression format used by both GZIP and PKZIP.
 

 Note: When using the 'nowrap' option it is also necessary to provide
 an extra "dummy" byte as input. This is required by the ZLIB native
 library in order to support certain optimizations.

**参数**

- **nowrap** — if true then support GZIP compatible compression
