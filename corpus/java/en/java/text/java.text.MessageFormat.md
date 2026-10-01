---
id: "java-en-function-java-text-messageformat"
language: "java"
lang: "en"
category: "function"
name: "java.text.MessageFormat"
title: "MessageFormat"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat

`MessageFormat` provides a means to produce concatenated
 messages in a language-neutral way. Use this class to construct messages
 displayed for end users.

 

 `MessageFormat` takes a set of objects, formats them, then
 inserts the formatted strings into the pattern at the appropriate places.

 

 **Note:**
 `MessageFormat` differs from the other `Format`
 classes in that you create a `MessageFormat` object with one
 of its constructors (not with a `getInstance` style factory
 method). The factory methods aren't necessary because `MessageFormat`
 itself doesn't implement locale specific behavior. Any locale specific
 behavior is defined by the pattern that you provide as well as the
 subformats used for inserted arguments.

 Patterns and Their Interpretation

 `MessageFormat` uses patterns of the following form:
 
```

 MessageFormatPattern:
         String
         MessageFormatPattern FormatElement String

 FormatElement:
         { ArgumentIndex }
         { ArgumentIndex , FormatType }
         { ArgumentIndex , FormatType , FormatStyle }

 FormatType:
         number
         dtf_date
         dtf_time
         dtf_datetime
         pre-defined DateTimeFormatter(s)
         date
         time
         choice
         list

 FormatStyle:
         short
         medium
         long
         full
         integer
         currency
         percent
         compact_short
         compact_long
         or
         unit
         SubformatPattern
 
```

 

 The `ArgumentIndex` value is a non-negative integer written
 using the digits `'0'` through `'9'`, and represents an index into the
 `arguments` array passed to the `format` methods
 or the result array returned by the `parse` methods.
 

 Any constructor or method that takes a String pattern parameter will throw an `IllegalArgumentException` if the
 pattern contains an `ArgumentIndex` value that is equal to or exceeds an implementation limit.
 

 The `FormatType` and `FormatStyle` values are used to create
 a `Format` instance for the format element. The following
 table shows how the values map to `Format` instances. These values
 are case-insensitive when passed to `applyPattern`. Combinations
 not shown in the table are illegal. A SubformatPattern must
 be a valid pattern string for the `Format` subclass used.

 
 Shows how FormatType and FormatStyle values map to Format instances
 
    
       FormatType
       FormatStyle
       Subformat Created
 
 
    
       (none)
       (none)
       `null`
    
       `number`
       (none)
       `getInstance(Locale) NumberFormat.getInstance``(getLocale())`
    
       `integer`
       `getIntegerInstance(Locale) NumberFormat.getIntegerInstance``(getLocale())`
    
       `currency`
       `getCurrencyInstance(Locale) NumberFormat.getCurrencyInstance``(getLocale())`
    
       `percent`
       `getPercentInstance(Locale) NumberFormat.getPercentInstance``(getLocale())`
    
       `compact_short`
       `getCompactNumberInstance(Locale, NumberFormat.Style)
       NumberFormat.getCompactNumberInstance``(getLocale(),` `SHORT`)
    
       `compact_long`
       `getCompactNumberInstance(Locale, NumberFormat.Style)
       NumberFormat.getCompactNumberInstance``(getLocale(),` `LONG`)
    
       SubformatPattern
       `new` `DecimalFormat(String,DecimalFormatSymbols)
       DecimalFormat``(subformatPattern,` `getInstance(Locale)
       DecimalFormatSymbols.getInstance``(getLocale()))`
    
       `dtf_date`
       (none)
       `ofLocalizedDate(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDate(``MEDIUM``).withLocale(getLocale())`
    
       `short`
       `ofLocalizedDate(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDate(``SHORT``).withLocale(getLocale())`
    
       `medium`
       `ofLocalizedDate(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDate(``MEDIUM``).withLocale(getLocale())`
    
       `long`
       `ofLocalizedDate(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDate(``LONG``).withLocale(getLocale())`
    
       `full`
       `ofLocalizedDate(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDate(``FULL``).withLocale(getLocale())`
    
       SubformatPattern
       `ofPattern(String, Locale)
       DateTimeFormatter.ofPattern``(subformatPattern, getLocale())`
    
       `dtf_time`
       (none)
       `ofLocalizedTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedTime(``MEDIUM``).withLocale(getLocale())`
    
       `short`
       `ofLocalizedTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedTime(``SHORT``).withLocale(getLocale())`
    
       `medium`
       `ofLocalizedTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedTime(``MEDIUM``).withLocale(getLocale())`
    
       `long`
       `ofLocalizedTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedTime(``LONG``).withLocale(getLocale())`
    
       `full`
       `ofLocalizedTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedTime(``FULL``).withLocale(getLocale())`
    
       SubformatPattern
       `ofPattern(String, Locale)   DateTimeFormatter.ofPattern``(subformatPattern, getLocale())`
    
       `dtf_datetime`
       (none)
       `ofLocalizedDateTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDateTime(``MEDIUM``).withLocale(getLocale())`
    
       `short`
       `ofLocalizedDateTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDateTime(``SHORT``).withLocale(getLocale())`
    
       `medium`
       `ofLocalizedDateTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDateTime(``MEDIUM``).withLocale(getLocale())`
    
       `long`
       `ofLocalizedDateTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDateTime(``LONG``).withLocale(getLocale())`
    
       `full`
       `ofLocalizedDateTime(java.time.format.FormatStyle)
       DateTimeFormatter.ofLocalizedDateTime(``FULL``).withLocale(getLocale())`
    
       SubformatPattern
       `ofPattern(String, Locale)
       DateTimeFormatter.ofPattern``(subformatPattern, getLocale())`
    
       `pre-defined DateTimeFormatter(s)`
       (none)
       The `pre-defined DateTimeFormatter(s)` are used as a `FormatType` :
       `BASIC_ISO_DATE BASIC_ISO_DATE`,
       `ISO_LOCAL_DATE ISO_LOCAL_DATE`,
       `ISO_OFFSET_DATE ISO_OFFSET_DATE`,
       `ISO_DATE ISO_DATE`,
       `ISO_LOCAL_TIME ISO_LOCAL_TIME`,
       `ISO_OFFSET_TIME ISO_OFFSET_TIME`,
       `ISO_TIME ISO_TIME`,
       `ISO_LOCAL_DATE_TIME ISO_LOCAL_DATE_TIME`,
       `ISO_OFFSET_DATE_TIME ISO_OFFSET_DATE_TIME`,
       `ISO_ZONED_DATE_TIME ISO_ZONED_DATE_TIME`,
       `ISO_DATE_TIME ISO_DATE_TIME`,
       `ISO_ORDINAL_DATE ISO_ORDINAL_DATE`,
       `ISO_WEEK_DATE ISO_WEEK_DATE`,
       `ISO_INSTANT ISO_INSTANT`,
       `RFC_1123_DATE_TIME RFC_1123_DATE_TIME`
    
       `date`
       (none)
       `getDateInstance(int,Locale)
       DateFormat.getDateInstance``(``DEFAULT``, getLocale())`
    
       `short`
       `getDateInstance(int,Locale)
       DateFormat.getDateInstance``(``SHORT``, getLocale())`
    
       `medium`
       `getDateInstance(int,Locale)
       DateFormat.getDateInstance``(``MEDIUM``, getLocale())`
    
       `long`
       `getDateInstance(int,Locale)
       DateFormat.getDateInstance``(``LONG``, getLocale())`
    
       `full`
       `getDateInstance(int,Locale)
       DateFormat.getDateInstance``(``FULL``, getLocale())`
    
       SubformatPattern
       `new` `SimpleDateFormat(String,Locale)
       SimpleDateFormat``(subformatPattern, getLocale())`
    
       `time`
       (none)
       `getTimeInstance(int,Locale)
       DateFormat.getTimeInstance``(``DEFAULT``, getLocale())`
    
       `short`
       `getTimeInstance(int,Locale)
       DateFormat.getTimeInstance``(``SHORT``, getLocale())`
    
       `medium`
       `getTimeInstance(int,Locale)
       DateFormat.getTimeInstance``(``MEDIUM``, getLocale())`
    
       `long`
       `getTimeInstance(int,Locale)
       DateFormat.getTimeInstance``(``LONG``, getLocale())`
    
       `full`
       `getTimeInstance(int,Locale)
       DateFormat.getTimeInstance``(``FULL``, getLocale())`
    
       SubformatPattern
       `new` `SimpleDateFormat(String,Locale)
       SimpleDateFormat``(subformatPattern, getLocale())`
    
       `choice`
       SubformatPattern
       `new` `ChoiceFormat(String) ChoiceFormat``(subformatPattern)`
    
       `list`
       (none)
       `getInstance(Locale, ListFormat.Type, ListFormat.Style)
       ListFormat.getInstance``(getLocale()`, `STANDARD`, `FULL``)`
    
       `or`
       `getInstance(Locale, ListFormat.Type, ListFormat.Style)
       ListFormat.getInstance``(getLocale()`, `OR`, `FULL``)`
    
       `unit`
       `getInstance(Locale, ListFormat.Type, ListFormat.Style)
       ListFormat.getInstance``(getLocale()`, `UNIT`, `FULL``)`
 
 

 Quoting Rules in Patterns

 

