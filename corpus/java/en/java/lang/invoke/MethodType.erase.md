---
id: "java-en-function-methodtype-erase"
language: "java"
lang: "en"
category: "function"
name: "MethodType.erase"
signature: "public MethodType erase()"
title: "MethodType.erase"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.erase

```java
public MethodType erase()
```

Erases all reference types to `Object`.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.
 All primitive types (including `void`) will remain unchanged.

**返回**

- a version of the original type with all reference types replaced
