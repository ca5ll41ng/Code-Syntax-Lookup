---
id: "java-en-function-constable-describeconstable"
language: "java"
lang: "en"
category: "function"
name: "Constable.describeConstable"
signature: "Optional<? extends ConstantDesc> describeConstable()"
title: "Constable.describeConstable"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/Constable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Constable.describeConstable

```java
Optional<? extends ConstantDesc> describeConstable()
```

Returns an `Optional` containing the nominal descriptor for this
 instance, if one can be constructed, or an empty `Optional`
 if one cannot be constructed.

**返回**

- An `Optional` containing the resulting nominal descriptor, or an empty `Optional` if one cannot be constructed.
