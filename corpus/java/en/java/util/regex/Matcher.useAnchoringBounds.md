---
id: "java-en-function-matcher-useanchoringbounds"
language: "java"
lang: "en"
category: "function"
name: "Matcher.useAnchoringBounds"
signature: "public Matcher useAnchoringBounds(boolean b)"
title: "Matcher.useAnchoringBounds"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.useAnchoringBounds

```java
public Matcher useAnchoringBounds(boolean b)
```

Sets the anchoring of region bounds for this matcher.

 

 Invoking this method with an argument of `true` will set this
 matcher to use anchoring bounds. If the boolean
 argument is `false`, then non-anchoring bounds will be
 used.

 

 Using anchoring bounds, the boundaries of this
 matcher's region match anchors such as ^ and $.

 

 Without anchoring bounds, the boundaries of this
 matcher's region will not match anchors such as ^ and $.

 

 By default, a matcher uses anchoring region boundaries.

**参数**

- **b** — a boolean indicating whether or not to use anchoring bounds.

**返回**

- this matcher

**参见**

- java.util.regex.Matcher#hasAnchoringBounds

> *Since 1.5*
