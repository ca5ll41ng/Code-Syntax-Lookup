---
id: "java-en-function-numericposition-applypattern"
language: "java"
lang: "en"
category: "function"
name: "NumericPosition.applyPattern"
signature: "public void applyPattern(String pattern)"
title: "NumericPosition.applyPattern"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericPosition.applyPattern

```java
public void applyPattern(String pattern)
```

Apply the given pattern to this Format object.  A pattern is a
 short-hand specification for the various formatting properties.
 These properties can also be changed individually through the
 various setter methods.
 

 The number of maximum integer digits is usually not derived from the pattern.
 See the note in the `#patterns Patterns` section for more detail.
 For negative numbers, use a second pattern, separated by a semicolon
 

Example `"#,#00.0#"` &rarr; 1,234.56
 

This means a minimum of 2 integer digits, 1 fraction digit, and
 a maximum of 2 fraction digits.
 

Example: `"#,#00.0#;(#,#00.0#)"` for negatives in
 parentheses.
 

In negative patterns, the minimum and maximum counts are ignored;
 these are presumed to be set in the positive pattern.

**参数**

- **pattern** — a new pattern

**异常**

- **NullPointerException** — if `pattern` is null
- **IllegalArgumentException** — if the given pattern is invalid.
