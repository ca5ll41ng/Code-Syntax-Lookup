---
id: "java-en-function-attributedstring-addattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributedString.addAttribute"
signature: "public void addAttribute(Attribute attribute, Object value)"
title: "AttributedString.addAttribute"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/AttributedString.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributedString.addAttribute

```java
public void addAttribute(Attribute attribute, Object value)
```

Adds an attribute to the entire string.

**参数**

- **attribute** — the attribute key
- **value** — the value of the attribute; may be null

**异常**

- **NullPointerException** — if `attribute` is null.
- **IllegalArgumentException** — if the AttributedString has length 0 (attributes cannot be applied to a 0-length range).
