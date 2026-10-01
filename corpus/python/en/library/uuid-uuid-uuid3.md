---
id: "python-en-function-uuid-uuid3"
language: "python"
lang: "en"
category: "function"
name: "uuid3"
signature: "uuid3(namespace, name)"
directive: "function"
module: "uuid"
source_url: "https://docs.python.org/3/library/uuid.html#uuid.uuid3"
license: "PSF"
updated: "2026-10-01"
---

# uuid3

Generate a UUID based on the MD5 hash of a namespace identifier (which is a
UUID) and a name (which is a `bytes` object or a string
that will be encoded using UTF-8)
according to RFC RFC 9562, §5.3 <9562#section-5.3>.
