---
id: "java-en-function-standardmbean-setimplementation"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.setImplementation"
signature: "public void setImplementation(Object implementation) throws NotCompliantMBeanException"
title: "StandardMBean.setImplementation"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.setImplementation

```java
public void setImplementation(Object implementation) throws NotCompliantMBeanException
```

Replace the implementation object wrapped in this object.

**参数**

- **implementation** — The new implementation of this Standard MBean (or MXBean). The implementation object must implement the Standard MBean (or MXBean) interface that was supplied when this StandardMBean was constructed.

**异常**

- **IllegalArgumentException** — if the given implementation is null.
- **NotCompliantMBeanException** — if the given implementation does not implement the Standard MBean (or MXBean) interface that was supplied at construction.

**参见**

- #getImplementation
