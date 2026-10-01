---
id: "java-en-function-messageformat-formattocharacteriterator"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.formatToCharacterIterator"
signature: "public AttributedCharacterIterator formatToCharacterIterator(Object arguments)"
title: "MessageFormat.formatToCharacterIterator"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.formatToCharacterIterator

```java
public AttributedCharacterIterator formatToCharacterIterator(Object arguments)
```

Formats an array of objects and inserts them into the
 `MessageFormat`'s pattern, producing an
 `AttributedCharacterIterator`.
 You can use the returned `AttributedCharacterIterator`
 to build the resulting String, as well as to determine information
 about the resulting String.
 

 The text of the returned `AttributedCharacterIterator` is
 the same that would be returned by
 
     `format(java.lang.Object[], java.lang.StringBuffer, java.text.FieldPosition) format`(arguments, new StringBuffer(), null).toString()
 
 

 In addition, the `AttributedCharacterIterator` contains at
 least attributes indicating where text was generated from an
 argument in the `arguments` array. The keys of these attributes are of
 type `MessageFormat.Field`, their values are
 `Integer` objects indicating the index in the `arguments`
 array of the argument from which the text was generated.
 

 The attributes/value from the underlying `Format`
 instances that `MessageFormat` uses will also be
 placed in the resulting `AttributedCharacterIterator`.
 This allows you to not only find where an argument is placed in the
 resulting String, but also which fields it contains in turn.

**参数**

- **arguments** — an array of objects to be formatted and substituted.

**返回**

- AttributedCharacterIterator describing the formatted value.

**异常**

- **NullPointerException** — if `arguments` is null.
- **IllegalArgumentException** — if an argument in the `arguments` array is not of the type expected by the format element(s) that use it.

> *Since 1.4*
