---
id: "java-en-function-locale-forlanguagetag"
language: "java"
lang: "en"
category: "function"
name: "Locale.forLanguageTag"
signature: "public static Locale forLanguageTag(String languageTag)"
title: "Locale.forLanguageTag"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.forLanguageTag

```java
public static Locale forLanguageTag(String languageTag)
```

Returns a locale for the specified IETF BCP 47 language tag string.

 

If the specified language tag contains any ill-formed subtags,
 the first such subtag and all following subtags are ignored.  Compare
 to `setLanguageTag` which throws an exception
 in this case.

 

Duplicate variants are accepted and included by the builder.
 However, duplicate extension singleton keys and their associated type
 are accepted but ignored. The same behavior applies to duplicate locale
 keys and attributes within a U extension. Note that subsequent subtags after
 the occurrence of a duplicate are not ignored.

 

The following conversions are performed:

 
- The language code "und" is mapped to language "".

 
- The language codes "iw", "ji", and "in" are mapped to "he",
 "yi", and "id" respectively. (This is the same canonicalization
 that's done in Locale's constructors.) See
 `#legacy_language_codes Legacy language codes`
 for more information.

 
- The portion of a private use subtag prefixed by "lvariant",
 if any, is removed and appended to the variant field in the
 result locale (without case normalization).  If it is then
 empty, the private use subtag is discarded:

 {@snippet lang=java :
     Locale loc;
     loc = Locale.forLanguageTag("en-US-x-lvariant-POSIX");
     loc.getVariant(); // returns "POSIX"
     loc.getExtension('x'); // returns null

     loc = Locale.forLanguageTag("de-POSIX-x-URP-lvariant-Abc-Def");
     loc.getVariant(); // returns "POSIX_Abc_Def"
     loc.getExtension('x'); // returns "urp"
 }

 
-  BCP 47 language tags permit up to three extlang subtags. However,
 the second and third extlang subtags are always ignored. As such,
 the first extlang subtag in `languageTag` is used as the language,
 and the primary language subtag and other extlang subtags are ignored.
 Language tags that exceed three extlang subtags are considered
 ill-formed starting at the offending extlang subtag.

 {@snippet lang=java :
     Locale.forLanguageTag("ar-aao").getLanguage(); // returns "aao"
     Locale.forLanguageTag("en-abc-def-us").toString(); // returns "abc_US"
     Locale.forLanguageTag("zh-yue-gan-cmn-czh-CN").toString();
     // returns "yue"; "czh" exceeds the extlang limit, and subsequent
     // subtags are considered ill-formed
 }

 
- Case is normalized except for variant tags, which are left
 unchanged.  Language is normalized to lower case, script to
 title case, country to upper case, and extensions to lower
 case.

 
- If, after processing, the locale would exactly match either
 ja_JP_JP or th_TH_TH with no extensions, the appropriate
 extensions are added as though the constructor had been called:

 {@snippet lang=java :
    Locale.forLanguageTag("ja-JP-x-lvariant-JP").toLanguageTag();
    // returns "ja-JP-u-ca-japanese-x-lvariant-JP"
    Locale.forLanguageTag("th-TH-x-lvariant-TH").toLanguageTag();
    // returns "th-TH-u-nu-thai-x-lvariant-TH"
 }

 This implements the 'Language-Tag' production of BCP47, and
 so supports legacy (regular and irregular, referred to as
 "Type: grandfathered" in BCP47) as well as
 private use language tags.  Stand alone private use tags are
 represented as empty language and extension 'x-whatever',
 and legacy tags are converted to their canonical replacements
 where they exist.

 

Legacy tags with canonical replacements are as follows:

 
 Legacy tags with canonical replacements
 
 legacy tagmodern replacement
 
 
 art-lojbanjbo
 i-amiami
 i-bnnbnn
 i-hakhak
 i-klingontlh
 i-luxlb
 i-navajonv
 i-pwnpwn
 i-taotao
 i-taytay
 i-tsutsu
 no-boknb
 no-nynnn
 sgn-BE-FRsfb
 sgn-BE-NLvgt
 sgn-CH-DEsgg
 zh-guoyucmn
 zh-hakkahak
 zh-min-nannan
 zh-xianghsn
 
 

 

Legacy tags with no modern replacement will be
 converted as follows:

 
 Legacy tags with no modern replacement
 
 legacy tagconverts to
 
 
 cel-gaulishxtg-x-cel-gaulish
 en-GB-oeden-GB-x-oed
 i-defaulten-x-i-default
 i-enochianund-x-i-enochian
 i-mingosee-x-i-mingo
 zh-minnan-x-zh-min
 
 

 

For a list of all legacy tags, see the
 IANA Language Subtag Registry (search for "Type: grandfathered").

 

**Note**: there is no guarantee that `toLanguageTag`
 and `forLanguageTag` will round-trip.

**参数**

- **languageTag** — the language tag

**返回**

- The locale that best represents the language tag.

**异常**

- **NullPointerException** — if `languageTag` is `null`

**参见**

- #toLanguageTag()
- java.util.Locale.Builder#setLanguageTag(String)

> *Since 1.7*
