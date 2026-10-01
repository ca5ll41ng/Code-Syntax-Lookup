---
id: "java-en-function-java-util-locale"
language: "java"
lang: "en"
category: "function"
name: "java.util.Locale"
title: "Locale"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale

A `Locale` represents a specific geographical, political,
 or cultural region. An API that requires a `Locale` to perform
 its task is {@index "locale-sensitive"} and uses the `Locale`
 to tailor information for the user. These locale-sensitive APIs
 are principally in the java.text and java.util packages.
 For example, displaying a number is a locale-sensitive operation&mdash;
 the number should be formatted according to the customs and conventions of the
 user's native country, region, or culture.

 

The `Locale` class implements
 IETF BCP 47 which contains
 RFC 4647 "Matching of Language
 Tags" and RFC 5646 "Tags
 for Identifying Languages" with support for the LDML (UTS#35, "Unicode
 Locale Data Markup Language") BCP 47-compatible extensions for locale data
 exchange. Each `Locale` is associated with locale data which is provided
 by the Java runtime environment or any deployed `java.util.spi.LocaleServiceProvider LocaleServiceProvider` implementations.
 The locale data provided by the Java runtime environment may vary by release.

 Locale Composition
 

 A `Locale` is composed of the bolded fields described below; note that a
 `Locale` need not have all such fields. For example, `ENGLISH Locale.ENGLISH` is only comprised of the language field.
 In contrast, a `Locale` such as the one returned by `Locale.forLanguageTag("en-Latn-US-POSIX-u-nu-latn")` would be comprised of all
 the fields below. This particular `Locale` would represent English in
 the United States using the Latin script and numerics for use in POSIX
 environments.
 

 `Locale` implements IETF BCP 47 and any deviations should be observed
 by the comments prefixed by "BCP 47 deviation:".
 RFC 5646
 combines subtags from various ISO (639, 3166, 15924) standards which are also
 included in the composition of `Locale`.
 Additionally, the full list of valid codes for each field can be found in the
 
 IANA Language Subtag Registry (e.g. search for "Type: region").

 
   **language**
    ISO 639 alpha-2/alpha-3 language code or a registered
   language subtag up to 8 alpha letters (for future enhancements).
   When a language has both an alpha-2 code and an alpha-3 code, the
   alpha-2 code must be used.

    Case convention: `language` is case insensitive, but
   `Locale` always canonicalizes to lower case.

    Syntax: Well-formed `language` values have the form `[a-zA-Z]{2,8`}.
     BCP 47 deviation: `Locale` does not retain the
   extlang
   subtag. This is because three-letter language codes are preferred over extlang
   subtags. When a `Locale` is created from a language tag containing an
   extlang subtag, the first extlang subtag is interpreted as the language
   field. The primary language subtag and any subsequent extlang subtags
   are ignored.

    Example: "en" (English), "ja" (Japanese), "kok" (Konkani)

   **script**

    ISO 15924 alpha-4 script code.

    Case convention: `script` is case insensitive, but
   `Locale` always canonicalizes to title case (the first
   letter is upper case and the rest of the letters are lower
   case).

    Syntax: Well-formed `script` values have the form `[a-zA-Z]{4`}

    Example: "Latn" (Latin), "Cyrl" (Cyrillic)

   **country (region)**

    ISO 3166 alpha-2 country code or UN M.49 numeric-3 area code.

    Case convention: `country (region)` is case insensitive, but
   `Locale` always canonicalizes to upper case.

    Syntax: Well-formed `country (region)` values have the form `[a-zA-Z]{2` | [0-9]{3}}

    Example: "US" (United States), "FR" (France), "029"
   (Caribbean)

   **variant**

    Any arbitrary value used to indicate a variation of a
   `Locale`. When multiple variants exist, they should be separated by
   `('_'|'-')`. Variants of higher importance should precede the others.
    BCP 47 deviation: BCP 47 subtags are strictly used to indicate
   additional variations that define a language or its dialects that
   are not covered by any combinations of language, script and
   region subtags. However, the variant field in `Locale` has
   historically been used for any kind of variation, not just
   language variations.  For example, some supported variants
   available in Java SE Runtime Environments indicate alternative
   cultural behaviors such as calendar type or number script.  In
   BCP 47, this kind of information which does not identify the
   language, is supported by extension subtags or private use
   subtags.

    Case convention: `variant` is case sensitive. BCP 47
   deviation: BCP 47 treats the variant field as case insensitive.

    Syntax: Well-formed `variant` values have the form `SUBTAG (('_'|'-') SUBTAG)*` where `SUBTAG =
   [0-9][0-9a-zA-Z]{3` | [0-9a-zA-Z]{5,8}}.
    BCP 47 deviation: BCP 47 only
   uses hyphen ('-') as a delimiter and APIs provided by `Locale` which accept
   BCP 47 language tags expect as such. However, for backwards compatibility,
   `setVariant` also accepts underscore ('_').
   `of` accepts only underscore ('_').

    Example: "polyton" (Polytonic Greek), "POSIX"

   **extensions**

    A map from single character keys to string values, indicating
   extensions apart from language identification.
     BCP 47 deviation: The `extensions` in `Locale` implement the semantics and syntax of BCP 47
   extension subtags and private use subtags. The `extensions`
   field cannot have empty values. 

    Case convention: `extensions` are
   case insensitive, but `Locale` canonicalizes all
   extension keys and values to lower case.

    Syntax: Well-formed keys are single characters from the set
   `[0-9a-zA-Z]`.  Well-formed values have the form
   `SUBTAG ('-' SUBTAG)*` where for the key 'x'
   `SUBTAG = [0-9a-zA-Z]{1,8`} and for other keys
   `SUBTAG = [0-9a-zA-Z]{2,8`} (that is, 'x' allows
   single-character subtags).

    Example: key="u"/value="ca-japanese" (Japanese Calendar),
   key="x"/value="java-1-7"
 

 **BCP 47 deviation:** BCP47 defines the following two levels of
 conformance,
 "valid" and "well-formed". A valid tag requires that it is well-formed, its
 subtag values are registered in the IANA Language Subtag Registry, and it does not
 contain duplicate variant or extension singleton subtags. The `Locale`
 class does not enforce that subtags are registered in the Subtag Registry.
 `Builder` only checks if an individual field satisfies the syntactic
 requirement (is well-formed). When passed duplicate variants, `Builder`
 accepts and includes them. When passed duplicate extension singletons, `Builder` accepts but ignores the duplicate key and its associated value.
 Conversely, `of(String, String, String) Locale::of` and its
 overloads do not check if the input is well-formed at all.

 Unicode BCP 47 U Extension

 

