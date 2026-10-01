---
id: "java-en-function-mbeanserver-getclassloader"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.getClassLoader"
signature: "public ClassLoader getClassLoader(ObjectName loaderName) throws InstanceNotFoundException"
title: "MBeanServer.getClassLoader"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.getClassLoader

```java
public ClassLoader getClassLoader(ObjectName loaderName) throws InstanceNotFoundException
```

Return the named `java.lang.ClassLoader`.

**参数**

- **loaderName** — The ObjectName of the ClassLoader.  May be null, in which case the MBean server's own ClassLoader is returned.

**返回**

- The named ClassLoader.  If l is the actual ClassLoader with that name, and r is the returned value, then either:    - r is identical to l; or  - the result of r`loadClass` is the same as l`loadClass(String) .loadClass` for any string s.    What this means is that the ClassLoader may be wrapped in another ClassLoader for security or other reasons.

**异常**

- **InstanceNotFoundException** — if the named ClassLoader is not found.
