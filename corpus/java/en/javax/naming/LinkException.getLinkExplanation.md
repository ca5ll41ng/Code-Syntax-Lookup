---
id: "java-en-function-linkexception-getlinkexplanation"
language: "java"
lang: "en"
category: "function"
name: "LinkException.getLinkExplanation"
signature: "public String getLinkExplanation()"
title: "LinkException.getLinkExplanation"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException.getLinkExplanation

```java
public String getLinkExplanation()
```

Retrieves the explanation associated with the problem encountered
 when resolving a link.

**返回**

- The possibly null detail string explaining more about the problem with resolving a link. If null, it means there is no link detail message for this exception.

**参见**

- #setLinkExplanation
