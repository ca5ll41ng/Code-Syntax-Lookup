---
id: "java-en-function-jmx-ismxbeaninterface"
language: "java"
lang: "en"
category: "function"
name: "JMX.isMXBeanInterface"
signature: "public static boolean isMXBeanInterface(Class<?> interfaceClass)"
title: "JMX.isMXBeanInterface"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/JMX.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMX.isMXBeanInterface

```java
public static boolean isMXBeanInterface(Class<?> interfaceClass)
```

Test whether an interface is an MXBean interface.
 An interface is an MXBean interface if it is public,
 annotated `64;MXBean` or `@MXBean(true)`
 or if it does not have an `@MXBean` annotation
 and its name ends with "`MXBean`".

**参数**

- **interfaceClass** — The candidate interface.

**返回**

- true if `interfaceClass` is a `javax.management.MXBean compliant MXBean interface`

**异常**

- **NullPointerException** — if `interfaceClass` is null.
