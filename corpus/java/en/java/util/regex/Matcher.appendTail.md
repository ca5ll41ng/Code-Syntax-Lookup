---
id: "java-en-function-matcher-appendtail"
language: "java"
lang: "en"
category: "function"
name: "Matcher.appendTail"
signature: "public StringBuffer appendTail(StringBuffer sb)"
title: "Matcher.appendTail"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.appendTail

```java
public StringBuffer appendTail(StringBuffer sb)
```

Implements a terminal append-and-replace step.

 

 This method reads characters from the input sequence, starting at
 the append position, and appends them to the given string buffer.  It is
 intended to be invoked after one or more invocations of the `appendReplacement(StringBuffer, String) appendReplacement` method in
 order to copy the remainder of the input sequence.

**参数**

- **sb** — The target string buffer

**返回**

- The target string buffer
