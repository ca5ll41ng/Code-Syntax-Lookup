---
id: "java-en-function-manifest-read"
language: "java"
lang: "en"
category: "function"
name: "Manifest.read"
signature: "public void read(InputStream is) throws IOException"
title: "Manifest.read"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Manifest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Manifest.read

```java
public void read(InputStream is) throws IOException
```

Reads the Manifest from the specified InputStream. The entry
 names and attributes read will be merged in with the current
 manifest entries.

**参数**

- **is** — the input stream

**异常**

- **IOException** — if an I/O error has occurred
