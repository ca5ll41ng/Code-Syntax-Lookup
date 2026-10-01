---
id: "java-en-function-classdefinition-classdefinition"
language: "java"
lang: "en"
category: "function"
name: "ClassDefinition.ClassDefinition"
signature: "public ClassDefinition( Class<?> theClass, byte[] theClassFile)"
title: "ClassDefinition.ClassDefinition"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/ClassDefinition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDefinition.ClassDefinition

```java
public ClassDefinition( Class<?> theClass, byte[] theClassFile)
```

Creates a new ClassDefinition binding using the supplied
  class and class file bytes. Does not copy the supplied buffer, just captures a reference to it.

**参数**

- **theClass** — the Class that needs redefining
- **theClassFile** — the new class file bytes

**异常**

- **java.lang.NullPointerException** — if the supplied class or array is null.
