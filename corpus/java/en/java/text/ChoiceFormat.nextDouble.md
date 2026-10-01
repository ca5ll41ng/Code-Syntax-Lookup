---
id: "java-en-function-choiceformat-nextdouble"
language: "java"
lang: "en"
category: "function"
name: "ChoiceFormat.nextDouble"
signature: "public static final double nextDouble (double d)"
title: "ChoiceFormat.nextDouble"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ChoiceFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceFormat.nextDouble

```java
public static final double nextDouble (double d)
```

Finds the least double greater than `d`.
 If `NaN`, returns same value.
 

Used to make half-open intervals.

 `nextUp`

**参数**

- **d** — the reference value

**返回**

- the least double value greater than `d`

**参见**

- #previousDouble
