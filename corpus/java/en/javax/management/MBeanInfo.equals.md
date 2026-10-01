---
id: "java-en-function-mbeaninfo-equals"
language: "java"
lang: "en"
category: "function"
name: "MBeanInfo.equals"
signature: "public boolean equals(Object o)"
title: "MBeanInfo.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanInfo.equals

```java
public boolean equals(Object o)
```

Compare this MBeanInfo to another.  Two MBeanInfo objects
 are equal if and only if they return equal values for `getClassName`, for `getDescription`, and for
 `getDescriptor`, and the
 arrays returned by the two objects for `getAttributes`, `getOperations`, `getConstructors`, and `getNotifications` are
 pairwise equal.  Here "equal" means `equals`, not identity.

 

If two MBeanInfo objects return the same values in one of
 their arrays but in a different order then they are not equal.

**参数**

- **o** — the object to compare to.

**返回**

- true if and only if `o` is an MBeanInfo that is equal to this one according to the rules above.
