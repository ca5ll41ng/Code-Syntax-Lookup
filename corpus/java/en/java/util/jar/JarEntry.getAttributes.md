---
id: "java-en-function-jarentry-getattributes"
language: "java"
lang: "en"
category: "function"
name: "JarEntry.getAttributes"
signature: "public Attributes getAttributes() throws IOException"
title: "JarEntry.getAttributes"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarEntry.getAttributes

```java
public Attributes getAttributes() throws IOException
```

Returns the `Manifest` `Attributes` for this
 entry, or `null` if none.

**返回**

- the `Manifest` `Attributes` for this entry, or `null` if none

**异常**

- **IOException** — if an I/O error has occurred
