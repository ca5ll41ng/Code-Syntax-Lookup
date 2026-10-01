---
id: "java-en-function-characterrange-characterrangeend"
language: "java"
lang: "en"
category: "function"
name: "CharacterRange.characterRangeEnd"
signature: "int characterRangeEnd()"
title: "CharacterRange.characterRangeEnd"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/CharacterRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRange.characterRangeEnd

```java
int characterRangeEnd()
```

{@return the encoded end of the character range region (exclusive)}.
 The value is constructed from the line_number/column_number pair as given
 by `line_number << 10 + column_number`, where the source file is
 viewed as an array of (possibly multi-byte) characters.
