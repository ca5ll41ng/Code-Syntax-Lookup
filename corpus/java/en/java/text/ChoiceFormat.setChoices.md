---
id: "java-en-function-choiceformat-setchoices"
language: "java"
lang: "en"
category: "function"
name: "ChoiceFormat.setChoices"
signature: "public void setChoices(double[] limits, String[] formats)"
title: "ChoiceFormat.setChoices"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ChoiceFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceFormat.setChoices

```java
public void setChoices(double[] limits, String[] formats)
```

Set the choices to be used in formatting.

**参数**

- **limits** — contains the top value that you want parsed with that format, and should be in ascending sorted order. When formatting X, the choice will be the i, where limit[i] &le; X < limit[i+1]. If the limit array is not in ascending order, the results of formatting will be incorrect.
- **formats** — are the formats you want to use for each limit.

**异常**

- **NullPointerException** — if `limits` or `formats` is `null`
- **IllegalArgumentException** — if the length of `limits` and `formats` are not equal
