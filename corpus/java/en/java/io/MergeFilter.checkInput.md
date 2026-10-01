---
id: "java-en-function-mergefilter-checkinput"
language: "java"
lang: "en"
category: "function"
name: "MergeFilter.checkInput"
signature: "public ObjectInputFilter.Status checkInput(FilterInfo info)"
title: "MergeFilter.checkInput"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MergeFilter.checkInput

```java
public ObjectInputFilter.Status checkInput(FilterInfo info)
```

Returns REJECTED if either of the filters returns REJECTED,
 otherwise, ALLOWED if either of the filters returns ALLOWED,
 otherwise, returns `UNDECIDED`.

**参数**

- **info** — the FilterInfo

**返回**

- REJECTED if either of the filters returns REJECTED, otherwise, ALLOWED if either of the filters returns ALLOWED, otherwise, returns `UNDECIDED`.
