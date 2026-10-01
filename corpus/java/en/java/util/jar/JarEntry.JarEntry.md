---
id: "java-en-function-jarentry-jarentry"
language: "java"
lang: "en"
category: "function"
name: "JarEntry.JarEntry"
signature: "public JarEntry(String name)"
title: "JarEntry.JarEntry"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarEntry.JarEntry

```java
public JarEntry(String name)
```

Creates a new `JarEntry` for the specified JAR file
 entry name.

**参数**

- **name** — the JAR file entry name

**异常**

- **NullPointerException** — if the entry name is `null`
- **IllegalArgumentException** — if the entry name is longer than 0xFFFF bytes.
