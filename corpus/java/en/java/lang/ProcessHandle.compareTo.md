---
id: "java-en-function-processhandle-compareto"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.compareTo"
signature: "int compareTo(ProcessHandle other)"
title: "ProcessHandle.compareTo"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.compareTo

```java
int compareTo(ProcessHandle other)
```

Compares this ProcessHandle with the specified ProcessHandle for order.
 The order is not specified, but is consistent with `equals`,
 which returns `true` if and only if two instances of ProcessHandle
 are of the same implementation and represent the same system process.
 Comparison is only supported among objects of same implementation.
 If attempt is made to mutually compare two different implementations
 of `ProcessHandle`s, `ClassCastException` is thrown.

**参数**

- **other** — the ProcessHandle to be compared

**返回**

- a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object.

**异常**

- **NullPointerException** — if the specified object is null
- **ClassCastException** — if the specified object is not of same class as this object
