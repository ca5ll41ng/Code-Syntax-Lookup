---
id: "python-en-function-uuid-uuid1"
language: "python"
lang: "en"
category: "function"
name: "uuid1"
signature: "uuid1(node=None, clock_seq=None)"
directive: "function"
module: "uuid"
source_url: "https://docs.python.org/3/library/uuid.html#uuid.uuid1"
license: "PSF"
updated: "2026-10-01"
---

# uuid1

Generate a UUID from a host ID, sequence number, and the current time
according to RFC RFC 9562, §5.1 <9562#section-5.1>.

When *node* is not specified, `getnode` is used to obtain the hardware
address as a 48-bit positive integer. When a sequence number *clock_seq* is
not specified, a pseudo-random 14-bit positive integer is generated.

If *node* or *clock_seq* exceed their expected bit count,
only their least significant bits are kept.
