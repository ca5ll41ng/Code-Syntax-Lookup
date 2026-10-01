---
id: "java-en-function-choiceformat-format"
language: "java"
lang: "en"
category: "function"
name: "ChoiceFormat.format"
signature: "public StringBuffer format(long number, StringBuffer toAppendTo, FieldPosition status)"
title: "ChoiceFormat.format"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ChoiceFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceFormat.format

```java
public StringBuffer format(long number, StringBuffer toAppendTo, FieldPosition status)
```

Specialization of format. This method really calls
 `format`.
 Thus, the range of longs that are supported is only equal to
 the range that can be stored by double. This will never be
 a practical limitation.

**参数**

- **number** — number to be formatted and substituted.
- **toAppendTo** — where text is appended.
- **status** — ignore no useful status is returned.

**异常**

- **ArrayIndexOutOfBoundsException** — if either the `limits` or `formats` of this ChoiceFormat are empty
- **NullPointerException** — if `toAppendTo` is `null`
