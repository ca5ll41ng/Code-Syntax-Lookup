---
id: "java-en-function-locale-filtertags"
language: "java"
lang: "en"
category: "function"
name: "Locale.filterTags"
signature: "public static List<String> filterTags(List<LanguageRange> priorityList, Collection<String> tags, FilteringMode mode)"
title: "Locale.filterTags"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.filterTags

```java
public static List<String> filterTags(List<LanguageRange> priorityList, Collection<String> tags, FilteringMode mode)
```

Returns a list of matching languages tags using the basic filtering
 mechanism defined in RFC 4647.

 This filter operation on the given `tags` ensures that only
 unique matching tag(s) are returned with preserved case. In case of
 duplicate matching tags with the case difference, the first matching
 tag with preserved case is returned.
 For example, "de-ch" is returned out of the duplicate matching tags
 "de-ch" and "de-CH", if "de-ch" is checked first for matching in the
 given `tags`. Note that if the given `tags` is an unordered
 `Collection`, the returned matching tag out of duplicate tags is
 subject to change, depending on the implementation of the
 `Collection`.

**参数**

- **priorityList** — user's Language Priority List in which each language tag is sorted in descending order based on priority or weight
- **tags** — language tags
- **mode** — filtering mode

**返回**

- a list of matching language tags sorted in descending order based on priority or weight, or an empty list if nothing matches. The list is modifiable.

**异常**

- **NullPointerException** — if `priorityList` or `tags` are `null`. `NullPointerException` may be thrown if any elements within either `Collection` are `null`.
- **IllegalArgumentException** — if one or more extended language ranges are included in the given list when `REJECT_EXTENDED_RANGES` is specified

> *Since 1.8*
