---
id: "java-en-function-stringtokenizer-counttokens"
language: "java"
lang: "en"
category: "function"
name: "StringTokenizer.countTokens"
signature: "public int countTokens()"
title: "StringTokenizer.countTokens"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringTokenizer.countTokens

```java
public int countTokens()
```

Calculates the number of times that this tokenizer's
 `nextToken` method can be called before it generates an
 exception. The current position is not advanced.

**返回**

- the number of tokens remaining in the string using the current delimiter set.

**参见**

- java.util.StringTokenizer#nextToken()
