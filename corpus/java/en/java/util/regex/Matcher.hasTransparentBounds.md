---
id: "java-en-function-matcher-hastransparentbounds"
language: "java"
lang: "en"
category: "function"
name: "Matcher.hasTransparentBounds"
signature: "public boolean hasTransparentBounds()"
title: "Matcher.hasTransparentBounds"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.hasTransparentBounds

```java
public boolean hasTransparentBounds()
```

Queries the transparency of region bounds for this matcher.

 

 This method returns `true` if this matcher uses
 transparent bounds, `false` if it uses opaque
 bounds.

 

 See `useTransparentBounds(boolean) useTransparentBounds` for a
 description of transparent and opaque bounds.

 

 By default, a matcher uses opaque region boundaries.

**返回**

- `true` iff this matcher is using transparent bounds, `false` otherwise.

**参见**

- java.util.regex.Matcher#useTransparentBounds(boolean)

> *Since 1.5*
