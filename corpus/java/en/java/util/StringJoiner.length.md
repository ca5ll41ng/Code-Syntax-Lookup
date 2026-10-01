---
id: "java-en-function-stringjoiner-length"
language: "java"
lang: "en"
category: "function"
name: "StringJoiner.length"
signature: "public int length()"
title: "StringJoiner.length"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringJoiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringJoiner.length

```java
public int length()
```

Returns the length of the `String` representation
 of this `StringJoiner`. Note that if
 no add methods have been called, then the length of the `String`
 representation (either `prefix + suffix` or `emptyValue`)
 will be returned. The value should be equivalent to
 `toString().length()`.

**返回**

- the length of the current value of `StringJoiner`
