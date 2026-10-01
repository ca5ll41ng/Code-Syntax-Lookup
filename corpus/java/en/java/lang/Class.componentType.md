---
id: "java-en-function-class-componenttype"
language: "java"
lang: "en"
category: "function"
name: "Class.componentType"
signature: "public Class<?> componentType()"
title: "Class.componentType"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.componentType

```java
public Class<?> componentType()
```

Returns the component type of this `Class`, if it describes
 an array type, or `null` otherwise.

 Equivalent to `getComponentType`.

**返回**

- a `Class` describing the component type, or `null` if this `Class` does not describe an array type

> *Since 12*
