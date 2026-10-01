---
id: "java-en-function-javax-management-standardmbean"
language: "java"
lang: "en"
category: "function"
name: "javax.management.StandardMBean"
title: "StandardMBean"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean

An MBean whose management interface is determined by reflection
 on a Java interface.

 

This class brings more flexibility to the notion of Management
 Interface in the use of Standard MBeans.  Straightforward use of
 the patterns for Standard MBeans described in the JMX Specification
 means that there is a fixed relationship between the implementation
 class of an MBean and its management interface (i.e., if the
 implementation class is Thing, the management interface must be
 ThingMBean).  This class makes it possible to keep the convenience
 of specifying the management interface with a Java interface,
 without requiring that there be any naming relationship between the
 implementation and interface classes.

 

By making a DynamicMBean out of an MBean, this class makes
 it possible to select any interface implemented by the MBean as its
 management interface, provided that it complies with JMX patterns
 (i.e., attributes defined by getter/setter etc...).

 

 This class also provides hooks that make it possible to supply
 custom descriptions and names for the `MBeanInfo` returned by
 the DynamicMBean interface.

 

Using this class, an MBean can be created with any
 implementation class name Impl and with a management
 interface defined (as for current Standard MBeans) by any interface
 Intf, in one of two general ways:

 

 
- Using the public constructor
     `StandardMBean(java.lang.Object, java.lang.Class, boolean)
     StandardMBean`:
     
```

     MBeanServer mbs;
     ...
     Impl impl = new Impl(...);
     StandardMBean mbean = new StandardMBean(impl, Intf.class, false);
     mbs.registerMBean(mbean, objectName);
     
```

 
- Subclassing StandardMBean:
     
```

     public class Impl extends StandardMBean implements Intf {
        public Impl() {
          super(Intf.class, false);
       }
       // implement methods of Intf
     }

     [...]

     MBeanServer mbs;
     ....
     Impl impl = new Impl();
     mbs.registerMBean(impl, objectName);
     
```

 

 

In either case, the class Impl must implement the
 interface Intf.

 

Standard MBeans based on the naming relationship between
 implementation and interface classes are of course still
 available.

 

This class may also be used to construct MXBeans.  The usage
 is exactly the same as for Standard MBeans except that in the
 examples above, the `false` parameter to the constructor or
 `super(...)` invocation is instead `true`.

> *Since 1.5*
