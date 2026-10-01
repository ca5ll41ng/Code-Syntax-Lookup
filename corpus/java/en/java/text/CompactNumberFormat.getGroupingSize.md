---
id: "java-en-function-compactnumberformat-getgroupingsize"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.getGroupingSize"
signature: "public int getGroupingSize()"
title: "CompactNumberFormat.getGroupingSize"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.getGroupingSize

```java
public int getGroupingSize()
```

Returns the grouping size. Grouping size is the number of digits between
 grouping separators in the integer portion of a number. For example,
 in the compact number `"12,347 trillion"` for the
 `US US locale`, the grouping size is 3.

**返回**

- the grouping size

**参见**

- #setGroupingSize
- java.text.NumberFormat#isGroupingUsed
- java.text.DecimalFormatSymbols#getGroupingSeparator
