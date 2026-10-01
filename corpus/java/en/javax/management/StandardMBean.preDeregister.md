---
id: "java-en-function-standardmbean-prederegister"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.preDeregister"
signature: "public void preDeregister() throws Exception"
title: "StandardMBean.preDeregister"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.preDeregister

```java
public void preDeregister() throws Exception
```

Allows the MBean to perform any operations it needs before
 being unregistered by the MBean server.

 

The default implementation of this method does nothing.

 

It is good practice for a subclass that overrides this method
 to call the overridden method via `super.preDeregister(...)`.

**异常**

- **Exception** — no checked exceptions are throw by this method but `Exception` is declared so that subclasses can override this method and throw their own exceptions.

> *Since 1.6*
