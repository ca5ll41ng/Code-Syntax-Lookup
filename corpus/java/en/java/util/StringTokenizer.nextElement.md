---
id: "java-en-function-stringtokenizer-nextelement"
language: "java"
lang: "en"
category: "function"
name: "StringTokenizer.nextElement"
signature: "public Object nextElement()"
title: "StringTokenizer.nextElement"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringTokenizer.nextElement

```java
public Object nextElement()
```

Returns the same value as the `nextToken` method,
 except that its declared return value is `Object` rather than
 `String`. It exists so that this class can implement the
 `Enumeration` interface.

**返回**

- the next token in the string.

**异常**

- **NoSuchElementException** — if there are no more tokens in this tokenizer's string.

**参见**

- java.util.Enumeration
- java.util.StringTokenizer#nextToken()
