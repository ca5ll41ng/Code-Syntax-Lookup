---
id: "java-en-function-mutablecallsite-mutablecallsite"
language: "java"
lang: "en"
category: "function"
name: "MutableCallSite.MutableCallSite"
signature: "public MutableCallSite(MethodType type)"
title: "MutableCallSite.MutableCallSite"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MutableCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MutableCallSite.MutableCallSite

```java
public MutableCallSite(MethodType type)
```

Creates a blank call site object with the given method type.
 The initial target is set to a method handle of the given type
 which will throw an `IllegalStateException` if called.
 

 The type of the call site is permanently set to the given type.
 

 Before this `CallSite` object is returned from a bootstrap method,
 or invoked in some other manner,
 it is usually provided with a more useful target method,
 via a call to `setTarget(MethodHandle) setTarget`.

**参数**

- **type** — the method type that this call site will have

**异常**

- **NullPointerException** — if the proposed type is null
