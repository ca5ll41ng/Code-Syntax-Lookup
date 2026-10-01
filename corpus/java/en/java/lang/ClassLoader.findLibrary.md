---
id: "java-en-function-classloader-findlibrary"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.findLibrary"
signature: "protected String findLibrary(String libname)"
title: "ClassLoader.findLibrary"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.findLibrary

```java
protected String findLibrary(String libname)
```

Returns the absolute path name of a native library.  The VM invokes this
 method to locate the native libraries that belong to classes loaded with
 this class loader. If this method returns `null`, the VM
 searches the library along the path specified as the
 "`java.library.path`" property.

**参数**

- **libname** — The library name

**返回**

- The absolute path of the native library

**参见**

- System#loadLibrary(String)
- System#mapLibraryName(String)

> *Since 1.2*
