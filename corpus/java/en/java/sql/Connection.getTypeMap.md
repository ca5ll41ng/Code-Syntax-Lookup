---
id: "java-en-function-connection-gettypemap"
language: "java"
lang: "en"
category: "function"
name: "Connection.getTypeMap"
signature: "Map<String, Class<?>> getTypeMap() throws SQLException"
title: "Connection.getTypeMap"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getTypeMap

```java
Map<String, Class<?>> getTypeMap() throws SQLException
```

Retrieves the `Map` object associated with this
 `Connection` object.
 Unless the application has added an entry, the type map returned
 will be empty.
 

 You must invoke `setTypeMap` after making changes to the
 `Map` object returned from
  `getTypeMap` as a JDBC driver may create an internal
 copy of the `Map` object passed to `setTypeMap`:

 
```

      Map&lt;String,Class&lt;?&gt;&gt; myMap = con.getTypeMap();
      myMap.put("mySchemaName.ATHLETES", Athletes.class);
      con.setTypeMap(myMap);
 
```

**返回**

- the `java.util.Map` object associated with this `Connection` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setTypeMap

> *Since 1.2*
