---
id: "java-en-function-matcher-reset"
language: "java"
lang: "en"
category: "function"
name: "Matcher.reset"
signature: "public Matcher reset()"
title: "Matcher.reset"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.reset

```java
public Matcher reset()
```

Resets this matcher.

 

 Resetting a matcher discards all of its explicit state information
 and sets its append position to zero. The matcher's region is set to the
 default region, which is its entire character sequence. The anchoring
 and transparency of this matcher's region boundaries are unaffected.

**返回**

- This matcher
