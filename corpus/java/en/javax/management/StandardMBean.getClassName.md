---
id: "java-en-function-standardmbean-getclassname"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.getClassName"
signature: "protected String getClassName(MBeanInfo info)"
title: "StandardMBean.getClassName"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.getClassName

```java
protected String getClassName(MBeanInfo info)
```

Customization hook:
 Get the className that will be used in the MBeanInfo returned by
 this MBean.
 

 Subclasses may redefine this method in order to supply their
 custom class name.  The default implementation returns
 `getClassName`.

**参数**

- **info** — The default MBeanInfo derived by reflection.

**返回**

- the class name for the new MBeanInfo.
