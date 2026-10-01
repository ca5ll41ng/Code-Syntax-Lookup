---
id: "java-en-function-java-time-format-resolverstyle"
language: "java"
lang: "en"
category: "function"
name: "java.time.format.ResolverStyle"
title: "ResolverStyle"
directive: "type"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/ResolverStyle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResolverStyle

Enumeration of different ways to resolve dates and times.
 

 Parsing a text string occurs in two phases.
 Phase 1 is a basic text parse according to the fields added to the builder.
 Phase 2 resolves the parsed field-value pairs into date and/or time objects.
 This style is used to control how phase 2, resolving, happens.

 This is an immutable and thread-safe enum.

> *Since 1.8*
