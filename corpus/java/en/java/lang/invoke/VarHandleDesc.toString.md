---
id: "java-en-function-varhandledesc-tostring"
language: "java"
lang: "en"
category: "function"
name: "VarHandleDesc.toString"
signature: "public String toString()"
title: "VarHandleDesc.toString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandleDesc.toString

```java
public String toString()
```

Returns a compact textual description of this constant description.
 For a field `VarHandle`, includes the owner, name, and type
 of the field, and whether it is static; for an array `VarHandle`,
 the name of the component type.

**返回**

- A compact textual description of this descriptor
