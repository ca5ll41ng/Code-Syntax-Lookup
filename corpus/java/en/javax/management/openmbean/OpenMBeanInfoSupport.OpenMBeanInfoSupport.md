---
id: "java-en-function-openmbeaninfosupport-openmbeaninfosupport"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanInfoSupport.OpenMBeanInfoSupport"
signature: "public OpenMBeanInfoSupport(String className, String description, OpenMBeanAttributeInfo[] openAttributes, OpenMBeanConstructorInfo[] openConstructors, OpenMBeanOperationInfo[] openOperations, MBeanNotificationInfo[] notifications)"
title: "OpenMBeanInfoSupport.OpenMBeanInfoSupport"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfoSupport.OpenMBeanInfoSupport

```java
public OpenMBeanInfoSupport(String className, String description, OpenMBeanAttributeInfo[] openAttributes, OpenMBeanConstructorInfo[] openConstructors, OpenMBeanOperationInfo[] openOperations, MBeanNotificationInfo[] notifications)
```

Constructs an `OpenMBeanInfoSupport` instance, which
 describes a class of open MBeans with the specified `className`, `description`, `openAttributes`, `openConstructors` , `openOperations` and `notifications`.

 

The `openAttributes`, `openConstructors`,
 `openOperations` and `notifications`
 array parameters are internally copied, so that subsequent changes
 to the arrays referenced by these parameters have no effect on this
 instance.

**参数**

- **className** — The fully qualified Java class name of the open MBean described by this OpenMBeanInfoSupport instance.
- **description** — A human readable description of the open MBean described by this OpenMBeanInfoSupport instance.
- **openAttributes** — The list of exposed attributes of the described open MBean; Must be an array of instances of a subclass of `MBeanAttributeInfo`, typically `OpenMBeanAttributeInfoSupport`.
- **openConstructors** — The list of exposed public constructors of the described open MBean; Must be an array of instances of a subclass of `MBeanConstructorInfo`, typically `OpenMBeanConstructorInfoSupport`.
- **openOperations** — The list of exposed operations of the described open MBean.  Must be an array of instances of a subclass of `MBeanOperationInfo`, typically `OpenMBeanOperationInfoSupport`.
- **notifications** — The list of notifications emitted by the described open MBean.

**异常**

- **ArrayStoreException** — If `openAttributes`, `openConstructors` or `openOperations` is not an array of instances of a subclass of `MBeanAttributeInfo`, `MBeanConstructorInfo` or `MBeanOperationInfo` respectively.
