---
id: "python-en-function-os-grnd_nonblock"
language: "python"
lang: "en"
category: "function"
name: "GRND_NONBLOCK"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.GRND_NONBLOCK"
license: "PSF"
updated: "2026-10-01"
---

# GRND_NONBLOCK

By  default, when reading from `/dev/random`, `getrandom` blocks if
no random bytes are available, and when reading from `/dev/urandom`, it blocks
if the entropy pool has not yet been initialized.

If the :py`GRND_NONBLOCK` flag is set, then `getrandom` does not
block in these cases, but instead immediately raises `BlockingIOError`.

> *Added in 3.6*
