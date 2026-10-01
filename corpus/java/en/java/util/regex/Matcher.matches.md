---
id: "java-en-function-matcher-matches"
language: "java"
lang: "en"
category: "function"
name: "Matcher.matches"
signature: "public boolean matches()"
title: "Matcher.matches"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.matches

```java
public boolean matches()
```

Attempts to match the entire region against the pattern.

 

 If the match succeeds then more information can be obtained via the
 `start`, `end`, and `group` methods.

**返回**

- `true` if, and only if, the entire region sequence matches this matcher's pattern
