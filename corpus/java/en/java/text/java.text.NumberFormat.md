---
id: "java-en-function-java-text-numberformat"
language: "java"
lang: "en"
category: "function"
name: "java.text.NumberFormat"
title: "NumberFormat"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat

`NumberFormat` is the abstract base class for all number
 formats. This class provides the interface for formatting and parsing
 numbers in a localized manner. This enables code that can be completely
 independent of the locale conventions for decimal points, thousands-separators,
 the particular decimal digits used, or whether the number format is even
 decimal. For example, this class could be used within an application to
 produce a number in a currency format according to the conventions of the desired
 locale.

 Getting a NumberFormat
 To get a `NumberFormat` for the default Locale, use one of the static
 factory methods that return a concrete subclass of `NumberFormat`.
 The following formats all provide an example of formatting the `Number`
 "2000.50" with the `US US` locale as the default locale.
 
 
-  Use `getInstance` or `getNumberInstance` to get
 a decimal format. For example, `"2,000.5"`.
 
-  Use `getIntegerInstance` to get an integer number format.
 For example, `"2,000"`.
 
-  Use `getCurrencyInstance` to get a currency number format.
 For example, `"$2,000.50"`.
 
-  Use `getCompactNumberInstance` to get a compact number format.
 For example, `"2K"`.
 
-  Use `getPercentInstance` to get a format for displaying percentages.
 For example, `"200,050%"`.
 

 Alternatively, if a `NumberFormat` for a different locale is required, use
 one of the overloaded factory methods that take `Locale` as a parameter,
 for example, `getIntegerInstance`. If the installed locale-sensitive
 service implementation does not support the given `Locale`, the parent
 locale chain will be looked up, and a `Locale` used that is supported.

 Locale Extensions
 Formatting behavior can be changed when using a locale that contains any of the following
 `#def_locale_extension Unicode extensions`,
 
 
-  "nu"
 (
 Numbering System) - Overrides the decimal digits used
 
-  "rg"
 (
 Region Override) - Overrides the country used
 
-  "cf"
 (
 Currency Format style) - Overrides the Currency Format style used
 
-  "cu"
 (
 Currency Type) - Overrides the Currency used
 

 

 For both "nu" and "cu", if they are specified in addition to "rg", the respective
 values from the "nu" and "cu" extension supersede the implicit ones from the "rg" extension.
 Although `#def_locale_extension Unicode extensions`
 defines various keys and values, actual locale-sensitive service implementations
 in a Java Runtime Environment might not support any particular Unicode locale
 attributes or key/type pairs.
 

Below is an example of a "US" locale currency format with accounting style,
 `NumberFormat.getCurrencyInstance(Locale.forLanguageTag("en-US-u-cf-account"));`
 With this style, a negative value is formatted enclosed in parentheses, instead
 of being prepended with a minus sign.

 Using NumberFormat
 The following is an example of formatting and parsing in a localized fashion,
 {@snippet lang=java :
 NumberFormat currencyFormat = NumberFormat.getCurrencyInstance(Locale.US);
 currencyFormat.format(100000); // returns "$100,000.00"
 currencyFormat.parse("$100,000.00"); // returns 100000
 }

 Customizing NumberFormat
 `NumberFormat` provides API to customize formatting and parsing behavior,
 
 
-  `setParseIntegerOnly`; when `true`, will only return the
 integer portion of the number parsed from the String.
 
-  `setMinimumFractionDigits`; Use to adjust the expected digits
 when formatting. Use any of the other minimum/maximum or fraction/integer
 setter methods in the same manner. These methods have no impact on parsing behavior.
 
-  `setGroupingUsed`; when `true`, formatted numbers will be displayed
 with grouping separators. Additionally, when `false`, parsing will not expect
 grouping separators in the parsed String.
 
-  `setStrict`; when `true`, parsing will be done strictly.
 The behavior of strict parsing should be referred to in the implementing
 `NumberFormat` subclass.
 

 

 To provide more control over formatting or parsing behavior, type checking can
 be done to safely convert to an implementing subclass of `NumberFormat`; this
 provides additional methods defined by the subclass.
 For example,
 {@snippet lang=java :
 NumberFormat nFmt = NumberFormat.getInstance(Locale.US);
 if (nFmt instanceof DecimalFormat dFmt) {
     dFmt.setDecimalSeparatorAlwaysShown(true);
     dFmt.format(100); // returns "100."
 }
 }
 The `NumberFormat` subclass returned by the factory methods is dependent
 on the locale-service provider implementation installed, and may not always
 be `DecimalFormat` or `CompactNumberFormat`.

 

 You can also use forms of the `parse` and `format`
 methods with `ParsePosition` and `FieldPosition` to
 allow you to:
 
 
-  Progressively parse through pieces of a string
 
-  Align the decimal point and other areas
 

 For example, you can align numbers in two ways:
 
 
-  If you are using a monospaced font with spacing for alignment,
      you can pass the `FieldPosition` in your format call, with
      `field` = `INTEGER_FIELD`. On output,
      `getEndIndex` will be set to the offset between the
      last character of the integer and the decimal. Add
      (desiredSpaceCount - getEndIndex) spaces at the front of the string.

 
-  If you are using proportional fonts,
      instead of padding with spaces, measure the width
      of the string in pixels from the start to `getEndIndex`.
      Then move the pen by
      (desiredPixelWidth - widthToAlignmentPoint) before drawing the text.
      It also works where there is no decimal, but possibly additional
      characters at the end, e.g., with parentheses in negative
      numbers: "(12)" for -12.
 

 Leniency
 `NumberFormat` by default, parses leniently. Subclasses may consider
 implementing strict parsing and as such, overriding and providing
 implementations for the optional `isStrict` and `setStrict` methods.
 

 Lenient parsing should be used when attempting to parse a number
 out of a String that contains non-numerical or non-format related values.
 For example, using a `US` currency format to parse the number
 `1000` out of the String "$1,000.00 was paid". Lenient parsing also
 allows loose matching of characters in the source text. For example, an
 implementation of the `NumberFormat` class may allow matching "−"
 (U+2212 MINUS SIGN) to the "-" (U+002D HYPHEN-MINUS) pattern character
 when used as a negative prefix.
 

 Strict parsing should be used when attempting to ensure a String adheres exactly
 to a locale's conventions, and can thus serve to validate input. For example, successfully
 parsing the number `1000.55` out of the String "1.000,55" confirms the String
 exactly adhered to the `GERMANY` numerical conventions.

 Synchronization
 Number formats are generally not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.

 Null Parameter Handling
 
 
-  The `format`,
 `format` and
 `parse` methods may throw
 `NullPointerException`, if any of their parameter is `null`.
 The subclass may provide its own implementation and specification about
 `NullPointerException`.
 

 Default RoundingMode
 
 
-  The default implementation provides rounding modes defined
 in `java.math.RoundingMode` for formatting numbers. It
 uses the `HALF_EVEN
 round half-even algorithm`. To change the rounding mode use
 `setRoundingMode(java.math.RoundingMode) setRoundingMode`.
 The `NumberFormat` returned by the static factory methods is
 configured to round floating point numbers using half-even
 rounding (see `HALF_EVEN
 RoundingMode.HALF_EVEN`) for formatting.
 

               Unicode Locale Data Markup Language (LDML)

**参见**

- DecimalFormat
- ChoiceFormat
- CompactNumberFormat
- Locale

> *Since 1.1*
