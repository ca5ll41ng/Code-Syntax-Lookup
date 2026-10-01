---
id: "java-en-function-classbuilder-withinterfaces"
language: "java"
lang: "en"
category: "function"
name: "ClassBuilder.withInterfaces"
signature: "default ClassBuilder withInterfaces(List<ClassEntry> interfaces)"
title: "ClassBuilder.withInterfaces"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassBuilder.withInterfaces

```java
default ClassBuilder withInterfaces(List<ClassEntry> interfaces)
```

Sets the interfaces of this class.

**参数**

- **interfaces** — the interfaces

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the number of interfaces exceeds the limit of `#u2 u2`

**参见**

- Interfaces
