---
id: "java-en-function-linker-nativelinker"
language: "java"
lang: "en"
category: "function"
name: "Linker.nativeLinker"
signature: "static Linker nativeLinker()"
title: "Linker.nativeLinker"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Linker.nativeLinker

```java
static Linker nativeLinker()
```

{@return a linker for the ABI associated with the underlying native platform}
 

 The underlying native platform is the combination of OS and processor where the
 Java runtime is currently executing.

          combination of OS and processor.
           layouts for basic C types.
           associated with the returned linker are the native libraries loaded in
           the process where the Java runtime is currently executing. For example,
           on Linux, these libraries typically include `libc`, `libm`
           and `libdl`.
