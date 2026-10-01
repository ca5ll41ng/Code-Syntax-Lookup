---
id: "java-en-function-navigableset-polllast"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.pollLast"
signature: "E pollLast()"
title: "NavigableSet.pollLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.pollLast

```java
E pollLast()
```

Retrieves and removes the last (highest) element,
 or returns `null` if this set is empty (optional operation).

**返回**

- the last element, or `null` if this set is empty

**异常**

- **UnsupportedOperationException** — if the `pollLast` operation is not supported by this collection
