---
id: "java-en-function-matcher-quotereplacement"
language: "java"
lang: "en"
category: "function"
name: "Matcher.quoteReplacement"
signature: "public static String quoteReplacement(String s)"
title: "Matcher.quoteReplacement"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.quoteReplacement

```java
public static String quoteReplacement(String s)
```

Returns a literal replacement `String` for the specified
 `String`.

 This method produces a `String` that will work
 as a literal replacement `s` in the
 `appendReplacement` method of the `Matcher` class.
 The `String` produced will match the sequence of characters
 in `s` treated as a literal sequence. Slashes ('\') and
 dollar signs ('$') will be given no special meaning.

**参数**

- **s** — The string to be literalized

**返回**

- A literal string replacement

> *Since 1.5*
