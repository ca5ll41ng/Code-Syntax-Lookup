---
id: "java-en-function-mbeanserver-getclassloaderfor"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.getClassLoaderFor"
signature: "public ClassLoader getClassLoaderFor(ObjectName mbeanName) throws InstanceNotFoundException"
title: "MBeanServer.getClassLoaderFor"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.getClassLoaderFor

```java
public ClassLoader getClassLoaderFor(ObjectName mbeanName) throws InstanceNotFoundException
```

Return the `java.lang.ClassLoader` that was used for
 loading the class of the named MBean.

**参数**

- **mbeanName** — The ObjectName of the MBean.

**返回**

- The ClassLoader used for that MBean.  If l is the MBean's actual ClassLoader, and r is the returned value, then either:    - r is identical to l; or  - the result of r`loadClass` is the same as l`loadClass(String) .loadClass` for any string s.    What this means is that the ClassLoader may be wrapped in another ClassLoader for security or other reasons.

**异常**

- **InstanceNotFoundException** — if the named MBean is not found.
