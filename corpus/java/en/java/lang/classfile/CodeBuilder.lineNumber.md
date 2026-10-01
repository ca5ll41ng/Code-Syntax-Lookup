---
id: "java-en-function-codebuilder-linenumber"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.lineNumber"
signature: "default CodeBuilder lineNumber(int line)"
title: "CodeBuilder.lineNumber"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.lineNumber

```java
default CodeBuilder lineNumber(int line)
```

Declares a source line number beginning at the current position.
 

 This call may be ignored according to `ClassFile.LineNumbersOption`.

**参数**

- **line** — the line number

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `line` is not `#u2 u2`

**参见**

- LineNumber
