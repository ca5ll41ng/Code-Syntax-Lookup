---
id: "java-en-function-standardmbean-getimpact"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.getImpact"
signature: "protected int getImpact(MBeanOperationInfo info)"
title: "StandardMBean.getImpact"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.getImpact

```java
protected int getImpact(MBeanOperationInfo info)
```

Customization hook:
 Get the impact flag of the operation that will be used in
 the MBeanOperationInfo returned by this MBean.
 

 Subclasses may redefine this method in order to supply their
 custom impact flag.  The default implementation returns
 `getImpact`.

**参数**

- **info** — The default MBeanOperationInfo derived by reflection.

**返回**

- the impact flag for the given MBeanOperationInfo.
