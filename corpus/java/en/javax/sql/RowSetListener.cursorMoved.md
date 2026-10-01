---
id: "java-en-function-rowsetlistener-cursormoved"
language: "java"
lang: "en"
category: "function"
name: "RowSetListener.cursorMoved"
signature: "void cursorMoved(RowSetEvent event)"
title: "RowSetListener.cursorMoved"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetListener.cursorMoved

```java
void cursorMoved(RowSetEvent event)
```

Notifies registered listeners that a `RowSet` object's
 cursor has moved.
 

 The source of the event can be retrieved with the method
 `event.getSource`.

**参数**

- **event** — a `RowSetEvent` object that contains the `RowSet` object that is the source of the event
