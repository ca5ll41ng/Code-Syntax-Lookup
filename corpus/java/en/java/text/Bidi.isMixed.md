---
id: "java-en-function-bidi-ismixed"
language: "java"
lang: "en"
category: "function"
name: "Bidi.isMixed"
signature: "public boolean isMixed()"
title: "Bidi.isMixed"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.isMixed

```java
public boolean isMixed()
```

Return true if the line is not left-to-right or right-to-left.  This means it either has mixed runs of left-to-right
 and right-to-left text, or the base direction differs from the direction of the only run of text.

**返回**

- true if the line is not left-to-right or right-to-left.
