---
id: "java-en-function-properties-store"
language: "java"
lang: "en"
category: "function"
name: "Properties.store"
signature: "public void store(Writer writer, String comments) throws IOException"
title: "Properties.store"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.store

```java
public void store(Writer writer, String comments) throws IOException
```

Writes this property list (key and element pairs) in this
 `Properties` table to the output character stream in a
 format suitable for using the `load`
 method.
 

 Properties from the defaults table of this `Properties`
 table (if any) are not written out by this method.
 

 If the comments argument is not null, then an ASCII `#`
 character, the comments string, and a line separator are first written
 to the output stream. Thus, the `comments` can serve as an
 identifying comment. Any one of a line feed (`\n`), a carriage
 return (`\r`), or a carriage return followed immediately by a line feed
 (`\r\n`) in comments is replaced by a
 `lineSeparator() line separator` and if the next
 character in comments is not character `#` or character `!` then
 an ASCII `#` is written out after that line separator.
 

 If the {@systemProperty java.properties.date} is set on the command line
 and is non-empty (as determined by `isEmpty()  String.isEmpty`),
 a comment line is written as follows.
 First, a `#` character is written, followed by the contents
 of the property, followed by a line separator. Any line terminator characters
 in the value of the system property are treated the same way as noted above
 for the comments argument.
 If the system property is not set or is empty, a comment line is written
 as follows.
 First, a `#` character is written, followed by the current date and time
 formatted as if by the `toString() Date.toString` method,
 followed by a line separator.
 

 Then every entry in this `Properties` table is
 written out, one per line. For each entry the key string is
 written, then an ASCII `=`, then the associated
 element string. For the key, all space characters are
 written with a preceding `\` character.  For the
 element, leading space characters, but not embedded or trailing
 space characters, are written with a preceding `\`
 character. The key and element characters `#`,
 `!`, `=`, and `:` are written
 with a preceding backslash to ensure that they are properly loaded.
 

 After the entries have been written, the output stream is flushed.
 The output stream remains open after this method returns.

 of the keys in the `entrySet()` unless `entrySet()` is
 overridden by a subclass to return a different value than `super.entrySet()`.

**参数**

- **writer** — an output character stream writer.
- **comments** — a description of the property list.

**异常**

- **IOException** — if writing this property list to the specified output stream throws an `IOException`.
- **ClassCastException** — if this `Properties` object contains any keys or values that are not `Strings`.
- **NullPointerException** — if `writer` is null.

> *Since 1.6*
