---
id: "java-en-function-methodtype-haswrappers"
language: "java"
lang: "en"
category: "function"
name: "MethodType.hasWrappers"
signature: "public boolean hasWrappers()"
title: "MethodType.hasWrappers"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.hasWrappers

```java
public boolean hasWrappers()
```

Reports if this type contains a wrapper argument or return value.
 Wrappers are types which box primitive values, such as `Integer`.
 The reference type `java.lang.Void` counts as a wrapper,
 if it occurs as a return type.

**返回**

- true if any of the types are wrappers
