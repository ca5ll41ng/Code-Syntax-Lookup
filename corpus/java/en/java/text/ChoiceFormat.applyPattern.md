---
id: "java-en-function-choiceformat-applypattern"
language: "java"
lang: "en"
category: "function"
name: "ChoiceFormat.applyPattern"
signature: "public void applyPattern(String newPattern)"
title: "ChoiceFormat.applyPattern"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ChoiceFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceFormat.applyPattern

```java
public void applyPattern(String newPattern)
```

Apply the given pattern to this ChoiceFormat object. The syntax and error
 related caveats for the ChoiceFormat pattern can be found in the
 `#patterns Patterns` section. Unlike `setChoices(double[],
 String[])`, this method will throw an `IllegalArgumentException` if
 the `limits` are not in ascending order.

**参数**

- **newPattern** — a pattern string

**异常**

- **NullPointerException** — if `newPattern` is `null`
- **IllegalArgumentException** — if `newPattern` violates the pattern syntax

**参见**

- #ChoiceFormat(String)
