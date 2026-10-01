---
id: "java-en-function-requiredmodelmbean-postregister"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.postRegister"
signature: "public void postRegister(Boolean registrationDone)"
title: "RequiredModelMBean.postRegister"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.postRegister

```java
public void postRegister(Boolean registrationDone)
```

Allows the MBean to perform any operations needed after having been
 registered in the MBean server or after the registration has failed.
 

 In order to ensure proper run-time semantics of RequireModelMBean,
 Any subclass of RequiredModelMBean overloading or overriding this
 method should call super.postRegister(registrationDone)
 in its own postRegister implementation.

**参数**

- **registrationDone** — Indicates whether or not the MBean has been successfully registered in the MBean server. The value false means that the registration phase has failed.
