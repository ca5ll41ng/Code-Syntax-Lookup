---
id: "java-en-function-rowset-addrowsetlistener"
language: "java"
lang: "en"
category: "function"
name: "RowSet.addRowSetListener"
signature: "void addRowSetListener(RowSetListener listener)"
title: "RowSet.addRowSetListener"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.addRowSetListener

```java
void addRowSetListener(RowSetListener listener)
```

Registers the given listener so that it will be notified of events
 that occur on this `RowSet` object.

**参数**

- **listener** — a component that has implemented the `RowSetListener` interface and wants to be notified when events occur on this `RowSet` object

**参见**

- #removeRowSetListener
