---
id: "java-en-function-java-lang-classfile-attribute-characterrangeinfo"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.CharacterRangeInfo"
title: "CharacterRangeInfo"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/CharacterRangeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRangeInfo

Models a single character range entry in the `CharacterRangeTableAttribute`.
 

 Each character range entry associates a range of indices in the code array
 with a range of character positions in the source file.  A character position
 in the source file is represented by a line number and a column number, and
 its value is encoded as `lineNumber << 10 + columnNumber`.  Note that
 column numbers are not the same as byte indices in a column as multibyte
 characters may be present in the source file.

 Each character range entry includes a
 flag which indicates what kind of range is described: statement, assignment,
 method call, etc.

**参见**

- CharacterRangeTableAttribute#characterRangeTable()
- CharacterRange

> *Since 24*
