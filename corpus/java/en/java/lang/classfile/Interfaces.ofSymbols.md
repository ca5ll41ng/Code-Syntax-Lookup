---
id: "java-en-function-interfaces-ofsymbols"
language: "java"
lang: "en"
category: "function"
name: "Interfaces.ofSymbols"
signature: "static Interfaces ofSymbols(List<ClassDesc> interfaces)"
title: "Interfaces.ofSymbols"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Interfaces.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Interfaces.ofSymbols

```java
static Interfaces ofSymbols(List<ClassDesc> interfaces)
```

{@return an `Interfaces` element}

**参数**

- **interfaces** — the interfaces

**异常**

- **IllegalArgumentException** — if any of `interfaces` is primitive, or if the number of interfaces exceeds the limit of `#u2 u2`
