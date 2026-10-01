---
id: "java-en-function-methodtype-unwrap"
language: "java"
lang: "en"
category: "function"
name: "MethodType.unwrap"
signature: "public MethodType unwrap()"
title: "MethodType.unwrap"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.unwrap

```java
public MethodType unwrap()
```

Converts all wrapper types to their corresponding primitive types.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.
 All primitive types (including `void`) will remain unchanged.
 A return type of `java.lang.Void` is changed to `void`.

**返回**

- a version of the original type with all wrapper types replaced
