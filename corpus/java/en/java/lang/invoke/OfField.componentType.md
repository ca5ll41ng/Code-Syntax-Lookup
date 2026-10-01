---
id: "java-en-function-offield-componenttype"
language: "java"
lang: "en"
category: "function"
name: "OfField.componentType"
signature: "F componentType()"
title: "OfField.componentType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/TypeDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfField.componentType

```java
F componentType()
```

If this field descriptor describes an array type, return
 a descriptor for its component type, otherwise return `null`.

**返回**

- the component type, or `null` if this field descriptor does not describe an array type
