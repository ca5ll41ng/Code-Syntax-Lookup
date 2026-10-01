---
id: "java-en-function-pathstatus-isabsolute"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.isAbsolute"
signature: "public boolean isAbsolute()"
title: "PathStatus.isAbsolute"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.isAbsolute

```java
public boolean isAbsolute()
```

Tests whether this abstract pathname is absolute.  The definition of
 absolute pathname is system dependent.  On UNIX systems, a pathname is
 absolute if its prefix is `"/"`.  On Microsoft Windows systems, a
 pathname is absolute if its prefix is a drive specifier followed by
 `"\\"`, or if its prefix is `"\\\\"`.

**返回**

- `true` if this abstract pathname is absolute, `false` otherwise
