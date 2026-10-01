---
id: "java-en-function-jmx-newmbeanproxy"
language: "java"
lang: "en"
category: "function"
name: "JMX.newMBeanProxy"
signature: "public static <T> T newMBeanProxy(MBeanServerConnection connection, ObjectName objectName, Class<T> interfaceClass)"
title: "JMX.newMBeanProxy"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/JMX.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMX.newMBeanProxy

```java
public static <T> T newMBeanProxy(MBeanServerConnection connection, ObjectName objectName, Class<T> interfaceClass)
```

Make a proxy for a Standard MBean in a local or remote
 MBean Server.

 

If you have an MBean Server `mbs` containing an MBean
 with `ObjectName` `name`, and if the MBean's
 management interface is described by the Java interface
 `MyMBean`, you can construct a proxy for the MBean like
 this:

 
```

 MyMBean proxy = JMX.newMBeanProxy(mbs, name, MyMBean.class);
 
```

 

Suppose, for example, `MyMBean` looks like this:

 
```

 public interface MyMBean {
     public String getSomeAttribute();
     public void setSomeAttribute(String value);
     public void someOperation(String param1, int param2);
 }
 
```

 

Then you can execute:

 

 
- `proxy.getSomeAttribute()` which will result in a
 call to `mbs.``getAttribute
 getAttribute``(name, "SomeAttribute")`.

 
- `proxy.setSomeAttribute("whatever")` which will result
 in a call to `mbs.``setAttribute
 setAttribute``(name, new Attribute("SomeAttribute", "whatever"))`.

 
- `proxy.someOperation("param1", 2)` which will be
 translated into a call to `mbs.``invoke invoke``(name, "someOperation", )`.

 

 

The object returned by this method is a
 `Proxy` whose `InvocationHandler` is an
 `MBeanServerInvocationHandler`.

 

This method is equivalent to `newMBeanProxy(MBeanServerConnection, ObjectName, Class,
 boolean) newMBeanProxy(connection, objectName, interfaceClass,
 false)`.

**参数**

- **connection** — the MBean server to forward to.
- **objectName** — the name of the MBean within `connection` to forward to.
- **interfaceClass** — the management interface that the MBean exports, which will also be implemented by the returned proxy.
- **allows** — the compiler to know that if the `interfaceClass` parameter is `MyMBean.class`, for example, then the return type is `MyMBean`.

**返回**

- the new proxy instance.

**异常**

- **IllegalArgumentException** — if `interfaceClass` is not a compliant MBean interface
