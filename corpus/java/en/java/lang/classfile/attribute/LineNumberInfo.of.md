---
id: "java-en-function-linenumberinfo-of"
language: "java"
lang: "en"
category: "function"
name: "LineNumberInfo.of"
signature: "public static LineNumberInfo of(int startPc, int lineNumber)"
title: "LineNumberInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LineNumberInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberInfo.of

```java
public static LineNumberInfo of(int startPc, int lineNumber)
```

{@return a line number description}

 The created entry cannot be written to a `CodeBuilder`.  Call
 `lineNumber CodeBuilder::lineNumber` in the correct
 order instead.

**参数**

- **startPc** — the starting index of the code array for this line
- **lineNumber** — the line number within the original source file

**异常**

- **IllegalArgumentException** — if `startPc` or `lineNumber` is not `#u2 u2`
