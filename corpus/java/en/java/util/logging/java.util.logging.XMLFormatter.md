---
id: "java-en-function-java-util-logging-xmlformatter"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.XMLFormatter"
title: "XMLFormatter"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/XMLFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFormatter

Format a LogRecord into a standard XML format.
 

 The DTD specification is provided as Appendix A to the
 Java Logging APIs specification.
 

 The XMLFormatter can be used with arbitrary character encodings,
 but it is recommended that it normally be used with UTF-8.  The
 character encoding can be set on the output Handler.

 an `getInstant() Instant` which can have nanoseconds below
 the millisecond resolution.
 The DTD specification has been updated to allow for an optional
 `` element. By default, the XMLFormatter will compute the
 nanosecond adjustment below the millisecond resolution (using
 `LogRecord.getInstant().getNano() % 1000_000`) - and if this is not 0,
 this adjustment value will be printed in the new `` element.
 The event instant can then be reconstructed using
 `Instant.ofEpochSecond(millis/1000L, (millis % 1000L) * 1000_000L + nanos)`
 where `millis` and `nanos` represent the numbers serialized in
 the `` and `` elements, respectively.
 

 The `` element will now contain the whole instant as formatted
 by the `ISO_INSTANT DateTimeFormatter.ISO_INSTANT`
 formatter.
 

 For compatibility with old parsers, XMLFormatters can
 be configured to revert to the old format by specifying a
 `.useInstant = false`
 `getProperty(java.lang.String) property` in the
 logging configuration. When `useInstant` is `false`, the old
 formatting will be preserved. When `useInstant` is `true`
 (the default), the `` element will be printed and the
 `` element will contain the `ISO_INSTANT formatted` instant.
 

 For instance, in order to configure plain instances of XMLFormatter to omit
 the new `` element,
 `java.util.logging.XMLFormatter.useInstant = false` can be specified
 in the logging configuration.

> *Since 1.4*
