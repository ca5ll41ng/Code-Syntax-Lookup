---
id: "java-en-function-symbollookup-loaderlookup"
language: "java"
lang: "en"
category: "function"
name: "SymbolLookup.loaderLookup"
signature: "static SymbolLookup loaderLookup()"
title: "SymbolLookup.loaderLookup"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SymbolLookup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SymbolLookup.loaderLookup

```java
static SymbolLookup loaderLookup()
```

Returns a symbol lookup for symbols in the libraries associated with the caller's
 class loader.
 

 A library is associated with a class loader `CL` when the library is loaded
 via an invocation of `load` or
 `loadLibrary` from code in a class defined by `CL`.
 If that code makes further invocations of `load` or
 `loadLibrary` then more libraries are loaded and associated
 with `CL`. The symbol lookup returned by this method is always current: it
 reflects all the libraries associated with the relevant class loader, even if they
 were loaded after this method returned.
 

 Libraries associated with a class loader are unloaded when the class loader becomes
 `#reachability unreachable`. The
 symbol lookup returned by this method is associated with an automatic
 `MemorySegment.Scope scope` which keeps the caller's class loader
 reachable. Therefore, libraries associated with the caller's class loader are
 kept loaded (and their symbols available) as long as a loader lookup for that
 class loader, or any of the segments obtained by it, is reachable.
 

 In cases where this method is called from a context where there is no caller
 frame on the stack (e.g. when called directly from a JNI attached thread), the
 caller's class loader defaults to the
 `getSystemClassLoader system class loader`.

**返回**

- a symbol lookup for symbols in the libraries associated with the caller's class loader

**参见**

- System#load(String)
- System#loadLibrary(String)
