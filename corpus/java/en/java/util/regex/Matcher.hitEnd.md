---
id: "java-en-function-matcher-hitend"
language: "java"
lang: "en"
category: "function"
name: "Matcher.hitEnd"
signature: "public boolean hitEnd()"
title: "Matcher.hitEnd"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.hitEnd

```java
public boolean hitEnd()
```

Returns true if the end of input was hit by the search engine in
 the last match operation performed by this matcher.

 

When this method returns true, then it is possible that more input
 would have changed the result of the last search.

**返回**

- true iff the end of input was hit in the last match; false otherwise

> *Since 1.5*
