---
id: "java-en-function-pattern-asmatchpredicate"
language: "java"
lang: "en"
category: "function"
name: "Pattern.asMatchPredicate"
signature: "public Predicate<String> asMatchPredicate()"
title: "Pattern.asMatchPredicate"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.asMatchPredicate

```java
public Predicate<String> asMatchPredicate()
```

Creates a predicate that tests if this pattern matches a given input string.

 This method creates a predicate that behaves as if it creates a matcher
 from the input sequence and then calls `matches`, for example a
 predicate of the form:
 
```
`s -> matcher(s).matches();
 `
```

**返回**

- The predicate which can be used for matching an input string against this pattern.

**参见**

- Matcher#matches

> *Since 11*
