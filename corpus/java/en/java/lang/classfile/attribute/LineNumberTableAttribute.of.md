---
id: "java-en-function-linenumbertableattribute-of"
language: "java"
lang: "en"
category: "function"
name: "LineNumberTableAttribute.of"
signature: "static LineNumberTableAttribute of(List<LineNumberInfo> lines)"
title: "LineNumberTableAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LineNumberTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberTableAttribute.of

```java
static LineNumberTableAttribute of(List<LineNumberInfo> lines)
```

{@return a `LineNumberTable` attribute}

 The created attribute cannot be written to a `CodeBuilder`.  Call
 `lineNumber CodeBuilder::lineNumber` in the correct
 order instead.

**参数**

- **lines** — the line number descriptions

**异常**

- **IllegalArgumentException** — if the number of descriptions exceeds the limit of `#u2 u2`
