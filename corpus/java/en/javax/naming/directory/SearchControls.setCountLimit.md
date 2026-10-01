---
id: "java-en-function-searchcontrols-setcountlimit"
language: "java"
lang: "en"
category: "function"
name: "SearchControls.setCountLimit"
signature: "public void setCountLimit(long limit)"
title: "SearchControls.setCountLimit"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchControls.setCountLimit

```java
public void setCountLimit(long limit)
```

Sets the maximum number of entries to be returned
 as a result of the search.

 0 indicates no limit:  all entries will be returned.

**参数**

- **limit** — The maximum number of entries that will be returned.

**参见**

- #getCountLimit
