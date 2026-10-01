---
id: "java-en-function-abstractrefsortingsink-cancellationrequested"
language: "java"
lang: "en"
category: "function"
name: "AbstractRefSortingSink.cancellationRequested"
signature: "public final boolean cancellationRequested()"
title: "AbstractRefSortingSink.cancellationRequested"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/SortedOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractRefSortingSink.cancellationRequested

```java
public final boolean cancellationRequested()
```

Records is cancellation is requested so short-circuiting behaviour
 can be preserved when the sorted elements are pushed downstream.

**返回**

- false, as this sink never short-circuits.
