---
id: "java-en-function-characterrange-characterrangestart"
language: "java"
lang: "en"
category: "function"
name: "CharacterRange.characterRangeStart"
signature: "int characterRangeStart()"
title: "CharacterRange.characterRangeStart"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/CharacterRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRange.characterRangeStart

```java
int characterRangeStart()
```

{@return the encoded start of the character range region (inclusive)}
 The value is constructed from the line_number/column_number pair as given
 by `line_number << 10 + column_number`, where the source file is
 viewed as an array of (possibly multi-byte) characters.
