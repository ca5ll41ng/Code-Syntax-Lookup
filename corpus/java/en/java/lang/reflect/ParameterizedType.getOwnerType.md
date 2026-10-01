---
id: "java-en-function-parameterizedtype-getownertype"
language: "java"
lang: "en"
category: "function"
name: "ParameterizedType.getOwnerType"
signature: "Type getOwnerType()"
title: "ParameterizedType.getOwnerType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/ParameterizedType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterizedType.getOwnerType

```java
Type getOwnerType()
```

Returns a `Type` object representing the type that this type
 is a member of.  For example, if this type is `O.I`,
 return a representation of `O`.

 

If this type is a top-level type, `null` is returned.

**返回**

- a `Type` object representing the type that this type is a member of. If this type is a top-level type, `null` is returned

**异常**

- **TypeNotPresentException** — if the owner type refers to a non-existent class or interface declaration
- **MalformedParameterizedTypeException** — if the owner type refers to a parameterized type that cannot be instantiated for any reason

> *Since 1.5*
