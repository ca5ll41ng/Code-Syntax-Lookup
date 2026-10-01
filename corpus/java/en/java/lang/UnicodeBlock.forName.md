---
id: "java-en-function-unicodeblock-forname"
language: "java"
lang: "en"
category: "function"
name: "UnicodeBlock.forName"
signature: "public static final UnicodeBlock forName(String blockName)"
title: "UnicodeBlock.forName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Character.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnicodeBlock.forName

```java
public static final UnicodeBlock forName(String blockName)
```

Returns the UnicodeBlock with the given name. Block
 names are determined by The Unicode Standard. The file
 `Blocks.txt` defines blocks for a particular
 version of the standard. The `Character` class specifies
 the version of the standard that it supports.
 

 This method accepts block names in the following forms:
 
 
-  Canonical block names as defined by the Unicode Standard.
 For example, the standard defines a "Basic Latin" block. Therefore, this
 method accepts "Basic Latin" as a valid block name. The documentation of
 each UnicodeBlock provides the canonical name.
 
- Canonical block names with all spaces removed. For example, "BasicLatin"
 is a valid block name for the "Basic Latin" block.
 
- The text representation of each constant UnicodeBlock identifier.
 For example, this method will return the `BASIC_LATIN` block if
 provided with the "BASIC_LATIN" name. This form replaces all spaces and
 hyphens in the canonical name with underscores.
 

 Finally, character case is ignored for all of the valid block name forms.
 For example, "BASIC_LATIN" and "basic_latin" are both valid block names.
 The en_US locale's case mapping rules are used to provide case-insensitive
 string comparisons for block name validation.
 

 If the Unicode Standard changes block names, both the previous and
 current names will be accepted.

**参数**

- **blockName** — A `UnicodeBlock` name.

**返回**

- The `UnicodeBlock` instance identified by `blockName`

**异常**

- **IllegalArgumentException** — if `blockName` is an invalid name
- **NullPointerException** — if `blockName` is null

> *Since 1.5*
