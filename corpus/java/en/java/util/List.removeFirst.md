---
id: "java-en-function-list-removefirst"
language: "java"
lang: "en"
category: "function"
name: "List.removeFirst"
signature: "default E removeFirst()"
title: "List.removeFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.removeFirst

```java
default E removeFirst()
```

{@inheritDoc}

 If this List is not empty, the implementation in this interface returns the result
 of calling `remove(0)`. Otherwise, it throws `NoSuchElementException`.

**异常**

- **NoSuchElementException** — {@inheritDoc}
- **UnsupportedOperationException** — {@inheritDoc}

> *Since 21*
