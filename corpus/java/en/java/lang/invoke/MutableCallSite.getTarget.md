---
id: "java-en-function-mutablecallsite-gettarget"
language: "java"
lang: "en"
category: "function"
name: "MutableCallSite.getTarget"
signature: "@Override public final MethodHandle getTarget()"
title: "MutableCallSite.getTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MutableCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MutableCallSite.getTarget

```java
@Override public final MethodHandle getTarget()
```

Returns the target method of the call site, which behaves
 like a normal field of the `MutableCallSite`.
 

 The interactions of `getTarget` with memory are the same
 as of a read from an ordinary variable, such as an array element or a
 non-volatile, non-final field.
 

 In particular, the current thread may choose to reuse the result
 of a previous read of the target from memory, and may fail to see
 a recent update to the target by another thread.

**返回**

- the linkage state of this call site, a method handle which can change over time

**参见**

- #setTarget
