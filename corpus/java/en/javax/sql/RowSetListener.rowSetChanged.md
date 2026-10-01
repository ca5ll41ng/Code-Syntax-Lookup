---
id: "java-en-function-rowsetlistener-rowsetchanged"
language: "java"
lang: "en"
category: "function"
name: "RowSetListener.rowSetChanged"
signature: "void rowSetChanged(RowSetEvent event)"
title: "RowSetListener.rowSetChanged"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetListener.rowSetChanged

```java
void rowSetChanged(RowSetEvent event)
```

Notifies registered listeners that a `RowSet` object
 in the given `RowSetEvent` object has changed its entire contents.
 

 The source of the event can be retrieved with the method
 `event.getSource`.

**参数**

- **event** — a `RowSetEvent` object that contains the `RowSet` object that is the source of the event
