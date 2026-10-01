---
id: "java-en-function-matcher-find"
language: "java"
lang: "en"
category: "function"
name: "Matcher.find"
signature: "public boolean find()"
title: "Matcher.find"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.find

```java
public boolean find()
```

Attempts to find the next subsequence of the input sequence that matches
 the pattern.

 

 This method starts at the beginning of this matcher's region, or, if
 a previous invocation of the method was successful and the matcher has
 not since been reset, at the first character not matched by the previous
 match.

 

 If the match succeeds then more information can be obtained via the
 `start`, `end`, and `group` methods.

**返回**

- `true` if, and only if, a subsequence of the input sequence matches this matcher's pattern
