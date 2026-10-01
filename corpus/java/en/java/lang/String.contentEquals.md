---
id: "java-en-function-string-contentequals"
language: "java"
lang: "en"
category: "function"
name: "String.contentEquals"
signature: "public boolean contentEquals(StringBuffer sb)"
title: "String.contentEquals"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.contentEquals

```java
public boolean contentEquals(StringBuffer sb)
```

Compares this string to the specified `StringBuffer`.  The result
 is `true` if and only if this `String` represents the same
 sequence of characters as the specified `StringBuffer`. This method
 synchronizes on the `StringBuffer`.

 

For finer-grained String comparison, refer to
 `java.text.Collator`.

**参数**

- **sb** — The `StringBuffer` to compare this `String` against

**返回**

- `true` if this `String` represents the same sequence of characters as the specified `StringBuffer`, `false` otherwise

> *Since 1.4*
