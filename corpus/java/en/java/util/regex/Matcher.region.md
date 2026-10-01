---
id: "java-en-function-matcher-region"
language: "java"
lang: "en"
category: "function"
name: "Matcher.region"
signature: "public Matcher region(int start, int end)"
title: "Matcher.region"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.region

```java
public Matcher region(int start, int end)
```

Sets the limits of this matcher's region. The region is the part of the
 input sequence that will be searched to find a match. Invoking this
 method resets the matcher, and then sets the region to start at the
 index specified by the `start` parameter and end at the
 index specified by the `end` parameter.

 

Depending on the transparency and anchoring being used (see
 `useTransparentBounds(boolean) useTransparentBounds` and
 `useAnchoringBounds(boolean) useAnchoringBounds`), certain
 constructs such as anchors may behave differently at or around the
 boundaries of the region.

**参数**

- **start** — The index to start searching at (inclusive)
- **end** — The index to end searching at (exclusive)

**返回**

- this matcher

**异常**

- **IndexOutOfBoundsException** — If start or end is less than zero, if start is greater than the length of the input sequence, if end is greater than the length of the input sequence, or if start is greater than end.

> *Since 1.5*
