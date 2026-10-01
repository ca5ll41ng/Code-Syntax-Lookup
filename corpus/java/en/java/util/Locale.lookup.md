---
id: "java-en-function-locale-lookup"
language: "java"
lang: "en"
category: "function"
name: "Locale.lookup"
signature: "public static Locale lookup(List<LanguageRange> priorityList, Collection<Locale> locales)"
title: "Locale.lookup"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.lookup

```java
public static Locale lookup(List<LanguageRange> priorityList, Collection<Locale> locales)
```

Returns a `Locale` instance for the best-matching language
 tag using the lookup mechanism defined in RFC 4647.

**参数**

- **priorityList** — user's Language Priority List in which each language tag is sorted in descending order based on priority or weight
- **locales** — `Locale` instances used for matching

**返回**

- the best matching `Locale` instance chosen based on priority or weight, or `null` if nothing matches.

**异常**

- **NullPointerException** — if `priorityList` or `locales` are `null`. `NullPointerException` may be thrown if any elements within either `Collection` are `null`.

> *Since 1.8*