Within a String, a pair of single quotes can be used to
 quote any arbitrary characters except single quotes. For example,
 pattern string "'{0}'" represents string
 "{0}", not a FormatElement. A single quote itself
 must be represented by doubled single quotes `''` throughout a
 String.  For example, pattern string "'{''}'" is
 interpreted as a sequence of '{ (start of quoting and a
 left curly brace), `''` (a single quote), and
 }' (a right curly brace and end of quoting),
 not '{' and '}' (quoted left and
 right curly braces): representing string "{'}",
 not "{}".

 

A SubformatPattern is interpreted by its corresponding
 subformat, and subformat-dependent pattern rules apply. For example,
 pattern string "{1,number,$'#',##}"
 (SubformatPattern with underline) will produce a number format
 with the pound-sign quoted, with a result such as: `"$#31,45"`. Refer to each `Format` subclass documentation for
 details.

 

Any unmatched quote is treated as closed at the end of the given
 pattern. For example, pattern string `"'{0`"} is treated as
 pattern `"'{0`'"}.

 

Any curly braces within an unquoted pattern must be balanced. For
 example, "ab {0} de" and "ab '}' de" are
 valid patterns, but "ab {0'}' de", "ab } de"
 and "''{''" are not.

 **Warning:**The rules for using quotes within message
 format patterns unfortunately have shown to be somewhat confusing.
 In particular, it isn't always obvious to localizers whether single
 quotes need to be doubled or not. Make sure to inform localizers about
 the rules, and tell them (for example, by using comments in resource
 bundle source files) which strings will be processed by `MessageFormat`.
 Note that localizers may need to use single quotes in translated
 strings where the original version doesn't have them.
 

 Usage Information

 The following example demonstrates a general usage of `MessageFormat`.
 In internationalized programs, the message format pattern and other
 static strings will likely be obtained from resource bundles.

 {@snippet lang=java :
 int planet = 7;
 String event = "a disturbance in the Force";
 String result = MessageFormat.format(
     "At {1,time} on {1,date}, there was {2} on planet {0,number,integer}.",
     planet, new GregorianCalendar(2053, Calendar.JULY, 3, 12, 30).getTime(), event);
 }

 `result` returns the following:
 
