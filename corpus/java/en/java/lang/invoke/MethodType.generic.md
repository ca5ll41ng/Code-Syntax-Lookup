---
id: "java-en-function-methodtype-generic"
language: "java"
lang: "en"
category: "function"
name: "MethodType.generic"
signature: "public MethodType generic()"
title: "MethodType.generic"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.generic

```java
public MethodType generic()
```

Converts all types, both reference and primitive, to `Object`.
 Convenience method for `genericMethodType(int) genericMethodType`.
 The expression `type.wrap().erase()` produces the same value
 as `type.generic()`.

**返回**

- a version of the original type with all types replaced
