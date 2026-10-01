---
id: "java-en-function-mbeanserverconnection-querymbeans"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.queryMBeans"
signature: "public Set<ObjectInstance> queryMBeans(ObjectName name, QueryExp query) throws IOException"
title: "MBeanServerConnection.queryMBeans"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.queryMBeans

```java
public Set<ObjectInstance> queryMBeans(ObjectName name, QueryExp query) throws IOException
```

Gets MBeans controlled by the MBean server. This method allows
 any of the following to be obtained: All MBeans, a set of
 MBeans specified by pattern matching on the
 ObjectName and/or a Query expression, a specific
 MBean. When the object name is null or no domain and key
 properties are specified, all objects are to be selected (and
 filtered if a query is specified). It returns the set of
 ObjectInstance objects (containing the
 ObjectName and the Java Class name) for the
 selected MBeans.

**参数**

- **name** — The object name pattern identifying the MBeans to be retrieved. If null or no domain and key properties are specified, all the MBeans registered will be retrieved.
- **query** — The query expression to be applied for selecting MBeans. If null no query expression will be applied for selecting MBeans.

**返回**

- A set containing the ObjectInstance objects for the selected MBeans.  If no MBean satisfies the query an empty list is returned.

**异常**

- **IOException** — A communication problem occurred when talking to the MBean server.
