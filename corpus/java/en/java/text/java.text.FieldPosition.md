---
id: "java-en-function-java-text-fieldposition"
language: "java"
lang: "en"
category: "function"
name: "java.text.FieldPosition"
title: "FieldPosition"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/FieldPosition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldPosition

`FieldPosition` is a simple class used by `Format`
 and its subclasses to identify fields in formatted output. Fields can
 be identified in two ways:
 
  
- By an integer constant, whose names typically end with
      `_FIELD`. The constants are defined in the various
      subclasses of `Format`.
  
- By a `Format.Field` constant, see `ERA_FIELD`
      and its friends in `DateFormat` for an example.
 

 

 `FieldPosition` keeps track of the position of the
 field within the formatted output with two indices: the index
 of the first character of the field and the index of the last
 character of the field.

 

 One version of the `format` method in the various
 `Format` classes requires a `FieldPosition`
 object as an argument. You use this `format` method
 to perform partial formatting or to get information about the
 formatted output (such as the position of a field).

 

 If you are interested in the positions of all attributes in the
 formatted string use the `Format` method
 `formatToCharacterIterator`.

**参见**

- java.text.Format

> *Since 1.1*
