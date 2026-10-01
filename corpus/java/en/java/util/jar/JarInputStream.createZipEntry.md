---
id: "java-en-function-jarinputstream-createzipentry"
language: "java"
lang: "en"
category: "function"
name: "JarInputStream.createZipEntry"
signature: "protected ZipEntry createZipEntry(String name)"
title: "JarInputStream.createZipEntry"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarInputStream.createZipEntry

```java
protected ZipEntry createZipEntry(String name)
```

Creates a new `JarEntry` (`ZipEntry`) for the
 specified JAR file entry name. The manifest attributes of
 the specified JAR file entry name will be copied to the new
 JarEntry.

**参数**

- **name** — the name of the JAR/ZIP file entry

**返回**

- the `JarEntry` object just created
