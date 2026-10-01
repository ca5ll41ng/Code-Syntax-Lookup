---
id: "java-en-function-characterrangetableattribute-of"
language: "java"
lang: "en"
category: "function"
name: "CharacterRangeTableAttribute.of"
signature: "static CharacterRangeTableAttribute of(List<CharacterRangeInfo> ranges)"
title: "CharacterRangeTableAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/CharacterRangeTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRangeTableAttribute.of

```java
static CharacterRangeTableAttribute of(List<CharacterRangeInfo> ranges)
```

{@return a `CharacterRangeTable` attribute}

 The created attribute cannot be written to a `CodeBuilder`.  Use
 `characterRange CodeBuilder::characterRange` instead.

**参数**

- **ranges** — the descriptions of the character ranges

**异常**

- **IllegalArgumentException** — if the number of ranges exceeds the limit of `#u2 u2`
