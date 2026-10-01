---
id: "java-en-function-digitlist-getlong"
language: "java"
lang: "en"
category: "function"
name: "DigitList.getLong"
signature: "public long getLong()"
title: "DigitList.getLong"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DigitList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigitList.getLong

```java
public long getLong()
```

Utility routine to get the value of the digit list.
 If (count == 0) this returns 0,
 unlike Long.parseLong("") which throws NumberFormatException.
