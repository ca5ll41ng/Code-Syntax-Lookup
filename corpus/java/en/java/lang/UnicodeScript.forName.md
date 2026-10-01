---
id: "java-en-function-unicodescript-forname"
language: "java"
lang: "en"
category: "function"
name: "UnicodeScript.forName"
signature: "public static final UnicodeScript forName(String scriptName)"
title: "UnicodeScript.forName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Character.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnicodeScript.forName

```java
public static final UnicodeScript forName(String scriptName)
```

Returns the UnicodeScript constant with the given Unicode script
 name or the script name alias. Script names and their aliases are
 determined by The Unicode Standard. The files `Scripts.txt`
 and `PropertyValueAliases.txt` define script names
 and the script name aliases for a particular version of the
 standard. The `Character` class specifies the version of
 the standard that it supports.
 

 Character case is ignored for all of the valid script names.
 The en_US locale's case mapping rules are used to provide
 case-insensitive string comparisons for script name validation.

**参数**

- **scriptName** — A `UnicodeScript` name.

**返回**

- The `UnicodeScript` constant identified by `scriptName`

**异常**

- **IllegalArgumentException** — if `scriptName` is an invalid name
- **NullPointerException** — if `scriptName` is null
