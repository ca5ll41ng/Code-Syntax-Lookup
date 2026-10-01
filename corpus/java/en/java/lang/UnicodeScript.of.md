---
id: "java-en-function-unicodescript-of"
language: "java"
lang: "en"
category: "function"
name: "UnicodeScript.of"
signature: "public static UnicodeScript of(int codePoint)"
title: "UnicodeScript.of"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Character.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnicodeScript.of

```java
public static UnicodeScript of(int codePoint)
```

Returns the enum constant representing the Unicode script of which
 the given character (Unicode code point) is assigned to.

**参数**

- **codePoint** — the character (Unicode code point) in question.

**返回**

- The `UnicodeScript` constant representing the Unicode script of which this character is assigned to.

**异常**

- **IllegalArgumentException** — if the specified `codePoint` is an invalid Unicode code point.

**参见**

- Character#isValidCodePoint(int)
