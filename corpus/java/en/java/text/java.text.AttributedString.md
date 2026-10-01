---
id: "java-en-function-java-text-attributedstring"
language: "java"
lang: "en"
category: "function"
name: "java.text.AttributedString"
title: "AttributedString"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/AttributedString.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributedString

An AttributedString holds text and related attribute information. It
 may be used as the actual data storage in some cases where a text
 reader wants to access attributed text through the AttributedCharacterIterator
 interface.

 

 An attribute is a key/value pair, identified by the key.  No two
 attributes on a given character can have the same key.

 

The values for an attribute are immutable, or must not be mutated
 by clients or storage.  They are always passed by reference, and not
 cloned.

**参见**

- AttributedCharacterIterator
- Annotation

> *Since 1.2*
