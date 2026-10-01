---
id: "java-en-function-system-loadlibrary"
language: "java"
lang: "en"
category: "function"
name: "System.loadLibrary"
signature: "public static void loadLibrary(String libname)"
title: "System.loadLibrary"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.loadLibrary

```java
public static void loadLibrary(String libname)
```

Loads the native library specified by the `libname`
 argument.  The `libname` argument must not contain any platform
 specific prefix, file extension or path. If a native library
 called `libname` is statically linked with the VM, then the
 JNI_OnLoad_`libname` function exported by the library is invoked.
 See the  JNI Specification
 for more details.

 Otherwise, the libname argument is loaded from a system library
 location and mapped to a native library image in an
 implementation-dependent manner.
 

 The call `System.loadLibrary(name)` is effectively
 equivalent to the call
 
```

 Runtime.getRuntime().loadLibrary(name)
 
```

**参数**

- **libname** — the name of the library.

**异常**

- **UnsatisfiedLinkError** — if either the libname argument contains a file path, the native library is not statically linked with the VM,  or the library cannot be mapped to a native library image by the host system.
- **NullPointerException** — if `libname` is `null`
- **IllegalCallerException** — if the caller is in a module that does not have native access enabled.

**参见**

- java.lang.Runtime#loadLibrary(java.lang.String)
