---
id: "java-en-function-connection-settypemap"
language: "java"
lang: "en"
category: "function"
name: "Connection.setTypeMap"
signature: "void setTypeMap(Map<String, Class<?>> map) throws SQLException"
title: "Connection.setTypeMap"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setTypeMap

```java
void setTypeMap(Map<String, Class<?>> map) throws SQLException
```

Installs the given `TypeMap` object as the type map for
 this `Connection` object.  The type map will be used for the
 custom mapping of SQL structured types and distinct types.
 

 You must set the values for the `TypeMap` prior to
 calling `setMap` as a JDBC driver may create an internal copy
 of the `TypeMap`:

 
```

      Map myMap&lt;String,Class&lt;?&gt;&gt; = new HashMap&lt;String,Class&lt;?&gt;&gt;();
      myMap.put("mySchemaName.ATHLETES", Athletes.class);
      con.setTypeMap(myMap);
 
```

**参数**

- **map** — the `java.util.Map` object to install as the replacement for this `Connection` object's default type map

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed connection or the given parameter is not a `java.util.Map` object
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getTypeMap

> *Since 1.2*
