---
id: "java-en-function-threadgroup-setmaxpriority"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.setMaxPriority"
signature: "public final void setMaxPriority(int pri)"
title: "ThreadGroup.setMaxPriority"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.setMaxPriority

```java
public final void setMaxPriority(int pri)
```

Sets the maximum priority of the group. The maximum priority of the
 ThreadGroup for virtual
 threads is not changed by this method (the new priority is ignored).
 Threads in the thread group (or subgroups) that already have a higher
 priority are not affected by this method.
 

 If the `pri` argument is less than
 `MIN_PRIORITY` or greater than
 `MAX_PRIORITY`, the maximum priority of the group
 remains unchanged.
 

 Otherwise, the priority of this ThreadGroup object is set to the
 smaller of the specified `pri` and the maximum permitted
 priority of the parent of this thread group. (If this thread group
 is the system thread group, which has no parent, then its maximum
 priority is simply set to `pri`.) Then this method is
 called recursively, with `pri` as its argument, for
 every thread group that belongs to this thread group.

**参数**

- **pri** — the new priority of the thread group.

**参见**

- #getMaxPriority
