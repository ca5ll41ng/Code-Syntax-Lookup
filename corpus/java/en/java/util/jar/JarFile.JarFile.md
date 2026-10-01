---
id: "java-en-function-jarfile-jarfile"
language: "java"
lang: "en"
category: "function"
name: "JarFile.JarFile"
signature: "public JarFile(String name) throws IOException"
title: "JarFile.JarFile"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.JarFile

```java
public JarFile(String name) throws IOException
```

Creates a new `JarFile` to read from the specified
 file `name`. The `JarFile` will be verified if
 it is signed.

**参数**

- **name** — the name of the jar file to be opened for reading

**异常**

- **IOException** — if an I/O error has occurred