```

 At 12:30:00 PM on Jul 3, 2053, there was a disturbance in the Force on planet 7.
 
```

 

 For more sophisticated patterns, `ChoiceFormat` can be used with
 `MessageFormat` to produce accurate forms for singular and plural:
 {@snippet lang=java :
 MessageFormat msgFmt = new MessageFormat("The disk \"{0}\" contains {1,choice,0#no files|1#one file|1< {1,number,integer} files}.");
 Object[] args = {"MyDisk", fileCount};
 String result = msgFmt.format(args);
 }

 `result` with different values for `fileCount`, returns the following:
 
```

 The disk "MyDisk" contains no files.
 The disk "MyDisk" contains one file.
 The disk "MyDisk" contains 1,273 files.
 
```

 

 Notes: As seen in the previous snippet,
 the string produced by a `ChoiceFormat` in `MessageFormat` is
 treated as special; occurrences of '{' are used to indicate subformats, and
 cause recursion. If a `FormatElement` is defined in the `ChoiceFormat`
 pattern, it will only be formatted according to the `FormatType` and
 `FormatStyle` pattern provided. The associated subformats of the
 top level `MessageFormat` will not be applied to the `FormatElement`
 defined in the `ChoiceFormat` pattern.
 If you create both a `MessageFormat` and `ChoiceFormat`
 programmatically (instead of using the string patterns), then be careful not to
 produce a format that recurses on itself, which will cause an infinite loop.

 Formatting Date and Time

 MessageFormat provides patterns that support the date/time formatters in the
 `java.time.format` and `java.text` packages. Consider the following three examples,
 with a date of 11/16/2023:

 

