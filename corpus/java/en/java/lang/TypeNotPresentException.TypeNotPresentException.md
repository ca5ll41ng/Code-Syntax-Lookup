---
id: "java-en-function-typenotpresentexception-typenotpresentexception"
language: "java"
lang: "en"
category: "function"
name: "TypeNotPresentException.TypeNotPresentException"
signature: "public TypeNotPresentException(String typeName, Throwable cause)"
title: "TypeNotPresentException.TypeNotPresentException"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/TypeNotPresentException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeNotPresentException.TypeNotPresentException

```java
public TypeNotPresentException(String typeName, Throwable cause)
```

Constructs a `TypeNotPresentException` for the named type or
 type variable with the specified cause.

**参数**

- **typeName** — the fully qualified name of the unavailable type or type variable
- **cause** — the exception that was thrown when the system attempted to load the named type, or `null` if unavailable or inapplicable
