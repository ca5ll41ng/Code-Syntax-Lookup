---
id: "java-en-function-javax-management-queryexp"
language: "java"
lang: "en"
category: "function"
name: "javax.management.QueryExp"
title: "QueryExp"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/QueryExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QueryExp

Represents relational constraints similar to database query "where
 clauses". Instances of QueryExp are returned by the static methods of the
 `Query` class.

 

It is possible, but not
 recommended, to create custom queries by implementing this
 interface.  In that case, it is better to extend the `QueryEval` class than to implement the interface directly, so that
 the `setMBeanServer` method works correctly.

**参见**

- MBeanServer#queryNames MBeanServer.queryNames

> *Since 1.5*
