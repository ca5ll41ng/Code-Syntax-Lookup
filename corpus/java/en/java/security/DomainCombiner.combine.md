---
id: "java-en-function-domaincombiner-combine"
language: "java"
lang: "en"
category: "function"
name: "DomainCombiner.combine"
signature: "ProtectionDomain[] combine(ProtectionDomain[] currentDomains, ProtectionDomain[] assignedDomains)"
title: "DomainCombiner.combine"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DomainCombiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DomainCombiner.combine

```java
ProtectionDomain[] combine(ProtectionDomain[] currentDomains, ProtectionDomain[] assignedDomains)
```

Modify or update the provided ProtectionDomains.
 ProtectionDomains may be added to or removed from the given
 ProtectionDomains.  The ProtectionDomains may be re-ordered.
 Individual ProtectionDomains may be modified (with a new
 set of Permissions, for example).

**参数**

- **currentDomains** — the ProtectionDomains associated with the current execution thread. The ProtectionDomains are listed in order of execution, with the most recently executing `ProtectionDomain` residing at the beginning of the array. This parameter may be `null` if the current execution thread has no associated ProtectionDomains.
- **assignedDomains** — an array of inherited ProtectionDomains. This parameter may be `null` if there are no inherited ProtectionDomains.

**返回**

- a new array consisting of the updated ProtectionDomains, or `null`.
