---
id: "java-en-function-rejectundecidedfilter-checkinput"
language: "java"
lang: "en"
category: "function"
name: "RejectUndecidedFilter.checkInput"
signature: "public ObjectInputFilter.Status checkInput(FilterInfo info)"
title: "RejectUndecidedFilter.checkInput"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RejectUndecidedFilter.checkInput

```java
public ObjectInputFilter.Status checkInput(FilterInfo info)
```

Apply the filter and return the status if not UNDECIDED and checking a class.
 For array classes, re-check the final component type against the filter.
 Make an exception for Primitive classes that are implicitly allowed by the pattern based filter.

**参数**

- **info** — the FilterInfo

**返回**

- the status of applying the filter and checking the class
