---
id: "java-en-function-builder-setregion"
language: "java"
lang: "en"
category: "function"
name: "Builder.setRegion"
signature: "public Builder setRegion(String region)"
title: "Builder.setRegion"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setRegion

```java
public Builder setRegion(String region)
```

Sets the region.  If region is null or the empty string, the region
 in this `Builder` is removed.  Otherwise,
 the region must be `#def_region well-formed` or an
 exception is thrown.

 

The typical region value is a two-letter ISO 3166 code or a
 three-digit UN M.49 area code.

 

The country value in the `Locale` obtained from a
 `Builder` is always normalized to upper case.

**参数**

- **region** — the region

**返回**

- This builder.

**异常**

- **IllformedLocaleException** — if `region` is ill-formed
