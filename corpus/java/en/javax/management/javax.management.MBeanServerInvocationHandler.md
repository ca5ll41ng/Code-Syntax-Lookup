---
id: "java-en-function-javax-management-mbeanserverinvocationhandler"
language: "java"
lang: "en"
category: "function"
name: "javax.management.MBeanServerInvocationHandler"
title: "MBeanServerInvocationHandler"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerInvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerInvocationHandler

`InvocationHandler` that forwards methods in an MBean's
 management interface through the MBean server to the MBean.

 

Given an `MBeanServerConnection`, the `ObjectName`
 of an MBean within that MBean server, and a Java interface
 Intf that describes the management interface of the
 MBean using the patterns for a Standard MBean or an MXBean, this
 class can be used to construct a proxy for the MBean.  The proxy
 implements the interface Intf such that all of its
 methods are forwarded through the MBean server to the MBean.

 

If the `InvocationHandler` is for an MXBean, then the parameters of
 a method are converted from the type declared in the MXBean
 interface into the corresponding mapped type, and the return value
 is converted from the mapped type into the declared type.  For
 example, with the method

 `public List reverse(List list);`

 and given that the mapped type for `List` is `String[]`, a call to `proxy.reverse(someList)` will convert
 `someList` from a `List` to a `String[]`,
 call the MBean operation `reverse`, then convert the returned
 `String[]` into a `List`.

 

The method Object.toString(), Object.hashCode(), or
 Object.equals(Object), when invoked on a proxy using this
 invocation handler, is forwarded to the MBean server as a method on
 the proxied MBean only if it appears in one of the proxy's
 interfaces.  For a proxy created with `newMBeanProxy(MBeanServerConnection, ObjectName, Class)
 JMX.newMBeanProxy` or `newMXBeanProxy(MBeanServerConnection, ObjectName, Class)
 JMX.newMXBeanProxy`, this means that the method must appear in the
 Standard MBean or MXBean interface.  Otherwise these methods have
 the following behavior:
 
 
- toString() returns a string representation of the proxy
 
- hashCode() returns a hash code for the proxy such
 that two equal proxies have the same hash code
 
- equals(Object)
 returns true if and only if the Object argument is of the same
 proxy class as this proxy, with an MBeanServerInvocationHandler
 that has the same MBeanServerConnection and ObjectName; if one
 of the `MBeanServerInvocationHandler`s was constructed with
 a `Class` argument then the other must have been constructed
 with the same `Class` for `equals` to return true.

> *Since 1.5*
