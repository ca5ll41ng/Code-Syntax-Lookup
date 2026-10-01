---
id: "java-en-function-dynamicmbean-invoke"
language: "java"
lang: "en"
category: "function"
name: "DynamicMBean.invoke"
signature: "public Object invoke(String actionName, Object params[], String signature[]) throws MBeanException, ReflectionException"
title: "DynamicMBean.invoke"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/DynamicMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicMBean.invoke

```java
public Object invoke(String actionName, Object params[], String signature[]) throws MBeanException, ReflectionException
```

Allows an action to be invoked on the Dynamic MBean.

**参数**

- **actionName** — The name of the action to be invoked.
- **params** — An array containing the parameters to be set when the action is invoked.
- **signature** — An array containing the signature of the action. The class objects will be loaded through the same class loader as the one used for loading the MBean on which the action is invoked.

**返回**

- The object returned by the action, which represents the result of invoking the action on the MBean specified.

**异常**

- **MBeanException** — Wraps a java.lang.Exception thrown by the MBean's invoked method.
- **ReflectionException** — Wraps a java.lang.Exception thrown while trying to invoke the method
