---
id: "java-en-function-languagerange-languagerange"
language: "java"
lang: "en"
category: "function"
name: "LanguageRange.LanguageRange"
signature: "public LanguageRange(String range)"
title: "LanguageRange.LanguageRange"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LanguageRange.LanguageRange

```java
public LanguageRange(String range)
```

Constructs a `LanguageRange` using the given `range`.
 Note that no validation is done against the IANA Language Subtag
 Registry at time of construction.

 

This is equivalent to `LanguageRange(range, MAX_WEIGHT)`.

**参数**

- **range** — a language range

**异常**

- **NullPointerException** — if the given `range` is `null`
- **IllegalArgumentException** — if the given `range` does not comply with the syntax of the language range mentioned in RFC 4647
