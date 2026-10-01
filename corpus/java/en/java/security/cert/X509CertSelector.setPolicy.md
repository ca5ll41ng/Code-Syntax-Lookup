---
id: "java-en-function-x509certselector-setpolicy"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setPolicy"
signature: "public void setPolicy(Set<String> certPolicySet) throws IOException"
title: "X509CertSelector.setPolicy"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setPolicy

```java
public void setPolicy(Set<String> certPolicySet) throws IOException
```

Sets the policy constraint. The `X509Certificate` must
 include at least one of the specified policies in its certificate
 policies extension. If `certPolicySet` is empty, then the
 `X509Certificate` must include at least some specified policy
 in its certificate policies extension. If `certPolicySet` is
 `null`, no policy check will be performed.
 

 Note that the `Set` is cloned to protect against
 subsequent modifications.

**参数**

- **certPolicySet** — a `Set` of certificate policy OIDs in string format (or `null`). Each OID is represented by a set of nonnegative integers separated by periods.

**异常**

- **IOException** — if a parsing error occurs on the OID such as the first component is not 0, 1 or 2 or the second component is greater than 39.

**参见**

- #getPolicy
