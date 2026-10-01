---
id: "java-en-function-subjectdomaincombiner-combine"
language: "java"
lang: "en"
category: "function"
name: "SubjectDomainCombiner.combine"
signature: "public ProtectionDomain[] combine(ProtectionDomain[] currentDomains, ProtectionDomain[] assignedDomains)"
title: "SubjectDomainCombiner.combine"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/SubjectDomainCombiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubjectDomainCombiner.combine

```java
public ProtectionDomain[] combine(ProtectionDomain[] currentDomains, ProtectionDomain[] assignedDomains)
```

Update the relevant ProtectionDomains with the Principals
 from the `Subject` associated with this
 `SubjectDomainCombiner`.

 

 A new `ProtectionDomain` instance is created
 for each non-static `ProtectionDomain` (
 (staticPermissionsOnly() == false)
 in the `currentDomains` array.  Each new `ProtectionDomain`
 instance is created using the `CodeSource`,
 `Permission`s and `ClassLoader`
 from the corresponding `ProtectionDomain` in
 `currentDomains`, as well as with the Principals from
 the `Subject` associated with this
 `SubjectDomainCombiner`. Static ProtectionDomains are
 combined as-is and no new instance is created.

 

 All of the ProtectionDomains (static and newly instantiated) are
 combined into a new array.  The ProtectionDomains from the
 `assignedDomains` array are appended to this new array,
 and the result is returned.

 

 Note that optimizations such as the removal of duplicate
 ProtectionDomains may have occurred.
 In addition, caching of ProtectionDomains may be permitted.

**参数**

- **currentDomains** — the ProtectionDomains associated with the current execution Thread. The ProtectionDomains are listed in order of execution, with the most recently executing `ProtectionDomain` residing at the beginning of the array. This parameter may be `null` if the current execution Thread has no associated ProtectionDomains.
- **assignedDomains** — the inherited ProtectionDomains. This parameter may be `null` if there were no inherited ProtectionDomains.

**返回**

- a new array consisting of the updated ProtectionDomains, or `null`.
