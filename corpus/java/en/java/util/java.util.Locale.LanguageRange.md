---
id: "java-en-function-java-util-locale-languagerange"
language: "java"
lang: "en"
category: "function"
name: "java.util.Locale.LanguageRange"
title: "LanguageRange"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LanguageRange

This class expresses a Language Range defined in
 RFC 4647 Matching of
 Language Tags. A language range is an identifier which is used to
 select language tag(s) meeting specific requirements by using the
 mechanisms described in `#LocaleMatching Locale
 Matching`. A list which represents a user's preferences and consists
 of language ranges is called a Language Priority List.

 

There are two types of language ranges: basic and extended. In RFC
 4647, the syntax of language ranges is expressed in
 ABNF as follows:
 
```

     basic-language-range    = (1*8ALPHA *("-" 1*8alphanum)) / "*"
     extended-language-range = (1*8ALPHA / "*")
                               *("-" (1*8alphanum / "*"))
     alphanum                = ALPHA / DIGIT
 
```

 
 For example, `"en"` (English), `"ja-JP"` (Japanese, Japan),
 `"*"` (special language range which matches any language tag) are
 basic language ranges, whereas `"*-CH"` (any languages,
 Switzerland), `"es-*"` (Spanish, any regions), and
 `"zh-Hant-*"` (Traditional Chinese, any regions) are extended
 language ranges.

**参见**

- #filter(List, Collection, FilteringMode)
- #filterTags(List, Collection, FilteringMode)
- #lookup(List, Collection)
- #lookupTag(List, Collection)

> *Since 1.8*
