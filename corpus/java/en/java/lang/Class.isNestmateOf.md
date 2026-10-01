---
id: "java-en-function-class-isnestmateof"
language: "java"
lang: "en"
category: "function"
name: "Class.isNestmateOf"
signature: "public boolean isNestmateOf(Class<?> c)"
title: "Class.isNestmateOf"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isNestmateOf

```java
public boolean isNestmateOf(Class<?> c)
```

Determines if the given `Class` is a nestmate of the
 class or interface represented by this `Class` object.
 Two classes or interfaces are nestmates
 if they have the same `getNestHost() nest host`.

**参数**

- **c** — the class to check

**返回**

- `true` if this class and `c` are members of the same nest; and `false` otherwise.

> *Since 11*
