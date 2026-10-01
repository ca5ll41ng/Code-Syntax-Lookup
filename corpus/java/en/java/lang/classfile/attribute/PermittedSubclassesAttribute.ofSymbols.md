---
id: "java-en-function-permittedsubclassesattribute-ofsymbols"
language: "java"
lang: "en"
category: "function"
name: "PermittedSubclassesAttribute.ofSymbols"
signature: "static PermittedSubclassesAttribute ofSymbols(List<ClassDesc> permittedSubclasses)"
title: "PermittedSubclassesAttribute.ofSymbols"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/PermittedSubclassesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PermittedSubclassesAttribute.ofSymbols

```java
static PermittedSubclassesAttribute ofSymbols(List<ClassDesc> permittedSubclasses)
```

{@return a `PermittedSubclasses` attribute}

**参数**

- **permittedSubclasses** — the permitted subclasses or subinterfaces

**异常**

- **IllegalArgumentException** — if any of `permittedSubclasses` is primitive, or if the number of permitted subclasses or subinterfaces exceeds the limit of `#u2 u2`
