---
id: "java-en-function-standardmbean-getparametername"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.getParameterName"
signature: "protected String getParameterName(MBeanConstructorInfo ctor, MBeanParameterInfo param, int sequence)"
title: "StandardMBean.getParameterName"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.getParameterName

```java
protected String getParameterName(MBeanConstructorInfo ctor, MBeanParameterInfo param, int sequence)
```

Customization hook:
 Get the name that will be used for the sequence
 MBeanParameterInfo of the MBeanConstructorInfo returned by this MBean.
 

 Subclasses may redefine this method in order to supply their
 custom parameter name.  The default implementation returns
 `getName`.

**参数**

- **ctor** — The default MBeanConstructorInfo derived by reflection.
- **param** — The default MBeanParameterInfo derived by reflection.
- **sequence** — The sequence number of the parameter considered ("0" for the first parameter, "1" for the second parameter, etc...).

**返回**

- the name for the given MBeanParameterInfo.
