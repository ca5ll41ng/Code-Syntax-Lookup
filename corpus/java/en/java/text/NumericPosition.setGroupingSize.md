---
id: "java-en-function-numericposition-setgroupingsize"
language: "java"
lang: "en"
category: "function"
name: "NumericPosition.setGroupingSize"
signature: "public void setGroupingSize (int newValue)"
title: "NumericPosition.setGroupingSize"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericPosition.setGroupingSize

```java
public void setGroupingSize (int newValue)
```

Set the grouping size. Grouping size is the number of digits between
 grouping separators in the integer portion of a number.  For example,
 in the number "123,456.78", the grouping size is 3. Grouping size of
 zero designates that grouping is not used, which provides the same
 formatting as if calling `setGroupingUsed(boolean)
 setGroupingUsed`.
 

 The value passed in is converted to a byte, which may lose information.
 Values that are negative or greater than
 `MAX_VALUE Byte.MAX_VALUE`, will throw an
 `IllegalArgumentException`.

**参数**

- **newValue** — the new grouping size

**异常**

- **IllegalArgumentException** — if `newValue` is negative or greater than `MAX_VALUE Byte.MAX_VALUE`

**参见**

- #getGroupingSize
- java.text.NumberFormat#setGroupingUsed
- java.text.DecimalFormatSymbols#setGroupingSeparator
