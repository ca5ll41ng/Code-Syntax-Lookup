---
id: "java-en-function-jarfile-entries"
language: "java"
lang: "en"
category: "function"
name: "JarFile.entries"
signature: "public Enumeration<JarEntry> entries()"
title: "JarFile.entries"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.entries

```java
public Enumeration<JarEntry> entries()
```

Returns an enumeration of the jar file entries.

**返回**

- an enumeration of the jar file entries

**异常**

- **IllegalStateException** — may be thrown if the jar file has been closed