UTS#35, "Unicode Locale Data Markup Language" defines the
 Unicode BCP 47 U Extension,
 an extension based on RFC 6067,
 which describes optional attributes and keywords to override or refine the default behavior
 associated with a locale.  A keyword is represented by a pair of
 key and type.  For example, "nu-thai" indicates that Thai local
 digits (value:"thai") should be used for formatting numbers
 (key:"nu").

 

The keywords are mapped to a BCP 47 extension value using the
 extension key 'u' (`UNICODE_LOCALE_EXTENSION`).  The above
 example, "nu-thai", becomes the extension "u-nu-thai".

 

Thus, when a `Locale` object contains Unicode locale
 attributes and keywords,
 `getExtension(UNICODE_LOCALE_EXTENSION)` will return a
 String representing this information, for example, "nu-thai".  The
 `Locale` class also provides `getUnicodeLocaleAttributes`, `getUnicodeLocaleKeys`, and
 `getUnicodeLocaleType` which provides access to the Unicode
 locale attributes and key/type pairs directly.  When represented as
 a string, the Unicode Locale Extension lists attributes
 alphabetically, followed by key/type sequences with keys listed
 alphabetically (the order of subtags comprising a key's type is
 fixed when the type is defined)

 

A well-formed locale key has the form
 `[0-9a-zA-Z]{2`}.  A well-formed locale type has the
 form `"" | [0-9a-zA-Z]{3,8` ('-' [0-9a-zA-Z]{3,8})*} (it
 can be empty, or a series of subtags 3-8 alphanums in length).  A
 well-formed locale attribute has the form
 `[0-9a-zA-Z]{3,8`} (it is a single subtag with the same
 form as a locale type subtag). Duplicate locale attributes as well
 as locale keys do not convey meaning. For methods in `Locale` and
 `Locale.Builder` that accept extensions, occurrences of duplicate
 locale attributes as well as locale keys and their associated type are accepted
 but ignored.

 

