---
id: "java-en-function-locale-casefoldlanguagetag"
language: "java"
lang: "en"
category: "function"
name: "Locale.caseFoldLanguageTag"
signature: "public static String caseFoldLanguageTag(String languageTag)"
title: "Locale.caseFoldLanguageTag"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.caseFoldLanguageTag

```java
public static String caseFoldLanguageTag(String languageTag)
```

{@return a case folded IETF BCP 47 language tag}

 

This method formats a language tag into one with case convention
 that adheres to section 2.1.1. Formatting of Language Tags of RFC 5646.
 This format is defined as: All subtags, including extension and private
 use subtags, use lowercase letters with two exceptions: two-letter
 and four-letter subtags that neither appear at the start of the tag
 nor occur after singletons. Such two-letter subtags are all
 uppercase (as in the tags "en-CA-x-ca" or "sgn-BE-FR") and four-
 letter subtags are titlecase (as in the tag "az-Latn-x-latn"). As
 legacy tags, (defined as "grandfathered" in RFC 5646) are not always well-formed, this method
 will simply case fold a legacy tag to match the exact case convention
 for the particular tag specified in the respective
 `#legacy_tags Legacy tags` table.

 

**Special Exceptions**
 

To maintain consistency with `#def_variant variant`
 which is case-sensitive, this method will neither case fold variant
 subtags nor case fold private use subtags prefixed by `lvariant`.

 

For example,
 {@snippet lang=java :
 String tag = "ja-kana-jp-x-lvariant-Oracle-JDK-Standard-Edition";
 Locale.caseFoldLanguageTag(tag); // returns "ja-Kana-JP-x-lvariant-Oracle-JDK-Standard-Edition"
 String tag2 = "ja-kana-jp-x-Oracle-JDK-Standard-Edition";
 Locale.caseFoldLanguageTag(tag2); // returns "ja-Kana-JP-x-oracle-jdk-standard-edition"
 }

 

Excluding case folding, this method makes no modifications to the tag itself.
 Case convention of language tags does not carry meaning, and is simply
 recommended as it corresponds with various ISO standards, including:
 ISO639-1, ISO15924, and ISO3166-1.

 

As the formatting of the case convention is dependent on the
 positioning of certain subtags, callers of this method should ensure
 that the language tag is well-formed, (conforming to section 2.1. Syntax
 of RFC 5646).

       RFC 5646: 2.1. Syntax
       RFC 5646: 2.1.1. Formatting of Language Tags

**参数**

- **languageTag** — the IETF BCP 47 language tag.

**异常**

- **IllformedLocaleException** — if `languageTag` is not well-formed
- **NullPointerException** — if `languageTag` is `null`

> *Since 21*
