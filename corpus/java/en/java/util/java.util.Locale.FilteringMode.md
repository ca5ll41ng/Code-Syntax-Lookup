---
id: "java-en-function-java-util-locale-filteringmode"
language: "java"
lang: "en"
category: "function"
name: "java.util.Locale.FilteringMode"
title: "FilteringMode"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilteringMode

This enum provides constants to select a filtering mode for locale
 matching. Refer to RFC 4647
 Matching of Language Tags for details.

 

As an example, think of two Language Priority Lists each of which
 includes only one language range and a set of following language tags:

 
```

    de (German)
    de-DE (German, Germany)
    de-Deva (German, in Devanagari script)
    de-Deva-DE (German, in Devanagari script, Germany)
    de-DE-1996 (German, Germany, orthography of 1996)
    de-Latn-DE (German, in Latin script, Germany)
    de-Latn-DE-1996 (German, in Latin script, Germany, orthography of 1996)
 
```

 The filtering method will behave as follows:

 
 Filtering method behavior
 
 
 Filtering Mode
 Language Priority List: `"de-DE"`
 Language Priority List: `"de-*-DE"`
 
 
 
 
 
 `AUTOSELECT_FILTERING AUTOSELECT_FILTERING`
 
 
 Performs basic filtering and returns `"de-DE"` and
 `"de-DE-1996"`.
 
 
 Performs extended filtering and returns `"de-DE"`,
 `"de-Deva-DE"`, `"de-DE-1996"`, `"de-Latn-DE"`, and
 `"de-Latn-DE-1996"`.
 
 
 
 
 `EXTENDED_FILTERING EXTENDED_FILTERING`
 
 
 Performs extended filtering and returns `"de-DE"`,
 `"de-Deva-DE"`, `"de-DE-1996"`, `"de-Latn-DE"`, and
 `"de-Latn-DE-1996"`.
 
 Same as above.
 
 
 
 `IGNORE_EXTENDED_RANGES IGNORE_EXTENDED_RANGES`
 
 
 Performs basic filtering and returns `"de-DE"` and
 `"de-DE-1996"`.
 
 
 Performs basic filtering and returns `null` because
 nothing matches.
 
 
 
 
 `MAP_EXTENDED_RANGES MAP_EXTENDED_RANGES`
 
 Same as above.
 
 Performs basic filtering and returns `"de-DE"` and
 `"de-DE-1996"` because `"de-*-DE"` is mapped to
 `"de-DE"`.
 
 
 
 
 `REJECT_EXTENDED_RANGES REJECT_EXTENDED_RANGES`
 
 Same as above.
 
 Throws `IllegalArgumentException` because `"de-*-DE"` is
 not a valid basic language range.

**参见**

- #filter(List, Collection, FilteringMode)
- #filterTags(List, Collection, FilteringMode)

> *Since 1.8*
