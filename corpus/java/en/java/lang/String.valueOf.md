---
id: "java-en-function-string-valueof"
language: "java"
lang: "en"
category: "function"
name: "String.valueOf"
signature: "public static String valueOf(Object obj)"
title: "String.valueOf"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.valueOf

```java
public static String valueOf(Object obj)
```

Returns the string representation of the `Object` argument.

**参数**

- **obj** — an `Object`.

**返回**

- if the argument is `null`, then a string equal to `"null"`; otherwise, the value of `obj.toString()` is returned.

**参见**

- java.lang.Object#toString()
