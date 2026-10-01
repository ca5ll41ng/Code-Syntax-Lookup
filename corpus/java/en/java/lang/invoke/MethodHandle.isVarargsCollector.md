---
id: "java-en-function-methodhandle-isvarargscollector"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.isVarargsCollector"
signature: "public boolean isVarargsCollector()"
title: "MethodHandle.isVarargsCollector"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.isVarargsCollector

```java
public boolean isVarargsCollector()
```

Determines if this method handle
 supports `asVarargsCollector variable arity` calls.
 Such method handles arise from the following sources:
 
 
- a call to `asVarargsCollector asVarargsCollector`
 
- a call to a `java.lang.invoke.MethodHandles.Lookup lookup method`
     which resolves to a variable arity Java method or constructor
 
- an `ldc` instruction of a `CONSTANT_MethodHandle`
     which resolves to a variable arity Java method or constructor

**返回**

- true if this method handle accepts more than one arity of plain, inexact `invoke` calls

**参见**

- #asVarargsCollector
- #asFixedArity
