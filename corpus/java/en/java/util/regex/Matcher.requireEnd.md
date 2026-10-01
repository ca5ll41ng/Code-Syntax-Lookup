---
id: "java-en-function-matcher-requireend"
language: "java"
lang: "en"
category: "function"
name: "Matcher.requireEnd"
signature: "public boolean requireEnd()"
title: "Matcher.requireEnd"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.requireEnd

```java
public boolean requireEnd()
```

Returns true if more input could change a positive match into a
 negative one.

 

If this method returns true, and a match was found, then more
 input could cause the match to be lost. If this method returns false
 and a match was found, then more input might change the match but the
 match won't be lost. If a match was not found, then requireEnd has no
 meaning.

**返回**

- true iff more input could change a positive match into a negative one.

> *Since 1.5*
