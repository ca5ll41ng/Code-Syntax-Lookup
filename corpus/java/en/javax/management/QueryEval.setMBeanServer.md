---
id: "java-en-function-queryeval-setmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "QueryEval.setMBeanServer"
signature: "public void setMBeanServer(MBeanServer s)"
title: "QueryEval.setMBeanServer"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/QueryEval.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QueryEval.setMBeanServer

```java
public void setMBeanServer(MBeanServer s)
```

Sets the MBean server on which the query is to be performed.
 The setting is valid for the thread performing the set.
 It is copied to any threads created by that thread at the moment
 of their creation.

 

For historical reasons, this method is not static, but its
 behavior does not depend on the instance on which it is
 called.

**参数**

- **s** — The MBean server on which the query is to be performed.

**参见**

- #getMBeanServer
