---
id: "java-en-function-characterrangeinfo-of"
language: "java"
lang: "en"
category: "function"
name: "CharacterRangeInfo.of"
signature: "static CharacterRangeInfo of(int startPc, int endPc, int characterRangeStart, int characterRangeEnd, int flags)"
title: "CharacterRangeInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/CharacterRangeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRangeInfo.of

```java
static CharacterRangeInfo of(int startPc, int endPc, int characterRangeStart, int characterRangeEnd, int flags)
```

{@return a character range entry}

 The created entry cannot be written to a `CodeBuilder`.  Use
 `characterRange CodeBuilder::characterRange` instead.

**参数**

- **startPc** — the start of indices in the code array, inclusive
- **endPc** — the end of indices in the code array, exclusive
- **characterRangeStart** — the encoded start of character positions in the source file, inclusive
- **characterRangeEnd** — the encoded end of character positions in the source file, exclusive
- **flags** — the flags of this entry

**异常**

- **IllegalArgumentException** — if `startPc`, `endPc`, or `flags` is not `#u2 u2`
