---
id: "java-en-function-matcher-usetransparentbounds"
language: "java"
lang: "en"
category: "function"
name: "Matcher.useTransparentBounds"
signature: "public Matcher useTransparentBounds(boolean b)"
title: "Matcher.useTransparentBounds"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.useTransparentBounds

```java
public Matcher useTransparentBounds(boolean b)
```

Sets the transparency of region bounds for this matcher.

 

 Invoking this method with an argument of `true` will set this
 matcher to use transparent bounds. If the boolean
 argument is `false`, then opaque bounds will be used.

 

 Using transparent bounds, the boundaries of this
 matcher's region are transparent to lookahead, lookbehind,
 and boundary matching constructs. Those constructs can see beyond the
 boundaries of the region to see if a match is appropriate.

 

 Using opaque bounds, the boundaries of this matcher's
 region are opaque to lookahead, lookbehind, and boundary matching
 constructs that may try to see beyond them. Those constructs cannot
 look past the boundaries so they will fail to match anything outside
 of the region.

 

 By default, a matcher uses opaque bounds.

**参数**

- **b** — a boolean indicating whether to use opaque or transparent regions

**返回**

- this matcher

**参见**

- java.util.regex.Matcher#hasTransparentBounds

> *Since 1.5*
