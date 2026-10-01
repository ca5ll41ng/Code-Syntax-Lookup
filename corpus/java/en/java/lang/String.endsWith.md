---
id: "java-en-function-string-endswith"
language: "java"
lang: "en"
category: "function"
name: "String.endsWith"
signature: "public boolean endsWith(String suffix)"
title: "String.endsWith"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.endsWith

```java
public boolean endsWith(String suffix)
```

Tests if this string ends with the specified suffix.

**参数**

- **suffix** — the suffix.

**返回**

- `true` if the character sequence represented by the argument is a suffix of the character sequence represented by this object; `false` otherwise. Note that the result will be `true` if the argument is the empty string or is equal to this `String` object as determined by the `equals` method.
