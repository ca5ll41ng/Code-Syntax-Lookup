---
id: "java-en-function-localvariabletableattribute-of"
language: "java"
lang: "en"
category: "function"
name: "LocalVariableTableAttribute.of"
signature: "static LocalVariableTableAttribute of(List<LocalVariableInfo> locals)"
title: "LocalVariableTableAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LocalVariableTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVariableTableAttribute.of

```java
static LocalVariableTableAttribute of(List<LocalVariableInfo> locals)
```

{@return a `LocalVariableTable` attribute}

 The created attribute cannot be written to a `CodeBuilder`.  Use
 `localVariable CodeBuilder::localVariable` instead.

**参数**

- **locals** — the local variable descriptions

**异常**

- **IllegalArgumentException** — if the number of descriptions exceeds the limit of `#u2 u2`
