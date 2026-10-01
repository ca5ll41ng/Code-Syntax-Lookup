---
id: "java-en-function-standardmbean-getdescription"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.getDescription"
signature: "protected String getDescription(MBeanInfo info)"
title: "StandardMBean.getDescription"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.getDescription

```java
protected String getDescription(MBeanInfo info)
```

Customization hook:
 Get the description that will be used in the MBeanInfo returned by
 this MBean.
 

 Subclasses may redefine this method in order to supply their
 custom MBean description.  The default implementation returns
 `getDescription`.

**参数**

- **info** — The default MBeanInfo derived by reflection.

**返回**

- the description for the new MBeanInfo.
