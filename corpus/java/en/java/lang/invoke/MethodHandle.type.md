---
id: "java-en-function-methodhandle-type"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.type"
signature: "public MethodType type()"
title: "MethodHandle.type"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.type

```java
public MethodType type()
```

Reports the type of this method handle.
 Every invocation of this method handle via `invokeExact` must exactly match this type.

**返回**

- the method handle type
