---
id: "java-en-function-jarentry-getrealname"
language: "java"
lang: "en"
category: "function"
name: "JarEntry.getRealName"
signature: "public String getRealName()"
title: "JarEntry.getRealName"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarEntry.getRealName

```java
public String getRealName()
```

Returns the real name of this `JarEntry`.

 If this `JarEntry` is an entry of a
 multi-release jar file and the
 `JarFile` is configured to be processed as such, the name returned
 by this method is the path name of the versioned entry that the
 `JarEntry` represents, rather than the path name of the base entry
 that `getName` returns. If the `JarEntry` does not represent
 a versioned entry of a multi-release `JarFile` or the `JarFile`
 is not configured for processing a multi-release jar file, this method
 returns the same name that `getName` returns.

**返回**

- the real name of the JarEntry

> *Since 10*
