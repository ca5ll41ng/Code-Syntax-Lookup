---
id: "java-en-function-rowset-getcommand"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getCommand"
signature: "String getCommand()"
title: "RowSet.getCommand"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getCommand

```java
String getCommand()
```

Retrieves this `RowSet` object's command property.

 The command property contains a command string, which must be an SQL
 query, that can be executed to fill the rowset with data.
 The default value is `null`.

**返回**

- the command string; may be `null`

**参见**

- #setCommand
