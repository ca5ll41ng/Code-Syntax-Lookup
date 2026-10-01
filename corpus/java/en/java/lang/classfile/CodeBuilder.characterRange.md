---
id: "java-en-function-codebuilder-characterrange"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.characterRange"
signature: "default CodeBuilder characterRange(Label startScope, Label endScope, int characterRangeStart, int characterRangeEnd, int flags)"
title: "CodeBuilder.characterRange"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.characterRange

```java
default CodeBuilder characterRange(Label startScope, Label endScope, int characterRangeStart, int characterRangeEnd, int flags)
```

Declares a character range entry.
 

 This call may be ignored if `DROP_DEBUG`
 is set, or if any of the argument labels is not `labelBinding
 bound` and `DROP_DEAD_LABELS` is set.

**参数**

- **startScope** — the start scope of the character range
- **endScope** — the end scope of the character range
- **characterRangeStart** — the encoded start of the character range region (inclusive)
- **characterRangeEnd** — the encoded end of the character range region (exclusive)
- **flags** — the flags word, indicating the kind of range

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `flags` is not `#u2 u2`

**参见**

- CharacterRange
