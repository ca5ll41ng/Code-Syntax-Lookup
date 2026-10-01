---
id: "java-en-function-attributedstring-addattributes"
language: "java"
lang: "en"
category: "function"
name: "AttributedString.addAttributes"
signature: "public void addAttributes(Map<? extends Attribute, ?> attributes, int beginIndex, int endIndex)"
title: "AttributedString.addAttributes"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/AttributedString.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributedString.addAttributes

```java
public void addAttributes(Map<? extends Attribute, ?> attributes, int beginIndex, int endIndex)
```

Adds a set of attributes to a subrange of the string.

**参数**

- **attributes** — The attributes to be added to the string.
- **beginIndex** — Index of the first character of the range.
- **endIndex** — Index of the character following the last character of the range.

**异常**

- **NullPointerException** — if `attributes` is null.
- **IllegalArgumentException** — if beginIndex is less than 0, endIndex is greater than the length of the string, or beginIndex and endIndex together don't define a non-empty subrange of the string and the attributes parameter is not an empty Map.
