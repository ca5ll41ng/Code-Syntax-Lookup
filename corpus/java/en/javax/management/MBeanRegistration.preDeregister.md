---
id: "java-en-function-mbeanregistration-prederegister"
language: "java"
lang: "en"
category: "function"
name: "MBeanRegistration.preDeregister"
signature: "public void preDeregister() throws java.lang.Exception"
title: "MBeanRegistration.preDeregister"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanRegistration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanRegistration.preDeregister

```java
public void preDeregister() throws java.lang.Exception
```

Allows the MBean to perform any operations it needs before
 being unregistered by the MBean server.

**异常**

- **java.lang.Exception** — This exception will be caught by the MBean server and re-thrown as an `MBeanRegistrationException`.
