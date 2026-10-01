---
id: "java-en-function-stringtokenizer-hasmoretokens"
language: "java"
lang: "en"
category: "function"
name: "StringTokenizer.hasMoreTokens"
signature: "public boolean hasMoreTokens()"
title: "StringTokenizer.hasMoreTokens"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringTokenizer.hasMoreTokens

```java
public boolean hasMoreTokens()
```

Tests if there are more tokens available from this tokenizer's string.
 If this method returns `true`, then a subsequent call to
 `nextToken` with no argument will successfully return a token.

**返回**

- `true` if and only if there is at least one token in the string after the current position; `false` otherwise.
