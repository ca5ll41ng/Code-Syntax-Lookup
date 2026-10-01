---
id: "python-en-function-xml-sax-handler-contenthandler-ignorablewhitespace"
language: "python"
lang: "en"
category: "function"
name: "ContentHandler.ignorableWhitespace"
signature: "ContentHandler.ignorableWhitespace(whitespace)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.ContentHandler.ignorableWhitespace"
license: "PSF"
updated: "2026-10-01"
---

# ContentHandler.ignorableWhitespace

Receive notification of ignorable whitespace in element content.

Validating Parsers must use this method to report each chunk of ignorable
whitespace (see the W3C XML 1.0 recommendation, section 2.10): non-validating
parsers may also use this method if they are capable of parsing and using
content models.

SAX parsers may return all contiguous whitespace in a single chunk, or they may
split it into several chunks; however, all of the characters in any single event
must come from the same external entity, so that the Locator provides useful
information.
