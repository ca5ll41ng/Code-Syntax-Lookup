---
id: "java-en-function-terminalop-getopflags"
language: "java"
lang: "en"
category: "function"
name: "TerminalOp.getOpFlags"
signature: "default int getOpFlags()"
title: "TerminalOp.getOpFlags"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/TerminalOp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TerminalOp.getOpFlags

```java
default int getOpFlags()
```

Gets the stream flags of the operation.  Terminal operations may set a
 limited subset of the stream flags defined in `StreamOpFlag`, and
 these flags are combined with the previously combined stream and
 intermediate operation flags for the pipeline.

**返回**

- the stream flags for this operation

**参见**

- StreamOpFlag
