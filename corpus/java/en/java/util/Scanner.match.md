---
id: "java-en-function-scanner-match"
language: "java"
lang: "en"
category: "function"
name: "Scanner.match"
signature: "public MatchResult match()"
title: "Scanner.match"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.match

```java
public MatchResult match()
```

Returns the match result of the last scanning operation performed
 by this scanner. This method throws `IllegalStateException`
 if no match has been performed, or if the last match was
 not successful.

 

The various `next` methods of `Scanner`
 make a match result available if they complete without throwing an
 exception. For instance, after an invocation of the `nextInt`
 method that returned an int, this method returns a
 `MatchResult` for the search of the
 Integer regular expression
 defined above. Similarly the `findInLine findInLine`,
 `findWithinHorizon findWithinHorizon`, and `skip skip`
 methods will make a match available if they succeed.

**返回**

- a match result for the last match operation

**异常**

- **IllegalStateException** — If no match result is available
