---
id: "java-en-function-digitlist-getdouble"
language: "java"
lang: "en"
category: "function"
name: "DigitList.getDouble"
signature: "public double getDouble()"
title: "DigitList.getDouble"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DigitList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigitList.getDouble

```java
public double getDouble()
```

Utility routine to get the value of the digit list
 If (count == 0) this returns 0.0,
 unlike Double.parseDouble("") which throws NumberFormatException.
