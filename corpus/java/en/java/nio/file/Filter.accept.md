---
id: "java-en-function-filter-accept"
language: "java"
lang: "en"
category: "function"
name: "Filter.accept"
signature: "boolean accept(T entry) throws IOException"
title: "Filter.accept"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/DirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Filter.accept

```java
boolean accept(T entry) throws IOException
```

Decides if the given directory entry should be accepted or filtered.

**参数**

- **entry** — the directory entry to be tested

**返回**

- `true` if the directory entry should be accepted

**异常**

- **IOException** — If an I/O error occurs
