---
id: "java-en-function-messageprop-setsupplementarystates"
language: "java"
lang: "en"
category: "function"
name: "MessageProp.setSupplementaryStates"
signature: "public void setSupplementaryStates(boolean duplicate, boolean old, boolean unseq, boolean gap, int minorStatus, String minorString)"
title: "MessageProp.setSupplementaryStates"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/MessageProp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageProp.setSupplementaryStates

```java
public void setSupplementaryStates(boolean duplicate, boolean old, boolean unseq, boolean gap, int minorStatus, String minorString)
```

This method sets the state for the supplementary information flags
 and the minor status in MessageProp.  It is not used by the
 application but by the GSS implementation to return this information
 to the caller of a per-message context method.

**参数**

- **duplicate** — true if the token was a duplicate of an earlier token, false otherwise
- **old** — true if the token's validity period has expired, false otherwise
- **unseq** — true if a later token has already been processed, false otherwise
- **gap** — true if one or more predecessor tokens have not yet been successfully processed, false otherwise
- **minorStatus** — the int minor status code for the per-message operation
- **minorString** — the textual representation of the minorStatus value
