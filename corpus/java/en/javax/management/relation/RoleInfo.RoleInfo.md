---
id: "java-en-function-roleinfo-roleinfo"
language: "java"
lang: "en"
category: "function"
name: "RoleInfo.RoleInfo"
signature: "public RoleInfo(String roleName, String mbeanClassName, boolean read, boolean write, int min, int max, String descr) throws IllegalArgumentException, InvalidRoleInfoException, ClassNotFoundException, NotCompliantMBeanException"
title: "RoleInfo.RoleInfo"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleInfo.RoleInfo

```java
public RoleInfo(String roleName, String mbeanClassName, boolean read, boolean write, int min, int max, String descr) throws IllegalArgumentException, InvalidRoleInfoException, ClassNotFoundException, NotCompliantMBeanException
```

Constructor.

**参数**

- **roleName** — name of the role.
- **mbeanClassName** — name of the class of MBean(s) expected to be referenced in corresponding role.  If an MBean M is in this role, then the MBean server must return true for `isInstanceOf isInstanceOf`.
- **read** — flag to indicate if the corresponding role can be read
- **write** — flag to indicate if the corresponding role can be set
- **min** — minimum degree for role, i.e. minimum number of MBeans to provide in corresponding role Must be less than or equal to `max`. (ROLE_CARDINALITY_INFINITY for unlimited)
- **max** — maximum degree for role, i.e. maximum number of MBeans to provide in corresponding role Must be greater than or equal to `min` (ROLE_CARDINALITY_INFINITY for unlimited)
- **descr** — description of the role (can be null)

**异常**

- **IllegalArgumentException** — if null parameter
- **InvalidRoleInfoException** — if the minimum degree is greater than the maximum degree.
- **ClassNotFoundException** — As of JMX 1.2, this exception can no longer be thrown.  It is retained in the declaration of this class for compatibility with existing code.
- **NotCompliantMBeanException** — if the class mbeanClassName is not a MBean class.
