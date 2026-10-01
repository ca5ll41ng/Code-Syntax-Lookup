---
id: "java-en-function-field-isstrictinit"
language: "java"
lang: "en"
category: "function"
name: "Field.isStrictInit"
signature: "public boolean isStrictInit()"
title: "Field.isStrictInit"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Field.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.isStrictInit

```java
public boolean isStrictInit()
```

Returns `true` if this field is a strictly-initialized field;
 returns `false` otherwise.

 

This method returns `true` if and only if the class or interface
 that declares this field uses preview features and this field is a
 strictly-initialized field. The `STRICT_INIT
 ACC_STRICT_INIT` flag is considered not set for a field declared in a
 class or interface that does not use preview features; consequently,
 this method always returns `false` when preview features are disabled.

**返回**

- `true` if and only if this field is a strictly-initialized field, as defined by the Java Virtual Machine Specification

> *Since 28*
