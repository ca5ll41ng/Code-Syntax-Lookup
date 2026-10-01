---
id: "java-en-function-standardmbean-getconstructors"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.getConstructors"
signature: "protected MBeanConstructorInfo[] getConstructors(MBeanConstructorInfo[] ctors, Object impl)"
title: "StandardMBean.getConstructors"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.getConstructors

```java
protected MBeanConstructorInfo[] getConstructors(MBeanConstructorInfo[] ctors, Object impl)
```

Customization hook:
 Get the MBeanConstructorInfo[] that will be used in the MBeanInfo
 returned by this MBean.
 

 By default, this method returns null if the wrapped
 implementation is not this. Indeed, if the wrapped
 implementation is not this object itself, it will not be possible
 to recreate a wrapped implementation by calling the implementation
 constructors through MBeanServer.createMBean(...).

 Otherwise, if the wrapped implementation is this,
 ctors is returned.
 

 Subclasses may redefine this method in order to modify this
 behavior, if needed.

**参数**

- **ctors** — The default MBeanConstructorInfo[] derived by reflection.
- **impl** — The wrapped implementation. If null is passed, the wrapped implementation is ignored and ctors is returned.

**返回**

- the MBeanConstructorInfo[] for the new MBeanInfo.
