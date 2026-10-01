---
id: "java-en-function-standardmbean-getcachedmbeaninfo"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.getCachedMBeanInfo"
signature: "protected MBeanInfo getCachedMBeanInfo()"
title: "StandardMBean.getCachedMBeanInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.getCachedMBeanInfo

```java
protected MBeanInfo getCachedMBeanInfo()
```

Customization hook:
 Return the MBeanInfo cached for this object.

 

Subclasses may redefine this method in order to implement their
 own caching policy.  The default implementation stores one
 `MBeanInfo` object per instance.

**返回**

- The cached MBeanInfo, or null if no MBeanInfo is cached.

**参见**

- #cacheMBeanInfo(MBeanInfo)
