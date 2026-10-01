---
id: "java-en-function-mbeanserverfactory-getclassloaderrepository"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerFactory.getClassLoaderRepository"
signature: "public static ClassLoaderRepository getClassLoaderRepository( MBeanServer server)"
title: "MBeanServerFactory.getClassLoaderRepository"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerFactory.getClassLoaderRepository

```java
public static ClassLoaderRepository getClassLoaderRepository( MBeanServer server)
```

Return the ClassLoaderRepository used by the given MBeanServer.
 This method is equivalent to `getClassLoaderRepository`.

**参数**

- **server** — The MBeanServer under examination. Since JMX 1.2, if server is null, the result is a `NullPointerException`.  This behavior differs from what was implemented in JMX 1.1 - where the possibility to use null was deprecated.

**返回**

- The Class Loader Repository used by the given MBeanServer.

**异常**

- **NullPointerException** — if server is null.
