---
id: "java-en-function-characterrange-of"
language: "java"
lang: "en"
category: "function"
name: "CharacterRange.of"
signature: "static CharacterRange of(Label startScope, Label endScope, int characterRangeStart, int characterRangeEnd, int flags)"
title: "CharacterRange.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/CharacterRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRange.of

```java
static CharacterRange of(Label startScope, Label endScope, int characterRangeStart, int characterRangeEnd, int flags)
```

{@return a character range pseudo-instruction}

**参数**

- **startScope** — the start of the instruction range
- **endScope** — the end of the instruction range
- **characterRangeStart** — the encoded start of the character range region (inclusive)
- **characterRangeEnd** — the encoded end of the character range region (exclusive)
- **flags** — a flags word, indicating the kind of range

**异常**

- **IllegalArgumentException** — if `flags` is not `#u2 u2`
