---
id: "java-en-function-pattern-quote"
language: "java"
lang: "en"
category: "function"
name: "Pattern.quote"
signature: "public static String quote(String s)"
title: "Pattern.quote"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.quote

```java
public static String quote(String s)
```

Returns a literal pattern `String` for the specified
 `String`.

 

This method produces a `String` that can be used to
 create a `Pattern` that would match the string
 `s` as if it were a literal pattern. Metacharacters
 or escape sequences in the input sequence will be given no special
 meaning.

**参数**

- **s** — The string to be literalized

**返回**

- A literal string replacement

> *Since 1.5*
