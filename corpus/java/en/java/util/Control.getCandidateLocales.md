---
id: "java-en-function-control-getcandidatelocales"
language: "java"
lang: "en"
category: "function"
name: "Control.getCandidateLocales"
signature: "public List<Locale> getCandidateLocales(String baseName, Locale locale)"
title: "Control.getCandidateLocales"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.getCandidateLocales

```java
public List<Locale> getCandidateLocales(String baseName, Locale locale)
```

Returns a `List` of `Locale`s as candidate
 locales for `baseName` and `locale`. This
 method is called by the `ResourceBundle.getBundle`
 factory method each time the factory method tries finding a
 resource bundle for a target `Locale`.

 

The sequence of the candidate locales also corresponds to the
 runtime resource lookup path (also known as the parent
 chain), if the corresponding resource bundles for the
 candidate locales exist and their parents are not defined by
 loaded resource bundles themselves.  The last element of the list
 must be a `ROOT root locale` if it is desired to
 have the base bundle as the terminal of the parent chain.

 

If the given locale is equal to `Locale.ROOT` (the
 root locale), a `List` containing only the root
 `Locale` must be returned. In this case, the
 `ResourceBundle.getBundle` factory method loads only
 the base bundle as the resulting resource bundle.

 

It is not a requirement to return an immutable (unmodifiable)
 `List`. However, the returned `List` must not
 be mutated after it has been returned by
 `getCandidateLocales`.

 

The default implementation returns a `List` containing
 `Locale`s using the rules described below.  In the
 description below, L, S, C and V
 respectively represent non-empty language, script, country, and
 variant.  For example, [L, C] represents a
 `Locale` that has non-empty values only for language and
 country.  The form L("xx") represents the (non-empty)
 language value is "xx".  For all cases, `Locale`s whose
 final component values are empty strings are omitted.

 
- For an input `Locale` with an empty script value,
 append candidate `Locale`s by omitting the final component
 one by one as below:

 
 
-  [L, C, V] 
 
-  [L, C] 
 
-  [L] 
 
-  `Locale.ROOT` 
 

 
- For an input `Locale` with a non-empty script value,
 append candidate `Locale`s by omitting the final component
 up to language, then append candidates generated from the
 `Locale` with country and variant restored:

 
 
-  [L, S, C, V]
 
-  [L, S, C]
 
-  [L, S]
 
-  [L, C, V]
 
-  [L, C]
 
-  [L]
 
-  `Locale.ROOT`
 

 
- For an input `Locale` with a variant value consisting
 of multiple subtags separated by underscore, generate candidate
 `Locale`s by omitting the variant subtags one by one, then
 insert them after every occurrence of `Locale`s with the
 full variant value in the original list.  For example, if
 the variant consists of two subtags V1 and V2:

 
 
-  [L, S, C, V1, V2]
 
-  [L, S, C, V1]
 
-  [L, S, C]
 
-  [L, S]
 
-  [L, C, V1, V2]
 
-  [L, C, V1]
 
-  [L, C]
 
-  [L]
 
-  `Locale.ROOT`
 

 
- Special cases for Chinese.  When an input `Locale` has the
 language "zh" (Chinese) and an empty script value, either "Hans" (Simplified) or
 "Hant" (Traditional) might be supplied, depending on the country.
 When the country is "CN" (China) or "SG" (Singapore), "Hans" is supplied.
 When the country is "HK" (Hong Kong SAR China), "MO" (Macau SAR China),
 or "TW" (Taiwan), "Hant" is supplied.  For all other countries or when the country
 is empty, no script is supplied.  For example, for Locale("zh", "CN")
 , the candidate list will be:
 
 
-  [L("zh"), S("Hans"), C("CN")]
 
-  [L("zh"), S("Hans")]
 
-  [L("zh"), C("CN")]
 
-  [L("zh")]
 
-  `Locale.ROOT`
 

 For `Locale("zh", "TW")`, the candidate list will be:
 
 
-  [L("zh"), S("Hant"), C("TW")]
 
-  [L("zh"), S("Hant")]
 
-  [L("zh"), C("TW")]
 
-  [L("zh")]
 
-  `Locale.ROOT`
 

 
- Special cases for Norwegian.  Both `Locale("no", "NO",
 "NY")` and `Locale("nn", "NO")` represent Norwegian
 Nynorsk.  When a locale's language is "nn", the standard candidate
 list is generated up to [L("nn")], and then the following
 candidates are added:

 
-  [L("no"), C("NO"), V("NY")]
 
-  [L("no"), C("NO")]
 
-  [L("no")]
 
-  `Locale.ROOT`
 

 If the locale is exactly `Locale("no", "NO", "NY")`, it is first
 converted to `Locale("nn", "NO")` and then the above procedure is
 followed.

 

Also, Java treats the language "no" as a synonym of Norwegian
 Bokm&#xE5;l "nb".  Except for the single case `Locale("no",
 "NO", "NY")` (handled above), when an input `Locale`
 has language "no" or "nb", candidate `Locale`s with
 language code "no" and "nb" are interleaved, first using the
 requested language, then using its synonym. For example,
 `Locale("nb", "NO", "POSIX")` generates the following
 candidate list:

 
 
-  [L("nb"), C("NO"), V("POSIX")]
 
-  [L("no"), C("NO"), V("POSIX")]
 
-  [L("nb"), C("NO")]
 
-  [L("no"), C("NO")]
 
-  [L("nb")]
 
-  [L("no")]
 
-  `Locale.ROOT`
 

 `Locale("no", "NO", "POSIX")` would generate the same list
 except that locales with "no" would appear before the corresponding
 locales with "nb".
 

 

The default implementation uses an `ArrayList` that
 overriding implementations may modify before returning it to the
 caller. However, a subclass must not modify it after it has
 been returned by `getCandidateLocales`.

 

For example, if the given `baseName` is "Messages"
 and the given `locale` is
 Locale("ja",&nbsp;"",&nbsp;"XX"), then a
 `List` of `Locale`s:
 
```

     Locale("ja", "", "XX")
     Locale("ja")
     Locale.ROOT
 
```

 is returned. And if the resource bundles for the "ja" and
 "" `Locale`s are found, then the runtime resource
 lookup path (parent chain) is:
 
```
`Messages_ja -> Messages
 `
```

**参数**

- **baseName** — the base name of the resource bundle, a fully qualified class name
- **locale** — the locale for which a resource bundle is desired

**返回**

- a `List` of candidate `Locale`s for the given `locale`

**异常**

- **NullPointerException** — if `baseName` or `locale` is `null`
