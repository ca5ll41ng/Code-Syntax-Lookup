---
id: "java-en-function-compactnumberformat-setgroupingsize"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.setGroupingSize"
signature: "public void setGroupingSize(int newValue)"
title: "CompactNumberFormat.setGroupingSize"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.setGroupingSize

```java
public void setGroupingSize(int newValue)
```

Sets the grouping size. Grouping size is the number of digits between
 grouping separators in the integer portion of a number. For example,
 in the compact number `"12,347 trillion"` for the
 `US US locale`, the grouping size is 3. The grouping
 size must be greater than or equal to zero and less than or equal to 127.

**参数**

- **newValue** — the new grouping size

**异常**

- **IllegalArgumentException** — if `newValue` is negative or larger than 127

**参见**

- #getGroupingSize
- java.text.NumberFormat#setGroupingUsed
- java.text.DecimalFormatSymbols#setGroupingSeparator
