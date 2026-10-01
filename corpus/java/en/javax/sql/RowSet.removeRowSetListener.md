---
id: "java-en-function-rowset-removerowsetlistener"
language: "java"
lang: "en"
category: "function"
name: "RowSet.removeRowSetListener"
signature: "void removeRowSetListener(RowSetListener listener)"
title: "RowSet.removeRowSetListener"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.removeRowSetListener

```java
void removeRowSetListener(RowSetListener listener)
```

Removes the specified listener from the list of components that will be
 notified when an event occurs on this `RowSet` object.

**参数**

- **listener** — a component that has been registered as a listener for this `RowSet` object

**参见**

- #addRowSetListener
