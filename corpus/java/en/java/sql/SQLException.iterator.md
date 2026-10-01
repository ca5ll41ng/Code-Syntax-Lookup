---
id: "java-en-function-sqlexception-iterator"
language: "java"
lang: "en"
category: "function"
name: "SQLException.iterator"
signature: "public Iterator<Throwable> iterator()"
title: "SQLException.iterator"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLException.iterator

```java
public Iterator<Throwable> iterator()
```

Returns an iterator over the chained SQLExceptions.  The iterator will
 be used to iterate over each SQLException and its underlying cause
 (if any).

**返回**

- an iterator over the chained SQLExceptions and causes in the proper order

> *Since 1.6*
