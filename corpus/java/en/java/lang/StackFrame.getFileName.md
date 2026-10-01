---
id: "java-en-function-stackframe-getfilename"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.getFileName"
signature: "public String getFileName()"
title: "StackFrame.getFileName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.getFileName

```java
public String getFileName()
```

Returns the name of the source file containing the execution point
 represented by this stack frame.  Generally, this corresponds
 to the `SourceFile` attribute of the relevant `class`
 file as defined by The Java Virtual Machine Specification.
 In some systems, the name may refer to some source code unit
 other than a file, such as an entry in a source repository.

**返回**

- the name of the file containing the execution point represented by this stack frame, or `null` if this information is unavailable.

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured with `DROP_METHOD_INFO DROP_METHOD_INFO` option
