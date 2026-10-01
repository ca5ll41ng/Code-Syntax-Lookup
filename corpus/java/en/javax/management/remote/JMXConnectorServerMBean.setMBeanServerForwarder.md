---
id: "java-en-function-jmxconnectorservermbean-setmbeanserverforwarder"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerMBean.setMBeanServerForwarder"
signature: "public void setMBeanServerForwarder(MBeanServerForwarder mbsf)"
title: "JMXConnectorServerMBean.setMBeanServerForwarder"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean.setMBeanServerForwarder

```java
public void setMBeanServerForwarder(MBeanServerForwarder mbsf)
```

Inserts an object that intercepts requests for the MBean server
 that arrive through this connector server.  This object will be
 supplied as the MBeanServer for any new connection
 created by this connector server.  Existing connections are
 unaffected.

 

This method can be called more than once with different
 `MBeanServerForwarder` objects.  The result is a chain
 of forwarders.  The last forwarder added is the first in the chain.
 In more detail:

 
 
- 

If this connector server is already associated with an
 MBeanServer object, then that object is given to
 `setMBeanServer
 mbsf.setMBeanServer`.  If doing so produces an exception, this
 method throws the same exception without any other effect.

 
- 

If this connector is not already associated with an
 MBeanServer object, or if the
 mbsf.setMBeanServer call just mentioned succeeds,
 then mbsf becomes this connector server's
 MBeanServer.

**参数**

- **mbsf** — the new MBeanServerForwarder.

**异常**

- **IllegalArgumentException** — if the call to `setMBeanServer mbsf.setMBeanServer` fails with IllegalArgumentException.  This includes the case where mbsf is null.
