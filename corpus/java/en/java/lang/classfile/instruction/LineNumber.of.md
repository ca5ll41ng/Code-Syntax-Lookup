---
id: "java-en-function-linenumber-of"
language: "java"
lang: "en"
category: "function"
name: "LineNumber.of"
signature: "static LineNumber of(int line)"
title: "LineNumber.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LineNumber.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumber.of

```java
static LineNumber of(int line)
```

{@return a line number pseudo-instruction}

**参数**

- **line** — the line number

**异常**

- **IllegalArgumentException** — if `line` is not `#u2 u2`
