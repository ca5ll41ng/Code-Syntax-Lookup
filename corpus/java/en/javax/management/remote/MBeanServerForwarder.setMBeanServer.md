---
id: "java-en-function-mbeanserverforwarder-setmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerForwarder.setMBeanServer"
signature: "public void setMBeanServer(MBeanServer mbs)"
title: "MBeanServerForwarder.setMBeanServer"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/MBeanServerForwarder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerForwarder.setMBeanServer

```java
public void setMBeanServer(MBeanServer mbs)
```

Sets the MBeanServer object to which requests will be forwarded
 after treatment by this object.

**参数**

- **mbs** — the MBeanServer object to which requests will be forwarded.

**异常**

- **IllegalArgumentException** — if this object is already forwarding to an MBeanServer object or if mbs is null or if mbs is identical to this object.

**参见**

- #getMBeanServer
