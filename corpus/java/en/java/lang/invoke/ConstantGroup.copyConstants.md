---
id: "java-en-function-constantgroup-copyconstants"
language: "java"
lang: "en"
category: "function"
name: "ConstantGroup.copyConstants"
signature: "default int copyConstants(int start, int end, Object[] buf, int pos) throws LinkageError"
title: "ConstantGroup.copyConstants"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantGroup.copyConstants

```java
default int copyConstants(int start, int end, Object[] buf, int pos) throws LinkageError
```

Copy a sequence of constant values into a given buffer.
 This is equivalent to `end-offset` separate calls to `get`,
 for each index in the range from `offset` up to but not including `end`.
 For the first constant that cannot be resolved,
 a `LinkageError` is thrown, but only after
 preceding constant value have been stored.

**参数**

- **start** — index of first constant to retrieve
- **end** — limiting index of constants to retrieve
- **buf** — array to receive the requested values
- **pos** — position in the array to offset storing the values

**返回**

- the limiting index, `end`

**异常**

- **LinkageError** — if a constant cannot be resolved
