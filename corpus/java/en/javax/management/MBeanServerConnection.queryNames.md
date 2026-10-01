---
id: "java-en-function-mbeanserverconnection-querynames"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.queryNames"
signature: "public Set<ObjectName> queryNames(ObjectName name, QueryExp query) throws IOException"
title: "MBeanServerConnection.queryNames"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.queryNames

```java
public Set<ObjectName> queryNames(ObjectName name, QueryExp query) throws IOException
```

Gets the names of MBeans controlled by the MBean server. This
 method enables any of the following to be obtained: The names
 of all MBeans, the names of a set of MBeans specified by
 pattern matching on the ObjectName and/or a Query
 expression, a specific MBean name (equivalent to testing
 whether an MBean is registered). When the object name is null
 or no domain and key properties are specified, all objects are
 selected (and filtered if a query is specified). It returns the
 set of ObjectNames for the MBeans selected.

**参数**

- **name** — The object name pattern identifying the MBean names to be retrieved. If null or no domain and key properties are specified, the name of all registered MBeans will be retrieved.
- **query** — The query expression to be applied for selecting MBeans. If null no query expression will be applied for selecting MBeans.

**返回**

- A set containing the ObjectNames for the MBeans selected.  If no MBean satisfies the query, an empty list is returned.

**异常**

- **IOException** — A communication problem occurred when talking to the MBean server.
