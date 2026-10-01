---
id: "java-en-function-classdesc-nested"
language: "java"
lang: "en"
category: "function"
name: "ClassDesc.nested"
signature: "default ClassDesc nested(String nestedName)"
title: "ClassDesc.nested"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc.nested

```java
default ClassDesc nested(String nestedName)
```

Returns a `ClassDesc` for a nested class of the class or
 interface type described by this `ClassDesc`.

 Example: If descriptor `d` describes the class `java.util.Map`, a
 descriptor for the class `java.util.Map.Entry` could be obtained
 by `d.nested("Entry")`.

**参数**

- **nestedName** — the unqualified name of the nested class

**返回**

- a `ClassDesc` describing the nested class

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalStateException** — if this `ClassDesc` does not describe a class or interface type
- **IllegalArgumentException** — if the nested class name is invalid
