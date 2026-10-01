---
id: "java-en-function-locale-lookuptag"
language: "java"
lang: "en"
category: "function"
name: "Locale.lookupTag"
signature: "public static String lookupTag(List<LanguageRange> priorityList, Collection<String> tags)"
title: "Locale.lookupTag"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.lookupTag

```java
public static String lookupTag(List<LanguageRange> priorityList, Collection<String> tags)
```

Returns the best-matching language tag using the lookup mechanism
 defined in RFC 4647.

 This lookup operation on the given `tags` ensures that the
 first matching tag with preserved case is returned.

**参数**

- **priorityList** — user's Language Priority List in which each language tag is sorted in descending order based on priority or weight
- **tags** — language tags used for matching

**返回**

- the best matching language tag chosen based on priority or weight, or `null` if nothing matches.

**异常**

- **NullPointerException** — if `priorityList` or `tags` are `null`. `NullPointerException` may be thrown if any elements within either `Collection` are `null`.

> *Since 1.8*
