---
id: "java-en-function-attributes-characterrangetable"
language: "java"
lang: "en"
category: "function"
name: "Attributes.characterRangeTable"
signature: "public static AttributeMapper<CharacterRangeTableAttribute> characterRangeTable()"
title: "Attributes.characterRangeTable"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.characterRangeTable

```java
public static AttributeMapper<CharacterRangeTableAttribute> characterRangeTable()
```

{@return the mapper for the `CharacterRangeTable` attribute}
 This is a JDK-specific attribute.
 The mapper permits multiple instances in a `Code` attribute, but this
 attribute should be only emitted once.
 This has a data dependency on `LABELS labels`.
