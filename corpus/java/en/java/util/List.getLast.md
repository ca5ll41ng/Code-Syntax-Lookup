---
id: "java-en-function-list-getlast"
language: "java"
lang: "en"
category: "function"
name: "List.getLast"
signature: "default E getLast()"
title: "List.getLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.getLast

```java
default E getLast()
```

{@inheritDoc}

 If this List is not empty, the implementation in this interface returns the result
 of calling `get(size() - 1)`. Otherwise, it throws `NoSuchElementException`.

**异常**

- **NoSuchElementException** — {@inheritDoc}

> *Since 21*
