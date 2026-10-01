---
id: "java-en-function-jmx-newmxbeanproxy"
language: "java"
lang: "en"
category: "function"
name: "JMX.newMXBeanProxy"
signature: "public static <T> T newMXBeanProxy(MBeanServerConnection connection, ObjectName objectName, Class<T> interfaceClass)"
title: "JMX.newMXBeanProxy"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/JMX.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMX.newMXBeanProxy

```java
public static <T> T newMXBeanProxy(MBeanServerConnection connection, ObjectName objectName, Class<T> interfaceClass)
```

Make a proxy for an MXBean in a local or remote MBean Server.

 

If you have an MBean Server `mbs` containing an
 MXBean with `ObjectName` `name`, and if the
 MXBean's management interface is described by the Java
 interface `MyMXBean`, you can construct a proxy for
 the MXBean like this:

 
```

 MyMXBean proxy = JMX.newMXBeanProxy(mbs, name, MyMXBean.class);
 
```

 

Suppose, for example, `MyMXBean` looks like this:

 
```

 public interface MyMXBean {
     public String getSimpleAttribute();
     public void setSimpleAttribute(String value);
     public `java.lang.management.MemoryUsage` getMappedAttribute();
     public void setMappedAttribute(MemoryUsage memoryUsage);
     public MemoryUsage someOperation(String param1, MemoryUsage param2);
 }
 
```

 

Then:

 

 
- 

`proxy.getSimpleAttribute()` will result in a
 call to `mbs.``getAttribute
 getAttribute``(name, "SimpleAttribute")`.

 
- 

`proxy.setSimpleAttribute("whatever")` will result
 in a call to `mbs.``setAttribute setAttribute`(name,
 new Attribute("SimpleAttribute", "whatever")).

     

Because `String` is a simple type, in the
     sense of `javax.management.openmbean.SimpleType`, it
     is not changed in the context of an MXBean.  The MXBean
     proxy behaves the same as a Standard MBean proxy (see
     `newMBeanProxy(MBeanServerConnection, ObjectName,
     Class) newMBeanProxy`) for the attribute `SimpleAttribute`.

 
- 

`proxy.getMappedAttribute()` will result in a call
 to `mbs.getAttribute("MappedAttribute")`.  The MXBean
 mapping rules mean that the actual type of the attribute `MappedAttribute` will be `javax.management.openmbean.CompositeData CompositeData` and
 that is what the `mbs.getAttribute` call will return.
 The proxy will then convert the `CompositeData` back into
 the expected type `MemoryUsage` using the MXBean mapping
 rules.

 
- 

Similarly, `proxy.setMappedAttribute(memoryUsage)`
 will convert the `MemoryUsage` argument into a `CompositeData` before calling `mbs.setAttribute`.

 
- 

`proxy.someOperation("whatever", memoryUsage)`
 will convert the `MemoryUsage` argument into a `CompositeData` and call `mbs.invoke`.  The value returned
 by `mbs.invoke` will be also be a `CompositeData`,
 and the proxy will convert this into the expected type `MemoryUsage` using the MXBean mapping rules.

 

 

The object returned by this method is a
 `Proxy` whose `InvocationHandler` is an
 `MBeanServerInvocationHandler`.

 

This method is equivalent to `newMXBeanProxy(MBeanServerConnection, ObjectName, Class,
 boolean) newMXBeanProxy(connection, objectName, interfaceClass,
 false)`.

**参数**

- **connection** — the MBean server to forward to.
- **objectName** — the name of the MBean within `connection` to forward to.
- **interfaceClass** — the MXBean interface, which will also be implemented by the returned proxy.
- **allows** — the compiler to know that if the `interfaceClass` parameter is `MyMXBean.class`, for example, then the return type is `MyMXBean`.

**返回**

- the new proxy instance.

**异常**

- **IllegalArgumentException** — if `interfaceClass` is not a `javax.management.MXBean compliant MXBean interface`
