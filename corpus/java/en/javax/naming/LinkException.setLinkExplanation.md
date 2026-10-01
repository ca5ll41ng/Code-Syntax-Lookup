---
id: "java-en-function-linkexception-setlinkexplanation"
language: "java"
lang: "en"
category: "function"
name: "LinkException.setLinkExplanation"
signature: "public void setLinkExplanation(String msg)"
title: "LinkException.setLinkExplanation"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException.setLinkExplanation

```java
public void setLinkExplanation(String msg)
```

Sets the explanation associated with the problem encountered
 when resolving a link.

**参数**

- **msg** — The possibly null detail string explaining more about the problem with resolving a link. If null, it means no detail will be recorded.

**参见**

- #getLinkExplanation
