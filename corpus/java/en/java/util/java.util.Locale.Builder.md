---
id: "java-en-function-java-util-locale-builder"
language: "java"
lang: "en"
category: "function"
name: "java.util.Locale.Builder"
title: "Builder"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder

`Builder` is used to build instances of `Locale`
 from values configured by the setters.  Unlike the `Locale`
 constructors or `Locale.of()` factory methods,
 the `Builder` checks if a value configured by a
 setter satisfies the syntax requirements defined by the `Locale`
 class.  A `Locale` object obtained from a `Builder` is
 well-formed and can be transformed to a well-formed IETF BCP 47 language tag
 without losing information.

 The `Locale` class does not provide any
 syntactic restrictions on variant, while BCP 47 requires each variant
 subtag to be 5 to 8 alphanumerics or a single numeric followed by 3
 alphanumerics.  The method `setVariant` throws
 `IllformedLocaleException` for a variant that does not satisfy
 this restriction. If it is necessary to support such a variant, use
 `of`.  However, keep in mind that a `Locale`
 object obtained this way might lose the variant information when
 transformed to a BCP 47 language tag.

 

The following example shows how to obtain a `Locale` object
 using a `Builder`.
 {@snippet lang=java :
 Locale aLocale = new Locale.Builder().setLanguage("sr").setScript("Latn").setRegion("RS").build();
 }

 

Builders can be reused; `clear()` resets all
 fields to their default values.

**参见**

- Locale#forLanguageTag(String)
- Locale#of(String, String, String)

> *Since 1.7*
