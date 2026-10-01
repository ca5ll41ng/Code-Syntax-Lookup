---
id: "java-en-function-standardmbean-getmbeaninfo"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.getMBeanInfo"
signature: "public MBeanInfo getMBeanInfo()"
title: "StandardMBean.getMBeanInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.getMBeanInfo

```java
public MBeanInfo getMBeanInfo()
```

Get the `MBeanInfo` for this MBean.
 

 This method implements
 `getMBeanInfo()
   DynamicMBean.getMBeanInfo`.
 

 This method first calls `getCachedMBeanInfo` in order to
 retrieve the cached MBeanInfo for this MBean, if any. If the
 MBeanInfo returned by `getCachedMBeanInfo` is not null,
 then it is returned.

 Otherwise, this method builds a default MBeanInfo for this MBean,
 using the Management Interface specified for this MBean.
 

 While building the MBeanInfo, this method calls the customization
 hooks that make it possible for subclasses to supply their custom
 descriptions, parameter names, etc...

 Finally, it calls `cacheMBeanInfo(javax.management.MBeanInfo)
 cacheMBeanInfo` in order to cache the new MBeanInfo.

**返回**

- The cached MBeanInfo for that MBean, if not null, or a newly built MBeanInfo if none was cached.
