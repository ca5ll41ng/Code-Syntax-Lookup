---
id: "java-en-function-varhandle-isaccessmodesupported"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.isAccessModeSupported"
signature: "public boolean isAccessModeSupported(AccessMode accessMode)"
title: "VarHandle.isAccessModeSupported"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.isAccessModeSupported

```java
public boolean isAccessModeSupported(AccessMode accessMode)
```

Returns `true` if the given access mode is supported, otherwise
 `false`.

 

The return of a `false` value for a given access mode indicates
 that an `UnsupportedOperationException` is thrown on invocation
 of the corresponding access mode method.

**参数**

- **accessMode** — the access mode, corresponding to the signature-polymorphic method of the same name

**返回**

- `true` if the given access mode is supported, otherwise `false`.