1) a date `FormatType` with a full `FormatStyle`,
 {@snippet lang=java :
 Object[] arg = {new GregorianCalendar(2023, Calendar.NOVEMBER, 16).getTime()};
 var fmt = new MessageFormat("The date was {0,date,full}");
 fmt.format(arg); // returns "The date was Thursday, November 16, 2023"
 }

 

2) a dtf_date `FormatType` with a full `FormatStyle`,
 {@snippet lang=java :
 Object[] arg = {LocalDate.of(2023, 11, 16)};
 var fmt = new MessageFormat("The date was {0,dtf_date,full}");
 fmt.format(arg); // returns "The date was Thursday, November 16, 2023"
 }

 

3) an ISO_LOCAL_DATE `FormatType`,
 {@snippet lang=java :
 Object[] arg = {LocalDate.of(2023, 11, 16)};
 var fmt = new MessageFormat("The date was {0,ISO_LOCAL_DATE}");
 fmt.format(arg); // returns "The date was 2023-11-16"
 }

 Parsing
 

 When a single argument is parsed more than once in the string, the last match
 will be the final result of the parsing.  For example,
 {@snippet lang=java :
 MessageFormat mf = new MessageFormat("{0,number,#.##}, {0,number,#.#}");
 Object[] objs = {Double.valueOf(3.1415)};
 String result = mf.format( objs );
 // result now equals "3.14, 3.1"
 objs = mf.parse(result, new ParsePosition(0));
 // objs now equals {Double.valueOf(3.1)}
 }

 

 Likewise, parsing with a `MessageFormat` object using patterns containing
 multiple occurrences of the same argument would return the last match.  For
 example,
 {@snippet lang=java :
 MessageFormat mf = new MessageFormat("{0}, {0}, {0}");
 String forParsing = "x, y, z";
 Object[] objs = mf.parse(forParsing, new ParsePosition(0));
 // objs now equals {new String("z")}
 }

 Synchronization

 

 Message formats are not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.

**参见**

- java.util.Locale
- Format
- NumberFormat
- DecimalFormat
- DecimalFormatSymbols
- ChoiceFormat
- DateFormat
- SimpleDateFormat
- DateTimeFormatter

> *Since 1.1*
