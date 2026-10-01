---
id: "java-en-function-mbeanserverbuilder-newmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerBuilder.newMBeanServer"
signature: "public MBeanServer newMBeanServer(String defaultDomain, MBeanServer outer, MBeanServerDelegate delegate)"
title: "MBeanServerBuilder.newMBeanServer"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerBuilder.newMBeanServer

```java
public MBeanServer newMBeanServer(String defaultDomain, MBeanServer outer, MBeanServerDelegate delegate)
```

This method creates a new MBeanServer implementation object.
 When creating a new MBeanServer the
 `javax.management.MBeanServerFactory` first calls
 newMBeanServerDelegate() in order to obtain a new
 `javax.management.MBeanServerDelegate` for the new
 MBeanServer. Then it calls
 newMBeanServer(defaultDomain,outer,delegate)
 passing the delegate that should be used by the MBeanServer
 implementation.
 

Note that the passed delegate might not be directly the
 MBeanServerDelegate that was returned by this implementation. It could
 be, for instance, a new object wrapping the previously
 returned delegate.
 

The outer parameter is a pointer to the MBeanServer that
 should be passed to the `javax.management.MBeanRegistration`
 interface when registering MBeans inside the MBeanServer.
 If outer is null, then the MBeanServer
 implementation must use its own this reference when
 invoking the `javax.management.MBeanRegistration` interface.
 

This makes it possible for a MBeanServer implementation to wrap
 another MBeanServer implementation, in order to implement, e.g,
 security checks, or to prevent access to the actual MBeanServer
 implementation by returning a pointer to a wrapping object.

**参数**

- **defaultDomain** — Default domain of the new MBeanServer.
- **outer** — A pointer to the MBeanServer object that must be passed to the MBeans when invoking their `javax.management.MBeanRegistration` interface.
- **delegate** — A pointer to the MBeanServerDelegate associated with the new MBeanServer. The new MBeanServer must register this MBean in its MBean repository.

**返回**

- A new private implementation of an MBeanServer.
