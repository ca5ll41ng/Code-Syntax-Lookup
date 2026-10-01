---
id: "java-en-function-rulebasedcollator-rulebasedcollator"
language: "java"
lang: "en"
category: "function"
name: "RuleBasedCollator.RuleBasedCollator"
signature: "public RuleBasedCollator(String rules) throws ParseException"
title: "RuleBasedCollator.RuleBasedCollator"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RuleBasedCollator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuleBasedCollator.RuleBasedCollator

```java
public RuleBasedCollator(String rules) throws ParseException
```

RuleBasedCollator constructor.  This takes the table rules and builds
 a collation table out of them.  Please see RuleBasedCollator class
 description for more details on the collation rule syntax.

**参数**

- **rules** — the collation rules to build the collation table from.

**异常**

- **ParseException** — A format exception will be thrown if the build process of the rules fails. For example, build rule "a &lt; ? &lt; d" will cause the constructor to throw the ParseException because the '?' is not quoted.

**参见**

- java.util.Locale
