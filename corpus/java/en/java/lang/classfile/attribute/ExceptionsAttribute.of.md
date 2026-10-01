---
id: "java-en-function-exceptionsattribute-of"
language: "java"
lang: "en"
category: "function"
name: "ExceptionsAttribute.of"
signature: "static ExceptionsAttribute of(List<ClassEntry> exceptions)"
title: "ExceptionsAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ExceptionsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExceptionsAttribute.of

```java
static ExceptionsAttribute of(List<ClassEntry> exceptions)
```

{@return an `Exceptions` attribute}

**参数**

- **exceptions** — the exceptions that may be thrown from this method

**异常**

- **IllegalArgumentException** — if the number of exceptions exceeds the limit of `#u2 u2`
