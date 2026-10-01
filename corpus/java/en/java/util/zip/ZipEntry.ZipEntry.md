---
id: "java-en-function-zipentry-zipentry"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.ZipEntry"
signature: "public ZipEntry(String name)"
title: "ZipEntry.ZipEntry"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.ZipEntry

```java
public ZipEntry(String name)
```

Creates a new ZIP entry with the specified name.

**参数**

- **name** — The entry name

**异常**

- **NullPointerException** — if the entry name is null
- **IllegalArgumentException** — if the combined length of the entry name and the `CENHDR CEN Header size` exceeds 65,535 bytes.
