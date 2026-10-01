---
id: "java-en-function-languagerange-parse"
language: "java"
lang: "en"
category: "function"
name: "LanguageRange.parse"
signature: "public static List<LanguageRange> parse(String ranges)"
title: "LanguageRange.parse"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LanguageRange.parse

```java
public static List<LanguageRange> parse(String ranges)
```

Parses the given `ranges` to generate a Language Priority List.

 

This method performs a syntactic check for each language range in
 the given `ranges` but doesn't do validation using the IANA
 Language Subtag Registry.

 

The `ranges` to be given can take one of the following
 forms:

 
```

   "Accept-Language: ja,en;q=0.4"  (weighted list with Accept-Language prefix)
   "ja,en;q=0.4"                   (weighted list)
   "ja,en"                         (prioritized list)
 
```

 In a weighted list, each language range is given a weight value.
 The weight value has the same numeric bounds as the "quality value"
 RFC 2616, and it
 expresses how much the user prefers the language. A weight value is
 specified after a corresponding language range followed by
 `";q="`, and the default weight value is `MAX_WEIGHT`
 when it is omitted.

 

Unlike a weighted list, language ranges in a prioritized list
 are sorted in the descending order based on its priority. The first
 language range has the highest priority and meets the user's
 preference most.

 

In either case, language ranges are sorted in descending order in
 the Language Priority List based on priority or weight. If a
 language range appears in the given `ranges` more than once,
 only the first one is included on the Language Priority List.

 

The returned list consists of language ranges from the given
 `ranges` and their equivalents found in the IANA Language
 Subtag Registry. For example, if the given `ranges` is
 `"Accept-Language: iw,en-us;q=0.7,en;q=0.3"`, the elements in
 the list to be returned are:

 
```

  **Range**                                   **Weight**
    "iw" (older tag for Hebrew)             1.0
    "he" (new preferred code for Hebrew)    1.0
    "en-us" (English, United States)        0.7
    "en" (English)                          0.3
 
```

 Two language ranges, `"iw"` and `"he"`, have the same
 highest priority in the list. By adding `"he"` to the user's
 Language Priority List, locale-matching method can find Hebrew as a
 matching locale (or language tag) even if the application or system
 offers only `"he"` as a supported locale (or language tag).

**参数**

- **ranges** — a list of comma-separated language ranges or a list of language ranges in the form of the "Accept-Language" header defined in RFC 2616

**返回**

- a Language Priority List consisting of language ranges included in the given `ranges` and their equivalent language ranges if available. The list is modifiable.

**异常**

- **NullPointerException** — if `ranges` is null
- **IllegalArgumentException** — if, in the given `ranges`, a language range is ill-formed, or a weight is out of range after string to double conversion by `parseDouble`
