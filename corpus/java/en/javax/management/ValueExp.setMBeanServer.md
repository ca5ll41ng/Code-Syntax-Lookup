---
id: "java-en-function-valueexp-setmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "ValueExp.setMBeanServer"
signature: "public void setMBeanServer(MBeanServer s)"
title: "ValueExp.setMBeanServer"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueExp.setMBeanServer

```java
public void setMBeanServer(MBeanServer s)
```

Sets the MBean server on which the query is to be performed.

**参数**

- **s** — The MBean server on which the query is to be performed.

> **⚠ Deprecated** — This method is not needed because a ValueExp can access the MBean server in which it is being evaluated by using `getMBeanServer`.
