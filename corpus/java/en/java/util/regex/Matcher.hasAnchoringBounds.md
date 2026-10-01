---
id: "java-en-function-matcher-hasanchoringbounds"
language: "java"
lang: "en"
category: "function"
name: "Matcher.hasAnchoringBounds"
signature: "public boolean hasAnchoringBounds()"
title: "Matcher.hasAnchoringBounds"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.hasAnchoringBounds

```java
public boolean hasAnchoringBounds()
```

Queries the anchoring of region bounds for this matcher.

 

 This method returns `true` if this matcher uses
 anchoring bounds, `false` otherwise.

 

 See `useAnchoringBounds(boolean) useAnchoringBounds` for a
 description of anchoring bounds.

 

 By default, a matcher uses anchoring region boundaries.

**返回**

- `true` iff this matcher is using anchoring bounds, `false` otherwise.

**参见**

- java.util.regex.Matcher#useAnchoringBounds(boolean)

> *Since 1.5*
