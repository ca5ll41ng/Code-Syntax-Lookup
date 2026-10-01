---
id: "python-en-function-token-token"
language: "python"
lang: "en"
category: "function"
name: "token"
title: "Added `AWAIT` and `ASYNC` tokens."
directive: "module"
module: "token"
source_url: "https://docs.python.org/3/library/token.html#module-token"
license: "PSF"
updated: "2026-10-01"
---

# Added `AWAIT` and `ASYNC` tokens.

> *Changed in 3.5*: Added :data:`!AWAIT` and :data:`!ASYNC` tokens.

> *Changed in 3.7*: Added :data:`COMMENT`, :data:`NL` and :data:`ENCODING` tokens.

> *Changed in 3.7*: Removed :data:`!AWAIT` and :data:`!ASYNC` tokens. "async" and "await" are now tokenized as :data:`NAME` tokens.

> *Changed in 3.8*: Added :data:`TYPE_COMMENT`, :data:`TYPE_IGNORE`, :data:`COLONEQUAL`. Added :data:`!AWAIT` and :data:`!ASYNC` tokens back (they're needed to support parsing older Python versions for :func:`ast.parse` with ``feature_version`` set to 6 or lower).

> *Changed in 3.12*: Added :data:`EXCLAMATION`.

> *Changed in 3.13*: Removed :data:`!AWAIT` and :data:`!ASYNC` tokens again.
