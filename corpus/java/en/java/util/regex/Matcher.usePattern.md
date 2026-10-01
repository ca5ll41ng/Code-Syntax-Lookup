---
id: "java-en-function-matcher-usepattern"
language: "java"
lang: "en"
category: "function"
name: "Matcher.usePattern"
signature: "public Matcher usePattern(Pattern newPattern)"
title: "Matcher.usePattern"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.usePattern

```java
public Matcher usePattern(Pattern newPattern)
```

Changes the `Pattern` that this `Matcher` uses to
 find matches with.

 

 This method causes this matcher to lose information
 about the groups of the last match that occurred. The
 matcher's position in the input is maintained and its
 last append position is unaffected.

**参数**

- **newPattern** — The new pattern used by this matcher

**返回**

- This matcher

**异常**

- **IllegalArgumentException** — If newPattern is `null`

> *Since 1.5*
