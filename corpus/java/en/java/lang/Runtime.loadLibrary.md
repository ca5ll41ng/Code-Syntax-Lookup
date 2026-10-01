---
id: "java-en-function-runtime-loadlibrary"
language: "java"
lang: "en"
category: "function"
name: "Runtime.loadLibrary"
signature: "public void loadLibrary(String libname)"
title: "Runtime.loadLibrary"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.loadLibrary

```java
public void loadLibrary(String libname)
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
 

 The method `loadLibrary` is the conventional
 and convenient means of invoking this method. If native
 methods are to be used in the implementation of a class, a standard
 strategy is to put the native code in a library file (call it
 `LibFile`) and then to put a static initializer:
 
```

 static { System.loadLibrary("LibFile"); }
 
```

 within the class declaration. When the class is loaded and
 initialized, the necessary native code implementation for the native
 methods will then be loaded as well.
 

 If this method is called more than once with the same library
 name, the second and subsequent calls are ignored.

**参数**

- **libname** — the name of the library.

**异常**

- **UnsatisfiedLinkError** — if either the libname argument contains a file path, the native library is not statically linked with the VM,  or the library cannot be mapped to a native library image by the host system.
- **NullPointerException** — if `libname` is `null`
- **IllegalCallerException** — if the caller is in a module that does not have native access enabled.
