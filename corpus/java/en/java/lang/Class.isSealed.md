---
id: "java-en-function-class-issealed"
language: "java"
lang: "en"
category: "function"
name: "Class.isSealed"
signature: "public boolean isSealed()"
title: "Class.isSealed"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isSealed

```java
public boolean isSealed()
```

Returns `true` if and only if this `Class` object represents
 a sealed class or interface. If this `Class` object represents a
 primitive type, `void`, or an array type, this method returns
 `false`. A sealed class or interface has (possibly zero) permitted
 subclasses; `getPermittedSubclasses` returns a non-null but
 possibly empty value for a sealed class or interface.

**返回**

- `true` if and only if this `Class` object represents a sealed class or interface.

> *Since 17*
