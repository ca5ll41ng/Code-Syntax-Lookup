---
id: "java-en-function-manifest-write"
language: "java"
lang: "en"
category: "function"
name: "Manifest.write"
signature: "public void write(OutputStream out) throws IOException"
title: "Manifest.write"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Manifest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Manifest.write

```java
public void write(OutputStream out) throws IOException
```

Writes the Manifest to the specified OutputStream.
 Attributes.Name.MANIFEST_VERSION must be set in
 MainAttributes prior to invoking this method.

**参数**

- **out** — the output stream

**异常**

- **IOException** — if an I/O error has occurred

**参见**

- #getMainAttributes
