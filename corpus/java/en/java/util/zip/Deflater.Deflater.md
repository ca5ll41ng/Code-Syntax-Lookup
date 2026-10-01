---
id: "java-en-function-deflater-deflater"
language: "java"
lang: "en"
category: "function"
name: "Deflater.Deflater"
signature: "public Deflater(int level, boolean nowrap)"
title: "Deflater.Deflater"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.Deflater

```java
public Deflater(int level, boolean nowrap)
```

Creates a new compressor using the specified compression level.
 If 'nowrap' is true then the ZLIB header and checksum fields will
 not be used in order to support the compression format used in
 both GZIP and PKZIP.

**参数**

- **level** — the compression level (0-9)
- **nowrap** — if true then use GZIP compatible compression
