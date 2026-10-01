---
id: "java-en-function-compactnumberformat-isgroupingused"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.isGroupingUsed"
signature: "public boolean isGroupingUsed()"
title: "CompactNumberFormat.isGroupingUsed"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.isGroupingUsed

```java
public boolean isGroupingUsed()
```

Returns true if grouping is used in this format. For example, with
 grouping on and grouping size set to 3, the number `12346567890987654`
 can be formatted as `"12,347 trillion"` in the
 `US US locale`.
 The grouping separator is locale dependent.

**返回**

- `true` if grouping is used; `false` otherwise

**参见**

- #setGroupingUsed
