---
id: "java-en-function-mbeannotificationinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "MBeanNotificationInfo.equals"
signature: "public boolean equals(Object o)"
title: "MBeanNotificationInfo.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanNotificationInfo.equals

```java
public boolean equals(Object o)
```

Compare this MBeanNotificationInfo to another.

**参数**

- **o** — the object to compare to.

**返回**

- true if and only if `o` is an MBeanNotificationInfo such that its `getName`, `getDescription`, `getDescriptor`, and `getNotifTypes` values are equal (not necessarily identical) to those of this MBeanNotificationInfo.  Two notification type arrays are equal if their corresponding elements are equal.  They are not equal if they have the same elements but in a different order.
