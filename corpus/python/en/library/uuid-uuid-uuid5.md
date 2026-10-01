---
id: "python-en-function-uuid-uuid5"
language: "python"
lang: "en"
category: "function"
name: "uuid5"
signature: "uuid5(namespace, name)"
directive: "function"
module: "uuid"
source_url: "https://docs.python.org/3/library/uuid.html#uuid.uuid5"
license: "PSF"
updated: "2026-10-01"
---

# uuid5

Generate a UUID based on the SHA-1 hash of a namespace identifier (which is a
UUID) and a name (which is a `bytes` object or a string
that will be encoded using UTF-8)
according to RFC RFC 9562, §5.5 <9562#section-5.5>.
