---
id: "java-en-function-java-text-listformat"
language: "java"
lang: "en"
category: "function"
name: "java.text.ListFormat"
title: "ListFormat"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ListFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListFormat

`ListFormat` formats or parses a list of strings in a locale-sensitive way.
 Use `ListFormat` to construct a list of strings displayed for end users.
 For example, displaying a list of 3 weekdays, e.g. "Monday", "Wednesday", "Friday"
 as "Monday, Wednesday, and Friday" in an inclusive list type. This class provides
 the functionality defined in Unicode Consortium's LDML specification for
 
 List Patterns.
 

 Three formatting types are provided: `STANDARD STANDARD`, `OR OR`,
 and `UNIT UNIT`, which determines the punctuation
 between the strings and the connecting words if any. Also, three formatting styles for each
 type are provided: `FULL FULL`, `SHORT SHORT`, and
 `NARROW NARROW`, suitable for how the strings are abbreviated (or not).
 The following snippet is an example of formatting
 the list of Strings `"Foo", "Bar", "Baz"` in US English with
 `STANDARD` type and `FULL` style:
 {@snippet lang=java :
 ListFormat.getInstance(Locale.US, ListFormat.Type.STANDARD, ListFormat.Style.FULL)
     .format(List.of("Foo", "Bar", "Baz"))
 }
 This will produce the concatenated list string, "Foo, Bar, and Baz" as seen in
 the following:
 
 Formatting examples
 
 
     FULL
     SHORT
     NARROW
 
 
 STANDARD
     Foo, Bar, and Baz
     Foo, Bar, &amp; Baz
     Foo, Bar, Baz
 OR
     Foo, Bar, or Baz
     Foo, Bar, or Baz
     Foo, Bar, or Baz
 UNIT
     Foo, Bar, Baz
     Foo, Bar, Baz
     Foo Bar Baz
 
 
 Note: these examples are from CLDR, there could be different results from other locale providers.
 

 Alternatively, Locale, Type, and/or Style independent instances
 can be created with `getInstance`. The String array passed to the
 method specifies the delimiting patterns for the `start`/`middle`/`end`
 portion of the formatted string, as well as optional specialized patterns for two or three
 elements. Refer to the method description for more detail.
 

 On parsing, if some ambiguity is found in the input string, such as delimiting
 sequences in the input string, the result, when formatted with the same formatting, does not
 re-produce the input string. For example, a two element String list
 "a, b,", "c" will be formatted as "a, b, and c", but may be parsed as three elements
 "a", "b", "c".

> *Since 22*
