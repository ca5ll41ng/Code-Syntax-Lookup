---
id: "java-en-function-zipentry-setcrc"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setCrc"
signature: "public void setCrc(long crc)"
title: "ZipEntry.setCrc"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setCrc

```java
public void setCrc(long crc)
```

Sets the CRC-32 checksum of the uncompressed entry data.

**参数**

- **crc** — the CRC-32 value

**异常**

- **IllegalArgumentException** — if the specified CRC-32 value is less than 0 or greater than 0xFFFFFFFF

**参见**

- #getCrc()
