---
id: "java-en-function-methodtype-describeconstable"
language: "java"
lang: "en"
category: "function"
name: "MethodType.describeConstable"
signature: "public Optional<MethodTypeDesc> describeConstable()"
title: "MethodType.describeConstable"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.describeConstable

```java
public Optional<MethodTypeDesc> describeConstable()
```

Returns a nominal descriptor for this instance, if one can be
 constructed, or an empty `Optional` if one cannot be.

**返回**

- An `Optional` containing the resulting nominal descriptor, or an empty `Optional` if one cannot be constructed.

**参见**

- Nominal Descriptor for `MethodType`

> *Since 12*
