---
id: "java-en-function-jaroutputstream-jaroutputstream"
language: "java"
lang: "en"
category: "function"
name: "JarOutputStream.JarOutputStream"
signature: "public JarOutputStream(OutputStream out, Manifest man) throws IOException"
title: "JarOutputStream.JarOutputStream"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarOutputStream.JarOutputStream

```java
public JarOutputStream(OutputStream out, Manifest man) throws IOException
```

Creates a new `JarOutputStream` with the specified
 `Manifest`. The manifest is written as the first
 entry to the output stream.

**参数**

- **out** — the actual output stream
- **man** — the optional `Manifest`

**异常**

- **IOException** — if an I/O error has occurred
