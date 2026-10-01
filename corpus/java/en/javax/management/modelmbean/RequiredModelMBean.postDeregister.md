---
id: "java-en-function-requiredmodelmbean-postderegister"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.postDeregister"
signature: "public void postDeregister()"
title: "RequiredModelMBean.postDeregister"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.postDeregister

```java
public void postDeregister()
```

Allows the MBean to perform any operations needed after having been
 unregistered in the MBean server.
 

 In order to ensure proper run-time semantics of RequireModelMBean,
 Any subclass of RequiredModelMBean overloading or overriding this
 method should call super.postDeregister() in its own
 postDeregister implementation.
