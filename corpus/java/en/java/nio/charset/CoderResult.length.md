---
id: "java-en-function-coderresult-length"
language: "java"
lang: "en"
category: "function"
name: "CoderResult.length"
signature: "public int length()"
title: "CoderResult.length"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/CoderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CoderResult.length

```java
public int length()
```

Returns the length of the erroneous input described by this
 object&nbsp;&nbsp;(optional operation).

**返回**

- The length of the erroneous input, a positive integer

**异常**

- **UnsupportedOperationException** — If this object does not describe an error condition, that is, if the `isError() isError` does not return `true`
