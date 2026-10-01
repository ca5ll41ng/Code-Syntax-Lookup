---
id: "java-en-function-method-isdefault"
language: "java"
lang: "en"
category: "function"
name: "Method.isDefault"
signature: "public boolean isDefault()"
title: "Method.isDefault"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Method.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Method.isDefault

```java
public boolean isDefault()
```

Returns `true` if this method is a default
 method; returns `false` otherwise.

 A default method is a public non-abstract instance method, that
 is, a non-static method with a body, declared in an interface.

**返回**

- true if and only if this method is a default method as defined by the Java Language Specification.

> *Since 1.8*
