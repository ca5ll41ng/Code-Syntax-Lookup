---
id: "java-en-function-java-text-format"
language: "java"
lang: "en"
category: "function"
name: "java.text.Format"
title: "Format"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Format.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Format

`Format` is an abstract base class for formatting locale-sensitive
 information such as dates, messages, numbers, and lists.

 

 `Format` defines the programming interface for formatting
 locale-sensitive objects into `String`s (the
 `format` method) and for parsing `String`s back
 into objects (the `parseObject` method).

 

 Generally, a format's `parseObject` method must be able to parse
 any string formatted by its `format` method. However, there may
 be exceptional cases where this is not possible. For example, a
 `format` method might create two adjacent integer numbers with
 no separator in between, and in this case the `parseObject` could
 not tell which digits belong to which number.

 Subclassing

 

 The Java Platform provides specialized subclasses of `Format`--
 `DateFormat`, `MessageFormat`, `NumberFormat`, and
 `ListFormat`--for formatting dates, messages, numbers, and lists
 respectively.
 

 Concrete subclasses must implement three methods:
 
 
-  `format(Object obj, StringBuffer toAppendTo, FieldPosition pos)`
 
-  `formatToCharacterIterator(Object obj)`
 
-  `parseObject(String source, ParsePosition pos)`
 

 These general methods allow polymorphic parsing and formatting of objects
 and are used, for example, by `MessageFormat`.
 Subclasses often also provide additional `format` methods for
 specific input types as well as `parse` methods for specific
 result types. Any `parse` method that does not take a
 `ParsePosition` argument should throw `ParseException`
 when no text in the required format is at the beginning of the input text.

 

 Most subclasses will also implement the following factory methods:
 
 
- 
 `getInstance` for getting a useful format object appropriate
 for the current locale
 
- 
 `getInstance(Locale)` for getting a useful format
 object appropriate for the specified locale
 

 In addition, some subclasses may also implement other
 `getXxxxInstance` methods for more specialized control. For
 example, the `NumberFormat` class provides
 `getPercentInstance` and `getCurrencyInstance`
 methods for getting specialized number formatters.

 

 Subclasses of `Format` that allow programmers to create objects
 for locales (with `getInstance(Locale)` for example)
 must also implement the following class method:
 
```

 public static Locale[] getAvailableLocales()
 
```

 

 

 Subclasses may also consider implementing leniency when parsing.
 The definition of leniency should be delegated to the subclass.

 

 And finally subclasses may define a set of constants to identify the various
 fields in the formatted output. These constants are used to create a FieldPosition
 object which identifies what information is contained in the field and its
 position in the formatted result. These constants should be named
 item_FIELD where item identifies
 the field. For examples of these constants, see `ERA_FIELD` and its
 friends in `DateFormat`.

 Synchronization

 

 Formats are generally not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.

**参见**

- java.text.ParsePosition
- java.text.FieldPosition
- java.text.NumberFormat
- java.text.DateFormat
- java.text.MessageFormat
- java.text.ListFormat

> *Since 1.1*
