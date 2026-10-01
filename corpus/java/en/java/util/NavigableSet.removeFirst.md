---
id: "java-en-function-navigableset-removefirst"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.removeFirst"
signature: "default E removeFirst()"
title: "NavigableSet.removeFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.removeFirst

```java
default E removeFirst()
```

{@inheritDoc}

 If this set is not empty, the implementation in this interface returns the result of calling
 the `pollFirst` method. Otherwise, it throws `NoSuchElementException`.

**异常**

- **NoSuchElementException** — {@inheritDoc}
- **UnsupportedOperationException** — {@inheritDoc}

> *Since 21*
