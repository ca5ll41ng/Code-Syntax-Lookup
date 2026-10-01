---
id: "java-en-function-numericposition-getgroupingsize"
language: "java"
lang: "en"
category: "function"
name: "NumericPosition.getGroupingSize"
signature: "public int getGroupingSize ()"
title: "NumericPosition.getGroupingSize"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericPosition.getGroupingSize

```java
public int getGroupingSize ()
```

Return the grouping size. Grouping size is the number of digits between
 grouping separators in the integer portion of a number.  For example,
 in the number "123,456.78", the grouping size is 3. Grouping size of
 zero designates that grouping is not used, which provides the same
 formatting as if calling `setGroupingUsed(boolean)
 setGroupingUsed`.

**返回**

- the grouping size

**参见**

- #setGroupingSize
- java.text.NumberFormat#isGroupingUsed
- java.text.DecimalFormatSymbols#getGroupingSeparator
