---
id: "java-en-function-stringjoiner-tostring"
language: "java"
lang: "en"
category: "function"
name: "StringJoiner.toString"
signature: "public String toString()"
title: "StringJoiner.toString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringJoiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringJoiner.toString

```java
public String toString()
```

Returns the current value, consisting of the `prefix`, the values
 added so far separated by the `delimiter`, and the `suffix`,
 unless no elements have been added in which case, the
 `prefix + suffix` or the `emptyValue` characters are returned.

**返回**

- the string representation of this `StringJoiner`
