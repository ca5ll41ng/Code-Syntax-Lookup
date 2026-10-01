---
id: "java-en-function-requiredmodelmbean-prederegister"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.preDeregister"
signature: "public void preDeregister() throws java.lang.Exception"
title: "RequiredModelMBean.preDeregister"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.preDeregister

```java
public void preDeregister() throws java.lang.Exception
```

Allows the MBean to perform any operations it needs before
 being unregistered by the MBean server.
 

 In order to ensure proper run-time semantics of RequireModelMBean,
 Any subclass of RequiredModelMBean overloading or overriding this
 method should call super.preDeregister() in its own
 preDeregister implementation.

**异常**

- **java.lang.Exception** — This exception will be caught by the MBean server and re-thrown as an `javax.management.MBeanRegistrationException MBeanRegistrationException`.
