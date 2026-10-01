---
id: "java-en-function-invalidpathexception-invalidpathexception"
language: "java"
lang: "en"
category: "function"
name: "InvalidPathException.InvalidPathException"
signature: "public InvalidPathException(String input, String reason, int index)"
title: "InvalidPathException.InvalidPathException"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/InvalidPathException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvalidPathException.InvalidPathException

```java
public InvalidPathException(String input, String reason, int index)
```

Constructs an instance from the given input string, reason, and error
 index.

**参数**

- **input** — the input string
- **reason** — a string explaining why the input was rejected
- **index** — the index at which the error occurred, or `-1` if the index is not known

**异常**

- **NullPointerException** — if either the input or reason strings are `null`
- **IllegalArgumentException** — if the error index is less than `-1`
