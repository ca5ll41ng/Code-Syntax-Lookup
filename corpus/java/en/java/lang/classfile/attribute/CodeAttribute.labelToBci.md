---
id: "java-en-function-codeattribute-labeltobci"
language: "java"
lang: "en"
category: "function"
name: "CodeAttribute.labelToBci"
signature: "int labelToBci(Label label)"
title: "CodeAttribute.labelToBci"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/CodeAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeAttribute.labelToBci

```java
int labelToBci(Label label)
```

{@return the position of the `label` in the `codeArray codeArray`}
 The label represents a cursor pointing at immediately before the returned
 index into the `code` array.

**参数**

- **label** — a marker for a position within this `CodeAttribute`

**异常**

- **IllegalArgumentException** — if the `label` is not from this attribute
