---
id: "java-en-function-java-text-compactnumberformat"
language: "java"
lang: "en"
category: "function"
name: "java.text.CompactNumberFormat"
title: "CompactNumberFormat"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat

`CompactNumberFormat` is a concrete subclass of `NumberFormat`
 that formats a decimal number in a localized compact form.
 Compact number formatting is designed for an environment with limited space.
 For example, displaying the formatted number `7M` instead of `7,000,000.00` in the `US US locale`. The `CompactNumberFormat` class is defined by LDML's specification for
 
 Compact Number Formats.

 Getting a CompactNumberFormat
 To get a compact number format, use one of the ways listed below.
 
 
-  Use the factory method `getCompactNumberInstance`
 to obtain a format for the default locale with
 `SHORT SHORT` style.
 
-  Use the factory methood `getCompactNumberInstance`
 to obtain a format for a different locale
 and to control the `#compact_number_style Style`.
 
-  Use one of the `CompactNumberFormat` constructors, for example, `CompactNumberFormat(String, DecimalFormatSymbols, String[])
 CompactNumberFormat`, to obtain a
 `CompactNumberFormat` with further customization.
 

 

If a standard compact format for a given locale and `#compact_number_style style` is desired, it is recommended to use one of the
 NumberFormat factory methods listed above. To use an instance method
 defined by `CompactNumberFormat`, the `NumberFormat` returned by
 these factory methods should be type checked before converted to `CompactNumberFormat`.
 If the installed locale-sensitive service implementation does not support
 the given `Locale`, the parent locale chain will be looked up, and
 a `Locale` used that is supported.

 Style
 When using `getCompactNumberInstance`, a
 compact form can be retrieved with either a `SHORT
 SHORT` or `LONG LONG` style.
 For example, a `SHORT SHORT` style compact number instance in
 the `US US locale` formats `10000` as `"10K"`. However, a `LONG LONG` style instance in
 the same locale formats `10000` as `"10 thousand"`.

 Using CompactNumberFormat
 The following is an example of formatting and parsing in a localized manner,

 {@snippet lang=java :
 NumberFormat compactFormat = NumberFormat.getCompactNumberInstance(Locale.US, NumberFormat.Style.SHORT);
 compactFormat.format(1000); // returns "1K"
 compactFormat.parse("1K"); // returns 1000
 }

 Formatting
 The default formatting behavior returns a formatted string with no fractional
 digits, however users can use the `setMinimumFractionDigits`
 method to include the fractional part.
 The number `1000.0` or `1000` is formatted as `"1K"`
 not `"1.00K"` (in the `US US locale`). For this
 reason, the patterns provided for formatting contain only the minimum
 integer digits, prefix and/or suffix, but no fractional part.
 For example, patterns used are `{"", "", "", 0K, 00K, ...`}. If the pattern
 selected for formatting a number is `"0"` (special pattern),
 either explicit or defaulted, then the general number formatting provided by
 `java.text.DecimalFormat DecimalFormat`
 for the specified locale is used.

 Rounding
 `CompactNumberFormat` provides rounding modes defined in
 `java.math.RoundingMode` for formatting.  By default, it uses
 `HALF_EVEN RoundingMode.HALF_EVEN`.

 Parsing
 The default parsing behavior does not allow a grouping separator until
 grouping used is set to `true` by using
 `setGroupingUsed`. The parsing of the fractional part
 depends on the `isParseIntegerOnly`. For example, if the
 parse integer only is set to true, then the fractional part is skipped.

 Compact Number Patterns
 

 The `compactPatterns` in `CompactNumberFormat(String, DecimalFormatSymbols, String[])
 CompactNumberFormat` are represented
 as a series of strings, where each string is a `#compact_number_syntax
 pattern` that is used to format a range of numbers.

 

 An example of the `SHORT SHORT` styled compact number patterns
 for the `US US locale` is `{"", "", "", "0K",
 "00K", "000K", "0M", "00M", "000M", "0B", "00B", "000B", "0T", "00T", "000T"`},
 ranging from `10``0` to `10``14`.
 There can be any number of patterns and they are
 strictly index based starting from the range `10``0`.
 For example, in the above patterns, the pattern at index 3
 (`"0K"`) is used for formatting a number in the range: `1000 <= number < 10000`,
 index 4 (`"00K"`) for formatting a number the range: `10000 <=
 number < 100000`, and so forth.
 

