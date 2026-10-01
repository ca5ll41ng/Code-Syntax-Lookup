---
id: "java-en-function-datetimetextprovider-gettextiterator"
language: "java"
lang: "en"
category: "function"
name: "DateTimeTextProvider.getTextIterator"
signature: "public Iterator<Entry<String, Long>> getTextIterator(TemporalField field, TextStyle style, Locale locale)"
title: "DateTimeTextProvider.getTextIterator"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeTextProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeTextProvider.getTextIterator

```java
public Iterator<Entry<String, Long>> getTextIterator(TemporalField field, TextStyle style, Locale locale)
```

Gets an iterator of text to field for the specified field, locale and style
 for the purpose of parsing.
 

 The iterator must be returned in order from the longest text to the shortest.
 

 The null return value should be used if there is no applicable parsable text, or
 if the text would be a numeric representation of the value.
 Text can only be parsed if all the values for that field-style-locale combination are unique.

**参数**

- **field** — the field to get text for, not null
- **style** — the style to get text for, null for all parsable text
- **locale** — the locale to get text for, not null

**返回**

- the iterator of text to field pairs, in order from longest text to shortest text, null if the field or style is not parsable
