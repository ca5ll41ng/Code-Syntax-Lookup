---
id: "java-en-function-javax-management-query"
language: "java"
lang: "en"
category: "function"
name: "javax.management.Query"
title: "Query"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query

Constructs query object constraints.

 

The MBean Server can be queried for MBeans that meet a particular
 condition, using its `queryNames queryNames` or
 `queryMBeans queryMBeans` method.  The `QueryExp`
 parameter to the method can be any implementation of the interface
 `QueryExp`, but it is usually best to obtain the `QueryExp`
 value by calling the static methods in this class.  This is particularly
 true when querying a remote MBean Server: a custom implementation of the
 `QueryExp` interface might not be present in the remote MBean Server,
 but the methods in this class return only standard classes that are
 part of the JMX implementation.

 

As an example, suppose you wanted to find all MBeans where the `Enabled` attribute is `true` and the `Owner` attribute is `"Duke"`. Here is how you could construct the appropriate `QueryExp` by
 chaining together method calls:

 
```

 QueryExp query =
     Query.and(Query.eq(Query.attr("Enabled"), Query.value(true)),
               Query.eq(Query.attr("Owner"), Query.value("Duke")));
 
```

> *Since 1.5*