In most locales, patterns with the range
 `10``0`-`10``2` are empty
 strings, which implicitly means a special pattern `"0"`.
 A special pattern `"0"` is used for any range which does not contain
 a compact pattern. This special pattern can appear explicitly for any specific
 range, or considered as a default pattern for an empty string.

 Negative Subpatterns
 A compact pattern contains a positive and negative subpattern
 separated by a subpattern boundary character `';'`,
 for example, `"0K;-0K"`. Each subpattern has a prefix,
 minimum integer digits, and suffix. The negative subpattern
 is optional, if absent, then the positive subpattern prefixed with the
 minus sign `'-' (U+002D HYPHEN-MINUS)` is used as the negative
 subpattern. That is, `"0K"` alone is equivalent to `"0K;-0K"`.
 If there is an explicit negative subpattern, it serves only to specify
 the negative prefix and suffix. The number of minimum integer digits,
 and other characteristics are all the same as the positive pattern.
 That means that `"0K;-00K"` produces precisely the same behavior
 as `"0K;-0K"`. In `#leniency lenient parsing`
 mode, loose matching of the minus sign pattern is enabled, following the
 LDML’s 
 loose matching specification.

 Escaping Special Characters
 Many characters in a compact pattern are taken literally, they are matched
 during parsing and output unchanged during formatting.
 `#special_pattern_character Special characters`,
 on the other hand, stand for other characters, strings, or classes of
 characters. These characters must be quoted using single quotes `' (U+0027)`
 unless noted otherwise, if they are to appear in the prefix or suffix
 as literals. For example, 0\u0915'.'.

 Plurals
 

 `CompactNumberFormat` support patterns for both singular and plural
 compact forms. For the plural form, the `Pattern` should consist
 of `PluralPattern`(s) separated by a space ' ' (U+0020) that are enumerated
 within a pair of curly brackets '{' (U+007B) and '}' (U+007D).
 In this format, each `PluralPattern` consists of its `count`,
 followed by a single colon `':' (U+003A)` and a `SimplePattern`.
 As a space is reserved for separating subsequent `PluralPattern`s, it must
 be quoted to be used literally in either the `prefix` or `suffix`.
 

 For example, while the pattern representing millions (`10``6`
 ) in the US locale can be specified as the SimplePattern: `"0 Million"`, for the
 German locale it can be specified as the PluralPattern:
 `"{one:0' 'Million other:0' 'Millionen`"}.

 

 A compact pattern has the following syntax, with `count`
 following LDML's
 
 Language Plural Rules:
 
```

 Pattern:
         SimplePattern
         '{' PluralPattern [' ' PluralPattern]optional '}'
 SimplePattern:
         PositivePattern
         PositivePattern [; NegativePattern]optional
 PluralPattern:
         Count:SimplePattern
 Count:
         "zero" / "one" / "two" / "few" / "many" / "other"
 PositivePattern:
         Prefixoptional MinimumInteger Suffixoptional
 NegativePattern:
        Prefixoptional MinimumInteger Suffixoptional
 Prefix:
      Any characters except the `#special_pattern_character special pattern characters`
 Suffix:
      Any characters except the `#special_pattern_character special pattern characters`
 MinimumInteger:
      0
      0 MinimumInteger
 
```

      Unicode Locale Data Markup Language (LDML)

**参见**

- NumberFormat.Style
- NumberFormat
- DecimalFormat
- Locale

> *Since 12*
