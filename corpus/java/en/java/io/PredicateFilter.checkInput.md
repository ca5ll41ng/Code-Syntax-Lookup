---
id: "java-en-function-predicatefilter-checkinput"
language: "java"
lang: "en"
category: "function"
name: "PredicateFilter.checkInput"
signature: "public ObjectInputFilter.Status checkInput(FilterInfo info)"
title: "PredicateFilter.checkInput"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PredicateFilter.checkInput

```java
public ObjectInputFilter.Status checkInput(FilterInfo info)
```

Returns a filter that returns `ifTrueStatus` or the `ifFalseStatus`
 based on the predicate of the `non-null` class and `UNDECIDED`
 if the class is `null`.

**参数**

- **info** — the FilterInfo

**返回**

- a filter that returns `ifTrueStatus` or the `ifFalseStatus` based on the predicate of the `non-null` class and `UNDECIDED` if the class is `null`
