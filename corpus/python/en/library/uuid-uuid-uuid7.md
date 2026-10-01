---
id: "python-en-function-uuid-uuid7"
language: "python"
lang: "en"
category: "function"
name: "uuid7"
signature: "uuid7()"
directive: "function"
module: "uuid"
source_url: "https://docs.python.org/3/library/uuid.html#uuid.uuid7"
license: "PSF"
updated: "2026-10-01"
---

# uuid7

Generate a time-based UUID according to
RFC RFC 9562, §5.7 <9562#section-5.7>.

For portability across platforms lacking sub-millisecond precision, UUIDs
produced by this function embed a 48-bit timestamp and use a 42-bit counter
to guarantee monotonicity within a millisecond.

> *Added in 3.14*
