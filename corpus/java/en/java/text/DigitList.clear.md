---
id: "java-en-function-digitlist-clear"
language: "java"
lang: "en"
category: "function"
name: "DigitList.clear"
signature: "public void clear ()"
title: "DigitList.clear"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DigitList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigitList.clear

```java
public void clear ()
```

Clears out the digits.
 Use before appending them.
 Typically, you set a series of digits with append, then at the point
 you hit the decimal point, you set myDigitList.decimalAt = myDigitList.count;
 then go on appending digits.
