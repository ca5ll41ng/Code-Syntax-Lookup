---
id: "java-en-function-packagedesc-ofinternalname"
language: "java"
lang: "en"
category: "function"
name: "PackageDesc.ofInternalName"
signature: "static PackageDesc ofInternalName(String name)"
title: "PackageDesc.ofInternalName"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/PackageDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PackageDesc.ofInternalName

```java
static PackageDesc ofInternalName(String name)
```

Returns a `PackageDesc` for a package,
 given the name of the package in internal form,
 such as `"java/lang"`.

**参数**

- **name** — the fully qualified package name, in internal (slash-separated) form

**返回**

- a `PackageDesc` describing the desired package

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalArgumentException** — if the name string is not in the correct format

**参见**

- PackageDesc#of(String)