The Unicode locale extension specifies optional behavior in
 locale-sensitive services.  Although the LDML specification defines
 various keys and values, actual locale-sensitive service
 implementations in a Java Runtime Environment might not support any
 particular Unicode locale attributes or key/type pairs.

 Default Locale

 

The default Locale is provided for any locale-sensitive methods if no
 `Locale` is explicitly specified as an argument, such as
 `getInstance`. The default Locale is determined at startup
 of the Java runtime and established in the following three phases:
 
 
- The locale-related system properties listed below are established from the
 host environment. Some system properties (except for `user.language`) may
 not have values from the host environment.
 
 Shows property keys and associated values
 
 Locale-related System Properties Key
     Description
 
 
 {@systemProperty user.language}
     `#def_language language` for the default Locale,
     such as "en" (English)
 {@systemProperty user.script}
     `#def_script script` for the default Locale,
     such as "Latn" (Latin)
 {@systemProperty user.country}
     `#def_region country` for the default Locale,
     such as "US" (United States)
 {@systemProperty user.variant}
     `#def_variant variant` for the default Locale,
     such as "POSIX"
 {@systemProperty user.extensions}
     `#def_extensions extensions` for the default Locale,
     such as "u-ca-japanese" (Japanese Calendar)
 
 
 
 
- The values of these system properties can be overridden by values designated
 at startup time. If the overriding value of the `user.extensions` property
 is unparsable, it is ignored. The overriding values of other properties are not
 checked for syntax or validity and are used directly in the default Locale.
 (Typically, system property values can be provided using the `-D` command-line
 option of a launcher. For example, specifying `-Duser.extensions=foobarbaz`
 results in a default Locale with no extensions, while specifying
 `-Duser.language=foobarbaz` results in a default Locale whose language is
 "foobarbaz".)
 
 
- The default `Locale` instance is constructed from the values of these
 system properties.
 
 

 

Altering the system property values with `setProperties`/
 `setProperty` has no effect on the default Locale.
 

Once the default Locale is established, applications can query the default
 Locale with `getDefault` and change it with `setDefault`.
 If the default Locale is changed with `setDefault`, the corresponding
 system properties are not altered. It is not recommended that applications read
 these system properties and parse or interpret them as their values may be out of date.

 Locale Category
 

There are finer-grained default Locales specific for each `Locale.Category`.
 These category specific default Locales can be queried by `getDefault`,
 and set by `setDefault`. Construction of these category
 specific default Locales are determined by the corresponding system properties,
 which consist of the base system properties as listed above, suffixed by either
 `".display"` or `".format"` depending on the category. For example,
 the value of the `user.language.display` system property will be used in the
 `language` part of the default Locale for the `DISPLAY`
 category. In the absence of category specific system properties, the "category-less"
 system properties are used, such as `user.language` in the previous example.

 Obtaining a Locale

 

There are several ways to obtain a `Locale` object.
 It is advised against using the deprecated `Locale` constructors.

 
  **Locale Constants**
  A number of convenient constants are provided that return `Locale`
  objects for commonly used locales. For example, `US Locale.US` is the
  `Locale` object for the United States.
  **Factory Methods**
  `of(String, String, String) Locale::of` and its overloads obtain a
  `Locale` object from the given `language`, `country`,
  and/or `variant`. `forLanguageTag` obtains a `Locale`
  object for a well-formed BCP 47 language tag.
  **Builder**
  `Builder` is used to construct a `Locale` object that conforms
  to BCP 47 syntax. Use a builder to enforce syntactic restrictions on the input.
 
 

