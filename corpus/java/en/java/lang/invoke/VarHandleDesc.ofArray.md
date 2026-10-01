---
id: "java-en-function-varhandledesc-ofarray"
language: "java"
lang: "en"
category: "function"
name: "VarHandleDesc.ofArray"
signature: "public static VarHandleDesc ofArray(ClassDesc arrayClass)"
title: "VarHandleDesc.ofArray"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandleDesc.ofArray

```java
public static VarHandleDesc ofArray(ClassDesc arrayClass)
```

Returns a `VarHandleDesc` corresponding to a `VarHandle`
 for an array type.

**参数**

- **arrayClass** — a `ClassDesc` describing the type of the array

**返回**

- the `VarHandleDesc`

**异常**

- **NullPointerException** — if any of the arguments are null
