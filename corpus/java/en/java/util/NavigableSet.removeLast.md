---
id: "java-en-function-navigableset-removelast"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.removeLast"
signature: "default E removeLast()"
title: "NavigableSet.removeLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.removeLast

```java
default E removeLast()
```

{@inheritDoc}

 If this set is not empty, the implementation in this interface returns the result of calling
 the `pollLast` method. Otherwise, it throws `NoSuchElementException`.

**异常**

- **NoSuchElementException** — {@inheritDoc}
- **UnsupportedOperationException** — {@inheritDoc}

> *Since 21*
