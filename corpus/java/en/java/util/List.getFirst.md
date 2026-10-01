---
id: "java-en-function-list-getfirst"
language: "java"
lang: "en"
category: "function"
name: "List.getFirst"
signature: "default E getFirst()"
title: "List.getFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.getFirst

```java
default E getFirst()
```

{@inheritDoc}

 If this List is not empty, the implementation in this interface returns the result
 of calling `get(0)`. Otherwise, it throws `NoSuchElementException`.

**异常**

- **NoSuchElementException** — {@inheritDoc}

> *Since 21*
