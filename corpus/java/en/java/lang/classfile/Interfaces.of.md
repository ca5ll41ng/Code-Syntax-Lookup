---
id: "java-en-function-interfaces-of"
language: "java"
lang: "en"
category: "function"
name: "Interfaces.of"
signature: "static Interfaces of(List<ClassEntry> interfaces)"
title: "Interfaces.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Interfaces.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Interfaces.of

```java
static Interfaces of(List<ClassEntry> interfaces)
```

{@return an `Interfaces` element}

**参数**

- **interfaces** — the interfaces

**异常**

- **IllegalArgumentException** — if the number of interfaces exceeds the limit of `#u2 u2`
