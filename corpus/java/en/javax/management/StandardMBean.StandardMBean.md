---
id: "java-en-function-standardmbean-standardmbean"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.StandardMBean"
signature: "public <T> StandardMBean(T implementation, Class<T> mbeanInterface) throws NotCompliantMBeanException"
title: "StandardMBean.StandardMBean"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.StandardMBean

```java
public <T> StandardMBean(T implementation, Class<T> mbeanInterface) throws NotCompliantMBeanException
```

Make a DynamicMBean out of the object
 implementation, using the specified
 mbeanInterface class.

**参数**

- **implementation** — The implementation of this MBean.
- **mbeanInterface** — The Management Interface exported by this MBean's implementation. If null, then this object will use standard JMX design pattern to determine the management interface associated with the given implementation.
- **Allows** — the compiler to check that `implementation` does indeed implement the class described by `mbeanInterface`.  The compiler can only check this if `mbeanInterface` is a class literal such as `MyMBean.class`.

**异常**

- **IllegalArgumentException** — if the given implementation is null.
- **NotCompliantMBeanException** — if the mbeanInterface does not follow JMX design patterns for Management Interfaces, or if the given implementation does not implement the specified interface.
