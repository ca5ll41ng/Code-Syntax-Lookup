---
id: "java-en-function-option-capturestatelayout"
language: "java"
lang: "en"
category: "function"
name: "Option.captureStateLayout"
signature: "static StructLayout captureStateLayout()"
title: "Option.captureStateLayout"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Option.captureStateLayout

```java
static StructLayout captureStateLayout()
```

{@return a struct layout that represents the layout of the capture state
         segment that is passed to a downcall handle linked with
         `captureCallState`}
 

 The capture state layout is platform-dependent but is guaranteed to be
 a `StructLayout struct layout` containing only `ValueLayout value layouts`
 and possibly `PaddingLayout padding layouts`.
 As an example, on Windows, the returned layout might contain three value layouts named:
 
     
- GetLastError
     
- WSAGetLastError
     
- errno
 

 

 Clients can obtain the names of the supported captured value layouts as follows:
 {@snippet lang = java:
    List capturedNames = Linker.Option.captureStateLayout().memberLayouts().stream()
        .map(MemoryLayout::name)
        .flatMap(Optional::stream)
        .toList();
 }

**参见**

- #captureCallState(String...)
