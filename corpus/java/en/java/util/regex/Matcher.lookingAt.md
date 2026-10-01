---
id: "java-en-function-matcher-lookingat"
language: "java"
lang: "en"
category: "function"
name: "Matcher.lookingAt"
signature: "public boolean lookingAt()"
title: "Matcher.lookingAt"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.lookingAt

```java
public boolean lookingAt()
```

Attempts to match the input sequence, starting at the beginning of the
 region, against the pattern.

 

 Like the `matches matches` method, this method always starts
 at the beginning of the region; unlike that method, it does not
 require that the entire region be matched.

 

 If the match succeeds then more information can be obtained via the
 `start`, `end`, and `group` methods.

**返回**

- `true` if, and only if, a prefix of the input sequence matches this matcher's pattern
