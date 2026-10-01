---
id: "java-en-function-classdesc-componenttype"
language: "java"
lang: "en"
category: "function"
name: "ClassDesc.componentType"
signature: "default ClassDesc componentType()"
title: "ClassDesc.componentType"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc.componentType

```java
default ClassDesc componentType()
```

Returns the component type of this `ClassDesc`, if it describes
 an array type, or `null` otherwise.

**返回**

- a `ClassDesc` describing the component type, or `null` if this descriptor does not describe an array type
