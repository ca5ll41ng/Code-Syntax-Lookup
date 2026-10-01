---
id: "java-en-function-locale-filter"
language: "java"
lang: "en"
category: "function"
name: "Locale.filter"
signature: "public static List<Locale> filter(List<LanguageRange> priorityList, Collection<Locale> locales, FilteringMode mode)"
title: "Locale.filter"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.filter

```java
public static List<Locale> filter(List<LanguageRange> priorityList, Collection<Locale> locales, FilteringMode mode)
```

Returns a list of matching `Locale` instances using the filtering
 mechanism defined in RFC 4647.

 This filter operation on the given `locales` ensures that only
 unique matching locale(s) are returned.

**参数**

- **priorityList** — user's Language Priority List in which each language tag is sorted in descending order based on priority or weight
- **locales** — `Locale` instances used for matching
- **mode** — filtering mode

**返回**

- a list of `Locale` instances for matching language tags sorted in descending order based on priority or weight, or an empty list if nothing matches. The list is modifiable.

**异常**

- **NullPointerException** — if `priorityList` or `locales` are `null`. `NullPointerException` may be thrown if any elements within either `Collection` are `null`.
- **IllegalArgumentException** — if one or more extended language ranges are included in the given list when `REJECT_EXTENDED_RANGES` is specified

> *Since 1.8*
