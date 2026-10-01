---
id: "java-en-function-system-maplibraryname"
language: "java"
lang: "en"
category: "function"
name: "System.mapLibraryName"
signature: "public static native String mapLibraryName(String libname)"
title: "System.mapLibraryName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.mapLibraryName

```java
public static native String mapLibraryName(String libname)
```

Maps a library name into a platform-specific string representing
 a native library.

**参数**

- **libname** — the name of the library.

**返回**

- a platform-dependent native library name.

**异常**

- **NullPointerException** — if `libname` is `null`

**参见**

- java.lang.System#loadLibrary(java.lang.String)
- java.lang.ClassLoader#findLibrary(java.lang.String)

> *Since 1.2*
