---
id: "java-en-function-query-isinstanceof"
language: "java"
lang: "en"
category: "function"
name: "Query.isInstanceOf"
signature: "public static QueryExp isInstanceOf(StringValueExp classNameValue)"
title: "Query.isInstanceOf"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.isInstanceOf

```java
public static QueryExp isInstanceOf(StringValueExp classNameValue)
```

Returns a query expression that represents an inheritance constraint
 on an MBean class.
 

Example: to find MBeans that are instances of
 `NotificationBroadcaster`, use
 `Query.isInstanceOf(Query.value(NotificationBroadcaster.class.getName()))`.
 
 

Evaluating this expression for a given
 objectName includes performing `isInstanceOf MBeanServer.isInstanceOf(objectName,`.

**参数**

- **classNameValue** — The `StringValueExp` returning the name of the class of which selected MBeans should be instances.

**返回**

- a query expression that represents an inheritance constraint on an MBean class.  The returned object will be serialized as an instance of the non-public class  javax.management.InstanceOfQueryExp.

> *Since 1.6*
