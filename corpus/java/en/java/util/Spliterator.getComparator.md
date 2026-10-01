---
id: "java-en-function-spliterator-getcomparator"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.getComparator"
signature: "default Comparator<? super T> getComparator()"
title: "Spliterator.getComparator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.getComparator

```java
default Comparator<? super T> getComparator()
```

If this Spliterator's source is `SORTED` by a `Comparator`,
 returns that `Comparator`. If the source is `SORTED` in
 `Comparable natural order`, returns `null`.  Otherwise,
 if the source is not `SORTED`, throws `IllegalStateException`.

 The default implementation always throws `IllegalStateException`.

**返回**

- a Comparator, or `null` if the elements are sorted in the natural order.

**异常**

- **IllegalStateException** — if the spliterator does not report a characteristic of `SORTED`.
