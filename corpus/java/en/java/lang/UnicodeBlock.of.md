---
id: "java-en-function-unicodeblock-of"
language: "java"
lang: "en"
category: "function"
name: "UnicodeBlock.of"
signature: "public static UnicodeBlock of(char c)"
title: "UnicodeBlock.of"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Character.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnicodeBlock.of

```java
public static UnicodeBlock of(char c)
```

Returns the object representing the Unicode block containing the
 given character, or `null` if the character is not a
 member of a defined block.

 

**Note:** This method cannot handle
  supplementary
 characters.  To support all Unicode characters, including
 supplementary characters, use the `of` method.

**参数**

- **c** — The character in question

**返回**

- The `UnicodeBlock` instance representing the Unicode block of which this character is a member, or `null` if the character is not a member of any Unicode block