The following invocations produce Locale objects that are all equivalent:
 {@snippet lang=java :
     Locale.US;
     Locale.of("en", "US");
     Locale.forLanguageTag("en-US");
     new Locale.Builder().setLanguage("en").setRegion("US").build();
 }

 Usage Examples

 

Once a `Locale` is `#ObtainingLocale obtained`,
 it can be queried for information about itself. For example, use `getCountry` to get the country (or region) code and `getLanguage` to
 get the language. `getDisplayCountry` can be used to get the
 name of the country suitable for displaying to the user. Similarly,
 use `getDisplayLanguage` to get the name of
 the language suitable for displaying to the user. The `getDisplayXXX`
 methods are themselves locale-sensitive and have two variants; one with an explicit
 locale parameter, and one without. The latter uses the default `DISPLAY DISPLAY` locale, so the following are equivalent :
 {@snippet lang=java :
     Locale.getDefault().getDisplayCountry();
     Locale.getDefault().getDisplayCountry(Locale.getDefault(Locale.Category.DISPLAY));
 }

 

The Java Platform provides a number of classes that perform locale-sensitive
 operations. For example, the `NumberFormat` class formats
 numbers, currency, and percentages in a locale-sensitive manner. Classes such
 as `NumberFormat` have several factory methods for creating a default object
 of that type. These methods generally have two variants; one with an explicit
 locale parameter, and one without. The latter uses the default `FORMAT FORMAT` locale, so the following are equivalent :
 {@snippet lang=java :
     NumberFormat.getCurrencyInstance();
     NumberFormat.getCurrencyInstance(Locale.getDefault(Locale.Category.FORMAT));
 }

 

 The following example demonstrates locale-sensitive currency and
 date related operations under different locales :
 {@snippet lang = java:
     var number = 1000;
     NumberFormat.getCurrencyInstance(Locale.US).format(number); // returns "$1,000.00"
     NumberFormat.getCurrencyInstance(Locale.JAPAN).format(number); // returns "¥1,000""
     var date = LocalDate.of(2024, 1, 1);
     DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG).localizedBy(Locale.US).format(date); // returns "January 1, 2024"
     DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG).localizedBy(Locale.JAPAN).format(date); // returns "2024年1月1日"
 }

 Locale Matching

 

If an application is internationalized and provides localized
 resources for multiple locales, it sometimes needs to find one or more
 locales (or language tags) which meet each user's specific preferences. Note
 that the term "{@index "language tag"}" is used interchangeably
 with "locale" in the following locale matching documentation.

 

In order to match a user's preferred locales to a set of language
 tags, RFC 4647 Matching of
 Language Tags defines two mechanisms: filtering and lookup.
 Filtering is used to get all matching locales, whereas
 lookup is to select the best matching locale.
 Matching is done case-insensitively. These matching mechanisms are described
 in the following sections.

 

A user's preference is called a Language Priority List and is
 expressed as a list of language ranges. There are syntactically two types of
 language ranges: basic and extended. See
 `Locale.LanguageRange Locale.LanguageRange` for details.

 Filtering

 

The filtering operation returns all matching language tags. It is defined
 in RFC 4647 as follows:
 "In filtering, each language range represents the least specific language
 tag (that is, the language tag with the fewest number of subtags) that is an
 acceptable match. All the language tags in the matching set of tags will
 have an equal or greater number of subtags than the language range. Every
 non-wildcard subtag in the language range will appear in every one of the
 matching language tags."

 

There are two types of filtering: filtering for basic language ranges
 (called "basic filtering") and filtering for extended language ranges
 (called "extended filtering"). They may return different results by what
 kind of language ranges are included in the given Language Priority List.
 `Locale.FilteringMode` is a parameter to specify how filtering should
 be done.

 Lookup

 

The lookup operation returns the best matching language tags. It is
 defined in RFC 4647 as follows:
 "By contrast with filtering, each language range represents the most
 specific tag that is an acceptable match.  The first matching tag found,
 according to the user's priority, is considered the closest match and is the
 item returned."

 

