---
id: "java-en-function-methodtype-wrap"
language: "java"
lang: "en"
category: "function"
name: "MethodType.wrap"
signature: "public MethodType wrap()"
title: "MethodType.wrap"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.wrap

```java
public MethodType wrap()
```

Converts all primitive types to their corresponding wrapper types.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.
 All reference types (including wrapper types) will remain unchanged.
 A `void` return type is changed to the type `java.lang.Void`.
 The expression `type.wrap().erase()` produces the same value
 as `type.generic()`.

**返回**

- a version of the original type with all primitive types replaced
