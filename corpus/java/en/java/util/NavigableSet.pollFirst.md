---
id: "java-en-function-navigableset-pollfirst"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.pollFirst"
signature: "E pollFirst()"
title: "NavigableSet.pollFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.pollFirst

```java
E pollFirst()
```

Retrieves and removes the first (lowest) element,
 or returns `null` if this set is empty (optional operation).

**返回**

- the first element, or `null` if this set is empty

**异常**

- **UnsupportedOperationException** — if the `pollFirst` operation is not supported by this collection
