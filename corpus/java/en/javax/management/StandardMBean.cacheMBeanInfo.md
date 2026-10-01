---
id: "java-en-function-standardmbean-cachembeaninfo"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.cacheMBeanInfo"
signature: "protected void cacheMBeanInfo(MBeanInfo info)"
title: "StandardMBean.cacheMBeanInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.cacheMBeanInfo

```java
protected void cacheMBeanInfo(MBeanInfo info)
```

Customization hook:
 cache the MBeanInfo built for this object.

 

Subclasses may redefine this method in order to implement
 their own caching policy.  The default implementation stores
 info in this instance.  A subclass can define
 other policies, such as not saving info (so it is
 reconstructed every time `getMBeanInfo` is called) or
 sharing a unique `MBeanInfo` object when several
 StandardMBean instances have equal `MBeanInfo` values.

**参数**

- **info** — the new MBeanInfo to cache.  Any previously cached value is discarded.  This parameter may be null, in which case there is no new cached value.
