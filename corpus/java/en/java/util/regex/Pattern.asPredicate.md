---
id: "java-en-function-pattern-aspredicate"
language: "java"
lang: "en"
category: "function"
name: "Pattern.asPredicate"
signature: "public Predicate<String> asPredicate()"
title: "Pattern.asPredicate"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.asPredicate

```java
public Predicate<String> asPredicate()
```

Creates a predicate that tests if this pattern is found in a given input
 string.

 This method creates a predicate that behaves as if it creates a matcher
 from the input sequence and then calls `find`, for example a
 predicate of the form:
 
```
`s -> matcher(s).find();
 `
```

**返回**

- The predicate which can be used for finding a match on a subsequence of a string

**参见**

- Matcher#find

> *Since 1.8*
