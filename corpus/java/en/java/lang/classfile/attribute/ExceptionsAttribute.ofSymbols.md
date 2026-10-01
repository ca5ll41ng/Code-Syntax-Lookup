---
id: "java-en-function-exceptionsattribute-ofsymbols"
language: "java"
lang: "en"
category: "function"
name: "ExceptionsAttribute.ofSymbols"
signature: "static ExceptionsAttribute ofSymbols(List<ClassDesc> exceptions)"
title: "ExceptionsAttribute.ofSymbols"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ExceptionsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExceptionsAttribute.ofSymbols

```java
static ExceptionsAttribute ofSymbols(List<ClassDesc> exceptions)
```

{@return an `Exceptions` attribute}

**参数**

- **exceptions** — the exceptions that may be thrown from this method

**异常**

- **IllegalArgumentException** — if the number of exceptions exceeds the limit of `#u2 u2`
