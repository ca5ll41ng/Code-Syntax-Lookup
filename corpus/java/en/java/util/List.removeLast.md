---
id: "java-en-function-list-removelast"
language: "java"
lang: "en"
category: "function"
name: "List.removeLast"
signature: "default E removeLast()"
title: "List.removeLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.removeLast

```java
default E removeLast()
```

{@inheritDoc}

 If this List is not empty, the implementation in this interface returns the result
 of calling `remove(size() - 1)`. Otherwise, it throws `NoSuchElementException`.

**异常**

- **NoSuchElementException** — {@inheritDoc}
- **UnsupportedOperationException** — {@inheritDoc}

> *Since 21*
