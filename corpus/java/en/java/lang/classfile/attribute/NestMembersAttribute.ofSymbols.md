---
id: "java-en-function-nestmembersattribute-ofsymbols"
language: "java"
lang: "en"
category: "function"
name: "NestMembersAttribute.ofSymbols"
signature: "static NestMembersAttribute ofSymbols(List<ClassDesc> nestMembers)"
title: "NestMembersAttribute.ofSymbols"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/NestMembersAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NestMembersAttribute.ofSymbols

```java
static NestMembersAttribute ofSymbols(List<ClassDesc> nestMembers)
```

{@return a `NestMembers` attribute}

**参数**

- **nestMembers** — the member classes of the nest

**异常**

- **IllegalArgumentException** — if any of `nestMembers` is primitive, or if the number of member classes exceeds the limit of `#u2 u2`
