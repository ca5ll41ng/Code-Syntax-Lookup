---
id: "java-en-function-choiceformat-choiceformat"
language: "java"
lang: "en"
category: "function"
name: "ChoiceFormat.ChoiceFormat"
signature: "public ChoiceFormat(String newPattern)"
title: "ChoiceFormat.ChoiceFormat"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ChoiceFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceFormat.ChoiceFormat

```java
public ChoiceFormat(String newPattern)
```

Constructs a ChoiceFormat with limits and corresponding formats
 based on the pattern. The syntax and error related caveats for the
 ChoiceFormat pattern can be found in the `#patterns Patterns`
 section. Unlike `ChoiceFormat`, this constructor will
 throw an `IllegalArgumentException` if the `limits` are not
 in ascending order.

**参数**

- **newPattern** — the new pattern string

**异常**

- **NullPointerException** — if `newPattern` is `null`
- **IllegalArgumentException** — if `newPattern` violates the pattern syntax

**参见**

- #applyPattern
