---
id: "java-en-function-checkedlist-replaceall"
language: "java"
lang: "en"
category: "function"
name: "CheckedList.replaceAll"
signature: "public void replaceAll(UnaryOperator<E> operator)"
title: "CheckedList.replaceAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CheckedList.replaceAll

```java
public void replaceAll(UnaryOperator<E> operator)
```

{@inheritDoc}

**异常**

- **ClassCastException** — if the class of an element returned by the operator prevents it from being added to this collection. The exception may be thrown after some elements of the list have already been replaced.
