---
id: "java-en-function-varhandle-describeconstable"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.describeConstable"
signature: "public Optional<VarHandleDesc> describeConstable()"
title: "VarHandle.describeConstable"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.describeConstable

```java
public Optional<VarHandleDesc> describeConstable()
```

Return a nominal descriptor for this instance, if one can be
 constructed, or an empty `Optional` if one cannot be.

**返回**

- An `Optional` containing the resulting nominal descriptor, or an empty `Optional` if one cannot be constructed.

> *Since 12*
