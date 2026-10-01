---
id: "java-en-function-queryeval-getmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "QueryEval.getMBeanServer"
signature: "public static MBeanServer getMBeanServer()"
title: "QueryEval.getMBeanServer"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/QueryEval.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QueryEval.getMBeanServer

```java
public static MBeanServer getMBeanServer()
```

Return the MBean server that was most recently given to the
 `setMBeanServer setMBeanServer` method by this thread.
 If this thread never called that method, the result is the
 value its parent thread would have obtained from
 getMBeanServer at the moment of the creation of
 this thread, or null if there is no parent thread.

**返回**

- the MBean server.

**参见**

- #setMBeanServer
