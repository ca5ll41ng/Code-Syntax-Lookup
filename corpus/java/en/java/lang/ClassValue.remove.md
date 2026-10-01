---
id: "java-en-function-classvalue-remove"
language: "java"
lang: "en"
category: "function"
name: "ClassValue.remove"
signature: "public void remove(Class<?> type)"
title: "ClassValue.remove"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassValue.remove

```java
public void remove(Class<?> type)
```

Removes the associated value for the given `Class` and invalidates
 all out-of-date computations.  If this association is subsequently
 `get accessed`, this removal happens-before (JLS {@jls
 17.4.5}) the finish of the `computeValue computeValue` call that
 returned the associated value.

**参数**

- **type** — the type whose class value must be removed

**异常**

- **NullPointerException** — if the argument is `null`
