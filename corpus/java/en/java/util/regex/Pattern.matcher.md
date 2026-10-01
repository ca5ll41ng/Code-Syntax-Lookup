---
id: "java-en-function-pattern-matcher"
language: "java"
lang: "en"
category: "function"
name: "Pattern.matcher"
signature: "public Matcher matcher(CharSequence input)"
title: "Pattern.matcher"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.matcher

```java
public Matcher matcher(CharSequence input)
```

Creates a matcher that will match the given input against this pattern.

 until a direct or indirect invocation of this method. Thus, if a
 deserialized pattern has `CANON_EQ` among its flags and the number
 of combining marks for any character is too large, an
 `java.lang.OutOfMemoryError` is thrown,
 as in `compile`.

**参数**

- **input** — The character sequence to be matched

**返回**

- A new matcher for this pattern
