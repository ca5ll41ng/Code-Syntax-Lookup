---
id: "java-en-function-accessibleobject-isaccessible"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.isAccessible"
signature: "public boolean isAccessible()"
title: "AccessibleObject.isAccessible"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.isAccessible

```java
public boolean isAccessible()
```

Get the value of the `accessible` flag for this reflected object.

**返回**

- the value of the object's `accessible` flag

> **⚠ Deprecated** — This method is deprecated because its name hints that it checks if the reflected object is accessible when it actually indicates if the checks for Java language access control are suppressed. This method may return `false` on a reflected object that is accessible to the caller. To test if this reflected object is accessible, it should use `canAccess`.
