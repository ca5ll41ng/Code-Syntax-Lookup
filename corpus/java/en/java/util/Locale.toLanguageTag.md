---
id: "java-en-function-locale-tolanguagetag"
language: "java"
lang: "en"
category: "function"
name: "Locale.toLanguageTag"
signature: "public String toLanguageTag()"
title: "Locale.toLanguageTag"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.toLanguageTag

```java
public String toLanguageTag()
```

Returns a well-formed IETF BCP 47 language tag representing
 this locale.

 

If this `Locale` has a language, country, or
 variant that does not satisfy the IETF BCP 47 language tag
 syntax requirements, this method handles these fields as
 described below:

 

**Language:** If language is empty, or not
 `#def_language well-formed` (for example "a" or
 "e2"), it will be emitted as "und" (Undetermined).

 

**Country:** If country is not `#def_region well-formed`
 (for example "12" or "USA"), it will be omitted.

 

**Variant:** If variant **is** `#def_variant
 well-formed`, each sub-segment
 (delimited by '-' or '_') is emitted as a subtag.  Otherwise:
 

 
- if all sub-segments match `[0-9a-zA-Z]{1,8`}
 (for example "WIN" or "Oracle_JDK_Standard_Edition"), the first
 ill-formed sub-segment and all following will be appended to
 the private use subtag.  The first appended subtag will be
 "lvariant", followed by the sub-segments in order, separated by
 hyphen. For example, "x-lvariant-WIN",
 "Oracle-x-lvariant-JDK-Standard-Edition".

 
- if any sub-segment does not match
 `[0-9a-zA-Z]{1,8`}, the variant will be truncated
 and the problematic sub-segment and all following sub-segments
 will be omitted.  If the remainder is non-empty, it will be
 emitted as a private use subtag as above (even if the remainder
 turns out to be well-formed).  For example,
 "Solaris_isjustthecoolestthing" is emitted as
 "x-lvariant-Solaris", not as "solaris".

 

**Special Conversions:** Java supports some old locale
 representations, including deprecated ISO language codes,
 for compatibility. This method performs the following
 conversions:
 

 
- Deprecated ISO language codes "iw", "ji", and "in" are
 converted to "he", "yi", and "id", respectively.

 
- A locale with language "no", an empty script, country "NO", variant
 "NY", and no extensions, representing Norwegian Nynorsk (Norway), is
 converted to a language tag "nn-NO".

 

**Note:** Although the language tag obtained by this
 method is well-formed (satisfies the syntax requirements
 defined by the IETF BCP 47 specification), it is not
 necessarily a valid BCP 47 language tag.  For example,
 {@snippet lang=java :
   Locale.forLanguageTag("xx-YY").toLanguageTag();
 }

 will return "xx-YY", but the language subtag "xx" and the
 region subtag "YY" are invalid because they are not registered
 in the IANA Language Subtag Registry.

**返回**

- a BCP47 language tag representing the locale

**参见**

- #forLanguageTag(String)

> *Since 1.7*