For example, if a Language Priority List consists of two language ranges,
 `"zh-Hant-TW"` and `"en-US"`, in prioritized order, lookup
 method progressively searches the language tags below in order to find the
 best matching language tag.
 
```

    1. zh-Hant-TW
    2. zh-Hant
    3. zh
    4. en-US
    5. en
 
```

 
 If there is a language tag which matches completely to a language range
 above, the language tag is returned.

 

`"*"` is the special language range, and it is ignored in lookup.

 

If multiple language tags match as a result of the subtag `'*'`
 included in a language range, the first matching language tag returned by
 an `Iterator` over a `Collection` of language tags is treated as
 the best matching one.

 Serialization

 

During serialization, writeObject writes all fields to the output
 stream, including extensions.

 

During deserialization, readResolve adds extensions as described
 in `#special_cases_constructor Special Cases`, only
 for the two cases th_TH_TH and ja_JP_JP.

 Compatibility
 

 The following commentary is provided for apps that want to ensure
 interoperability with older releases of `Locale` provided by the
 reference implementation.
 Locale Behavior
 In order to maintain compatibility, Locale's (deprecated) constructors,
 `of`, and its overloads retain their behavior prior to the Java Runtime
 Environment version 1.7. That is, a length constraint is not imposed on any of
 the input parameters. Similarly, the same preservation of past behavior is largely true
 for the `toString` method.
 Apps that previously parsed the output of `toString` into language,
 country, and variant fields can continue to do so (although this is strongly
 discouraged). A caveat is that the variant field will have additional
 information in it if script or extensions are present.

 

In addition, BCP 47 imposes syntax restrictions that are not
 imposed by Locale's constructors. This means that conversions
 between some Locales and BCP 47 language tags cannot be made without
 losing information. Thus `toLanguageTag` cannot
 represent the state of locales whose language, country, or variant
 do not conform to BCP 47.

 

Because of these issues, it is recommended that apps migrate
 away from constructing non-conforming locales and use the
 `forLanguageTag` and `Locale.Builder` APIs instead.
 Apps desiring a string representation of the complete locale can
 then always rely on `toLanguageTag` for this purpose.

 Special cases

 

For compatibility reasons, two
 non-conforming locales are treated as special cases.  These are
 **`ja_JP_JP`** and **`th_TH_TH`**. These are ill-formed
 in BCP 47 since the `#def_variant variants` are too short. To ease
 migration to BCP 47, these are treated specially during creation. Creation
 of these two cases generates a compatibility extension.

 

Java has used `ja_JP_JP` to represent Japanese as used in
 Japan together with the Japanese Imperial calendar. This is now
 representable using a Unicode locale extension, by specifying the
 Unicode locale key `ca` (for "calendar") and type
 `japanese`. When a `Locale` is created with language "ja", an
 empty script, country "JP", variant "JP", and no extensions, the extension
 "u-ca-japanese" is automatically added.

 

Java has used `th_TH_TH` to represent Thai as used in
 Thailand together with Thai digits. This is also now representable using
 a Unicode locale extension, by specifying the Unicode locale key
 `nu` (for "number") and value `thai`. When a `Locale` is
 created with language "th", an empty script, country "TH", variant "TH", and
 no extensions, the extension "u-nu-thai" is automatically added.

 Legacy language codes

 

For compatibility, a `Locale` created with one of the
 three obsolete language codes, `iw`, `ji`, or `in`,
 will map the language to its modern equivalent, `he`, `yi`,
 or `id`, respectively.
 

The default resource bundle lookup mechanism also implements
 this mapping, so that resources can be named using either convention,
 see `ResourceBundle.Control`.

      IETF BCP 47
      RFC 4647: Matching of Language Tags
      RFC 5646: Tags for Identifying Languages
      RFC 6067: BCP 47 Extension U
      Unicode Locale Data Markup Language (LDML)

**参见**

- Builder
- ResourceBundle
- java.text.Format
- java.text.NumberFormat
- java.text.Collator

> *Since 1.1*
