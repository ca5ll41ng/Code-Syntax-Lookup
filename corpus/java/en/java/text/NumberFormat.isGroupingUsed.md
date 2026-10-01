---
id: "java-en-function-numberformat-isgroupingused"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.isGroupingUsed"
signature: "public boolean isGroupingUsed()"
title: "NumberFormat.isGroupingUsed"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.isGroupingUsed

```java
public boolean isGroupingUsed()
```

Returns true if grouping is used in this format. This applies to both
 formatting and parsing. The grouping separator as well as the size of each
 group is locale dependent and is determined by sub-classes of NumberFormat.
 For example, consider a `NumberFormat` that expects a "`,`"
 grouping separator symbol with a grouping size of 3.
 
   
-  Formatting `1234567` with grouping on returns `"1,234,567"`
   
-  Parsing `"1,234,567"` with grouping off returns `1`
   
-  Parsing `"1,234,567"` with grouping off when `isStrict`
        returns `true` throws `ParseException`

**返回**

- `true` if grouping is used; `false` otherwise

**参见**

- #setGroupingUsed
- ##leniency Leniency Section
